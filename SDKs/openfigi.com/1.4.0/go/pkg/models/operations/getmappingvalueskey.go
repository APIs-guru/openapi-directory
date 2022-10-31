package operations




type GetMappingValuesKeyKeyEnum string

const (
    GetMappingValuesKeyKeyEnumIDType GetMappingValuesKeyKeyEnum = "idType"
GetMappingValuesKeyKeyEnumExchCode GetMappingValuesKeyKeyEnum = "exchCode"
GetMappingValuesKeyKeyEnumMicCode GetMappingValuesKeyKeyEnum = "micCode"
GetMappingValuesKeyKeyEnumCurrency GetMappingValuesKeyKeyEnum = "currency"
GetMappingValuesKeyKeyEnumMarketSecDes GetMappingValuesKeyKeyEnum = "marketSecDes"
GetMappingValuesKeyKeyEnumSecurityType GetMappingValuesKeyKeyEnum = "securityType"
GetMappingValuesKeyKeyEnumSecurityType2 GetMappingValuesKeyKeyEnum = "securityType2"
)


type GetMappingValuesKeyPathParams struct {
    Key GetMappingValuesKeyKeyEnum `pathParam:"style=simple,explode=false,name=key"`
    
}

type GetMappingValuesKeyRequest struct {
    PathParams GetMappingValuesKeyPathParams 
    
}

type GetMappingValuesKey200ApplicationJSON struct {
    Values []string `json:"values,omitempty"`
    
}

type GetMappingValuesKeyResponse struct {
    ContentType string 
    GetMappingValuesKey200ApplicationJSONObject *GetMappingValuesKey200ApplicationJSON 
    GetMappingValuesKey400WildcardString *string 
    GetMappingValuesKey500WildcardString *string 
    StatusCode int64 
    
}

