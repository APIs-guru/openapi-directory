package operations



type UpdateOrganizationSamlIdpPathParams struct {
    IdpID string `pathParam:"style=simple,explode=false,name=idpId"`
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type UpdateOrganizationSamlIdpRequestBody struct {
    SloLogoutURL *string `json:"sloLogoutUrl,omitempty"`
    X509certSha1Fingerprint *string `json:"x509certSha1Fingerprint,omitempty"`
    
}

type UpdateOrganizationSamlIdpRequest struct {
    PathParams UpdateOrganizationSamlIdpPathParams 
    Request *UpdateOrganizationSamlIdpRequestBody `request:"mediaType=application/json"`
    
}

type UpdateOrganizationSamlIdpResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateOrganizationSamlIdp200ApplicationJSONObject map[string]interface{} 
    
}

