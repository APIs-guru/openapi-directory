package shared



type GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer struct {
    ClientKey *GoogleCloudConnectorsV1Secret `json:"clientKey,omitempty"`
    JwtClaims *GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims `json:"jwtClaims,omitempty"`
    
}

