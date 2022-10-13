package operations

type GetOrganizationActionBatchPathParams struct {
	ActionBatchID  string `pathParam:"style=simple,explode=false,name=actionBatchId"`
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationActionBatchRequest struct {
	PathParams GetOrganizationActionBatchPathParams
}

type GetOrganizationActionBatchResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	GetOrganizationActionBatch200ApplicationJSONObject map[string]interface{}
}
