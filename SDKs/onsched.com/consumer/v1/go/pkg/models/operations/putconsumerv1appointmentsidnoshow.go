package operations



type PutConsumerV1AppointmentsIDNoshowPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutConsumerV1AppointmentsIDNoshowRequests struct {
    AppointmentNoShowModel map[string]interface{} `request:"mediaType=application/*+json"`
    AppointmentNoShowModel1 map[string]interface{} `request:"mediaType=application/json"`
    AppointmentNoShowModel2 map[string]interface{} `request:"mediaType=application/json-patch+json"`
    AppointmentNoShowModel3 map[string]interface{} `request:"mediaType=text/json"`
    
}

type PutConsumerV1AppointmentsIDNoshowRequest struct {
    PathParams PutConsumerV1AppointmentsIDNoshowPathParams 
    Request *PutConsumerV1AppointmentsIDNoshowRequests 
    
}

type PutConsumerV1AppointmentsIDNoshowResponse struct {
    ContentType string 
    StatusCode int64 
    
}

