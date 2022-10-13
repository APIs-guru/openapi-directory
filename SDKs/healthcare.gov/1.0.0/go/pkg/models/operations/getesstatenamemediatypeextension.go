package operations

type GetEsStateNameMediaTypeExtensionMediaTypeExtensionEnum string

const (
	GetEsStateNameMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetEsStateNameMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)

type GetEsStateNameMediaTypeExtensionPathParams struct {
	MediaTypeExtension GetEsStateNameMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
	StateName          string                                                 `pathParam:"style=simple,explode=false,name=stateName"`
}

type GetEsStateNameMediaTypeExtensionRequest struct {
	PathParams GetEsStateNameMediaTypeExtensionPathParams
}

type GetEsStateNameMediaTypeExtensionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
