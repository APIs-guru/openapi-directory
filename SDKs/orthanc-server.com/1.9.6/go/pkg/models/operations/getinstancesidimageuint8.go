package operations



type GetInstancesIDImageUint8PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetInstancesIDImageUint8QueryParams struct {
    Quality *float64 `queryParam:"style=form,explode=true,name=quality"`
    
}

type GetInstancesIDImageUint8Headers struct {
    Accept *string `header:"style=simple,explode=false,name=Accept"`
    
}

type GetInstancesIDImageUint8Request struct {
    PathParams GetInstancesIDImageUint8PathParams 
    QueryParams GetInstancesIDImageUint8QueryParams 
    Headers GetInstancesIDImageUint8Headers 
    
}

type GetInstancesIDImageUint8Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

