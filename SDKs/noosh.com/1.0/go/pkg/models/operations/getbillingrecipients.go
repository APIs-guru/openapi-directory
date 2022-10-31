package operations

type GetBillingRecipientsPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetBillingRecipientsRequest struct {
	PathParams GetBillingRecipientsPathParams
}

type GetBillingRecipientsResponse struct {
	Body           []byte
	ContactsListVo *interface{}
	ContentType    string
	HTTPStatusVo   *interface{}
	StatusCode     int64
}
