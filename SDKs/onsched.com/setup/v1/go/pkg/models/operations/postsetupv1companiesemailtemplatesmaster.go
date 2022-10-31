package operations

import (
"openapi/pkg/models/shared")

type PostSetupV1CompaniesEmailTemplatesMasterRequests struct {
    MasterTemplateSettingsInputModel *shared.MasterTemplateSettingsInputModel `request:"mediaType=application/*+json"`
    MasterTemplateSettingsInputModel1 *shared.MasterTemplateSettingsInputModel `request:"mediaType=application/json"`
    MasterTemplateSettingsInputModel2 *shared.MasterTemplateSettingsInputModel `request:"mediaType=application/json-patch+json"`
    MasterTemplateSettingsInputModel3 *shared.MasterTemplateSettingsInputModel `request:"mediaType=text/json"`
    
}

type PostSetupV1CompaniesEmailTemplatesMasterRequest struct {
    Request *PostSetupV1CompaniesEmailTemplatesMasterRequests 
    
}

type PostSetupV1CompaniesEmailTemplatesMasterResponse struct {
    ContentType string 
    MasterEmailTemplateSettingsViewModel *shared.MasterEmailTemplateSettingsViewModel 
    StatusCode int64 
    
}

