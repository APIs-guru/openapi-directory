package operations

import (
"openapi/pkg/models/shared")

type PostSetupV1LocationsIDEmailTemplatesMasterPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostSetupV1LocationsIDEmailTemplatesMasterRequests struct {
    MasterTemplateSettingsInputModel *shared.MasterTemplateSettingsInputModel `request:"mediaType=application/*+json"`
    MasterTemplateSettingsInputModel1 *shared.MasterTemplateSettingsInputModel `request:"mediaType=application/json"`
    MasterTemplateSettingsInputModel2 *shared.MasterTemplateSettingsInputModel `request:"mediaType=application/json-patch+json"`
    MasterTemplateSettingsInputModel3 *shared.MasterTemplateSettingsInputModel `request:"mediaType=text/json"`
    
}

type PostSetupV1LocationsIDEmailTemplatesMasterRequest struct {
    PathParams PostSetupV1LocationsIDEmailTemplatesMasterPathParams 
    Request *PostSetupV1LocationsIDEmailTemplatesMasterRequests 
    
}

type PostSetupV1LocationsIDEmailTemplatesMasterResponse struct {
    ContentType string 
    MasterEmailTemplateSettingsViewModel *shared.MasterEmailTemplateSettingsViewModel 
    StatusCode int64 
    
}

