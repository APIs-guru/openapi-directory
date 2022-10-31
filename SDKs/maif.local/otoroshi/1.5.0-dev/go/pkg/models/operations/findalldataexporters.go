package operations

import (
"openapi/pkg/models/shared")

type FindAllDataExportersSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type FindAllDataExportersRequest struct {
    Security FindAllDataExportersSecurity 
    
}

type FindAllDataExportersResponse struct {
    ContentType string 
    DataExporterConfigs []shared.DataExporterConfig 
    StatusCode int64 
    
}

