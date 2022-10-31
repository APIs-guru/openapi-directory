package operations



type GetLiveRecordingFilePathParams struct {
    RecordingID string `pathParam:"style=simple,explode=false,name=recordingId"`
    
}

type GetLiveRecordingFileRequest struct {
    PathParams GetLiveRecordingFilePathParams 
    
}

type GetLiveRecordingFileResponse struct {
    ContentType string 
    GetLiveRecordingFile200VideoWildcardBinaryString []byte 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

