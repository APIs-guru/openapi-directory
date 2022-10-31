package operations

import (
"openapi/pkg/models/shared")

type SecretsSecretsListQueryParams struct {
    Created *string `queryParam:"style=form,explode=true,name=created"`
    CreatedGte *string `queryParam:"style=form,explode=true,name=created__gte"`
    CreatedLte *string `queryParam:"style=form,explode=true,name=created__lte"`
    Device *string `queryParam:"style=form,explode=true,name=device"`
    DeviceN *string `queryParam:"style=form,explode=true,name=device__n"`
    DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
    DeviceIDN *string `queryParam:"style=form,explode=true,name=device_id__n"`
    ID *string `queryParam:"style=form,explode=true,name=id"`
    IDGt *string `queryParam:"style=form,explode=true,name=id__gt"`
    IDGte *string `queryParam:"style=form,explode=true,name=id__gte"`
    IDLt *string `queryParam:"style=form,explode=true,name=id__lt"`
    IDLte *string `queryParam:"style=form,explode=true,name=id__lte"`
    IDN *string `queryParam:"style=form,explode=true,name=id__n"`
    LastUpdated *string `queryParam:"style=form,explode=true,name=last_updated"`
    LastUpdatedGte *string `queryParam:"style=form,explode=true,name=last_updated__gte"`
    LastUpdatedLte *string `queryParam:"style=form,explode=true,name=last_updated__lte"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    NameIc *string `queryParam:"style=form,explode=true,name=name__ic"`
    NameIe *string `queryParam:"style=form,explode=true,name=name__ie"`
    NameIew *string `queryParam:"style=form,explode=true,name=name__iew"`
    NameIsw *string `queryParam:"style=form,explode=true,name=name__isw"`
    NameN *string `queryParam:"style=form,explode=true,name=name__n"`
    NameNic *string `queryParam:"style=form,explode=true,name=name__nic"`
    NameNie *string `queryParam:"style=form,explode=true,name=name__nie"`
    NameNiew *string `queryParam:"style=form,explode=true,name=name__niew"`
    NameNisw *string `queryParam:"style=form,explode=true,name=name__nisw"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Role *string `queryParam:"style=form,explode=true,name=role"`
    RoleN *string `queryParam:"style=form,explode=true,name=role__n"`
    RoleID *string `queryParam:"style=form,explode=true,name=role_id"`
    RoleIDN *string `queryParam:"style=form,explode=true,name=role_id__n"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    TagN *string `queryParam:"style=form,explode=true,name=tag__n"`
    
}

type SecretsSecretsListRequest struct {
    QueryParams SecretsSecretsListQueryParams 
    
}

type SecretsSecretsList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.Secret `json:"results"`
    
}

type SecretsSecretsListResponse struct {
    ContentType string 
    StatusCode int64 
    SecretsSecretsList200ApplicationJSONObject *SecretsSecretsList200ApplicationJSON 
    
}

