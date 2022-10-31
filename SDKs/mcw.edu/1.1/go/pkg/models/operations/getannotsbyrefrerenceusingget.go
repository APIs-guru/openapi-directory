package operations



type GetAnnotsByRefrerenceUsingGetPathParams struct {
    RefRgdID int32 `pathParam:"style=simple,explode=false,name=refRgdId"`
    
}

type GetAnnotsByRefrerenceUsingGetRequest struct {
    PathParams GetAnnotsByRefrerenceUsingGetPathParams 
    
}

type GetAnnotsByRefrerenceUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

