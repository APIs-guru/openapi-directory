package operations

type GetBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum string

const (
	GetBlogPageNameMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)

type GetBlogPageNameMediaTypeExtensionPathParams struct {
	MediaTypeExtension GetBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
	PageName           string                                                  `pathParam:"style=simple,explode=false,name=pageName"`
}

type GetBlogPageNameMediaTypeExtensionRequest struct {
	PathParams GetBlogPageNameMediaTypeExtensionPathParams
}

type GetBlogPageNameMediaTypeExtensionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
