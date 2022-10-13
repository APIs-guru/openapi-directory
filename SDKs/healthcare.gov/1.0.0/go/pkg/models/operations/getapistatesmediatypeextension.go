package operations

type GetAPIStatesMediaTypeExtensionMediaTypeExtensionEnum string

const (
	GetAPIStatesMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetAPIStatesMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)

type GetAPIStatesMediaTypeExtensionPathParams struct {
	MediaTypeExtension GetAPIStatesMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
}

type GetAPIStatesMediaTypeExtensionRequest struct {
	PathParams GetAPIStatesMediaTypeExtensionPathParams
}

type GetAPIStatesMediaTypeExtensionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
