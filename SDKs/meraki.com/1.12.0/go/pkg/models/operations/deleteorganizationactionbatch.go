package operations

type DeleteOrganizationActionBatchPathParams struct {
	ActionBatchID  string `pathParam:"style=simple,explode=false,name=actionBatchId"`
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type DeleteOrganizationActionBatchRequest struct {
	PathParams DeleteOrganizationActionBatchPathParams
}

type DeleteOrganizationActionBatchResponse struct {
	ContentType string
	StatusCode  int64
}
