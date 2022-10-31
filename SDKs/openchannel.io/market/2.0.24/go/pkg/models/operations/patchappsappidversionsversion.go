package operations

type PatchAppsAppIDVersionsVersionPathParams struct {
	AppID   string `pathParam:"style=simple,explode=false,name=appId"`
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type PatchAppsAppIDVersionsVersionQueryParams struct {
	Access           *string `queryParam:"style=form,explode=true,name=access"`
	Allow            *string `queryParam:"style=form,explode=true,name=allow"`
	ApprovalRequired *string `queryParam:"style=form,explode=true,name=approvalRequired"`
	Attributes       *string `queryParam:"style=form,explode=true,name=attributes"`
	CustomData       *string `queryParam:"style=form,explode=true,name=customData"`
	DeveloperID      string  `queryParam:"style=form,explode=true,name=developerId"`
	Model            *string `queryParam:"style=form,explode=true,name=model"`
	Name             *string `queryParam:"style=form,explode=true,name=name"`
	Restrict         *string `queryParam:"style=form,explode=true,name=restrict"`
	Type             *string `queryParam:"style=form,explode=true,name=type"`
}

type PatchAppsAppIDVersionsVersionRequest struct {
	PathParams  PatchAppsAppIDVersionsVersionPathParams
	QueryParams PatchAppsAppIDVersionsVersionQueryParams
}

type PatchAppsAppIDVersionsVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
