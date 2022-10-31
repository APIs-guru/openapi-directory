package operations

import (
"time")

type GenerateDeviceCameraSnapshotPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GenerateDeviceCameraSnapshotRequestBody struct {
    Fullframe *bool `json:"fullframe,omitempty"`
    Timestamp *time.Time `json:"timestamp,omitempty"`
    
}

type GenerateDeviceCameraSnapshotRequest struct {
    PathParams GenerateDeviceCameraSnapshotPathParams 
    Request *GenerateDeviceCameraSnapshotRequestBody `request:"mediaType=application/json"`
    
}

type GenerateDeviceCameraSnapshotResponse struct {
    ContentType string 
    StatusCode int64 
    GenerateDeviceCameraSnapshot202ApplicationJSONObject map[string]interface{} 
    
}

