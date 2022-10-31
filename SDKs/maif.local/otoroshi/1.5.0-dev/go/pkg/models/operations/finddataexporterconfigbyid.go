package operations

import (
"openapi/pkg/models/shared")

type FindDataExporterConfigByIDPathParams struct {
    DataExporterConfigID string `pathParam:"style=simple,explode=false,name=dataExporterConfigId"`
    
}

type FindDataExporterConfigByIDSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type FindDataExporterConfigByIDRequest struct {
    PathParams FindDataExporterConfigByIDPathParams 
    Security FindDataExporterConfigByIDSecurity 
    
}

type FindDataExporterConfigByIDResponse struct {
    ContentType string 
    DataExporterConfig *shared.DataExporterConfig 
    StatusCode int64 
    
}

