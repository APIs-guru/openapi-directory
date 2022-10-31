package operations

import (
	"openapi/pkg/models/shared"
)

type GetBrandingOptionsResponse struct {
	BrandingOptions *shared.BrandingOptions
	ContentType     string
	StatusCode      int64
}
