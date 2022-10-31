package operations



type NodesFilesReadPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    Path string `pathParam:"style=simple,explode=false,name=path"`
    Provider string `pathParam:"style=simple,explode=false,name=provider"`
    
}

type NodesFilesReadRequest struct {
    PathParams NodesFilesReadPathParams 
    
}

type NodesFilesReadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

