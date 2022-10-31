package operations

import (
"openapi/pkg/models/shared")

type LandlordControllerGetMaintenanceJobsPathParams struct {
    ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
    
}

type LandlordControllerGetMaintenanceJobsQueryParams struct {
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type LandlordControllerGetMaintenanceJobsRequest struct {
    PathParams LandlordControllerGetMaintenanceJobsPathParams 
    QueryParams LandlordControllerGetMaintenanceJobsQueryParams 
    
}

type LandlordControllerGetMaintenanceJobsResponse struct {
    ContentType string 
    LandlordMaintenanceModel *shared.LandlordMaintenanceModel 
    StatusCode int64 
    
}

