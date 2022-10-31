package operations



type PostPeersIDStoreStraightPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostPeersIDStoreStraightRequest struct {
    PathParams PostPeersIDStoreStraightPathParams 
    Request []byte `request:"mediaType=application/dicom"`
    
}

type PostPeersIDStoreStraightResponse struct {
    ContentType string 
    PostPeersIDStoreStraight200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

