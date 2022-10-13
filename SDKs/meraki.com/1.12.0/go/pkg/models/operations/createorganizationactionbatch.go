package operations

type CreateOrganizationActionBatchPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type CreateOrganizationActionBatchRequestBodyActions struct {
	Body      map[string]interface{} `json:"body"`
	Operation string                 `json:"operation"`
	Resource  string                 `json:"resource"`
}

type CreateOrganizationActionBatchRequestBody struct {
	Actions     []CreateOrganizationActionBatchRequestBodyActions `json:"actions"`
	Confirmed   *bool                                             `json:"confirmed"`
	Synchronous *bool                                             `json:"synchronous"`
}

type CreateOrganizationActionBatchRequest struct {
	PathParams CreateOrganizationActionBatchPathParams
	Request    CreateOrganizationActionBatchRequestBody `request:"mediaType=application/json"`
}

type CreateOrganizationActionBatchResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	CreateOrganizationActionBatch201ApplicationJSONObject map[string]interface{}
}
