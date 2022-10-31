package operations

type UpdateOrganizationActionBatchPathParams struct {
	ActionBatchID  string `pathParam:"style=simple,explode=false,name=actionBatchId"`
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type UpdateOrganizationActionBatchRequestBody struct {
	Confirmed   *bool `json:"confirmed,omitempty"`
	Synchronous *bool `json:"synchronous,omitempty"`
}

type UpdateOrganizationActionBatchRequest struct {
	PathParams UpdateOrganizationActionBatchPathParams
	Request    *UpdateOrganizationActionBatchRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationActionBatchResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	UpdateOrganizationActionBatch200ApplicationJSONObject map[string]interface{}
}
