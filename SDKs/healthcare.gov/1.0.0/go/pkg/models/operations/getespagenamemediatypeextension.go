package operations

type GetEsPageNameMediaTypeExtensionMediaTypeExtensionEnum string

const (
	GetEsPageNameMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetEsPageNameMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)

type GetEsPageNameMediaTypeExtensionPathParams struct {
	MediaTypeExtension GetEsPageNameMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
	PageName           string                                                `pathParam:"style=simple,explode=false,name=pageName"`
}

type GetEsPageNameMediaTypeExtensionRequest struct {
	PathParams GetEsPageNameMediaTypeExtensionPathParams
}

type GetEsPageNameMediaTypeExtensionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
