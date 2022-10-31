package operations

import (
"openapi/pkg/models/shared")

type IpamIPAddressesListQueryParams struct {
    Address *string `queryParam:"style=form,explode=true,name=address"`
    AssignedToInterface *string `queryParam:"style=form,explode=true,name=assigned_to_interface"`
    Created *string `queryParam:"style=form,explode=true,name=created"`
    CreatedGte *string `queryParam:"style=form,explode=true,name=created__gte"`
    CreatedLte *string `queryParam:"style=form,explode=true,name=created__lte"`
    Device *string `queryParam:"style=form,explode=true,name=device"`
    DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
    DNSName *string `queryParam:"style=form,explode=true,name=dns_name"`
    DNSNameIc *string `queryParam:"style=form,explode=true,name=dns_name__ic"`
    DNSNameIe *string `queryParam:"style=form,explode=true,name=dns_name__ie"`
    DNSNameIew *string `queryParam:"style=form,explode=true,name=dns_name__iew"`
    DNSNameIsw *string `queryParam:"style=form,explode=true,name=dns_name__isw"`
    DNSNameN *string `queryParam:"style=form,explode=true,name=dns_name__n"`
    DNSNameNic *string `queryParam:"style=form,explode=true,name=dns_name__nic"`
    DNSNameNie *string `queryParam:"style=form,explode=true,name=dns_name__nie"`
    DNSNameNiew *string `queryParam:"style=form,explode=true,name=dns_name__niew"`
    DNSNameNisw *string `queryParam:"style=form,explode=true,name=dns_name__nisw"`
    Family *float64 `queryParam:"style=form,explode=true,name=family"`
    ID *string `queryParam:"style=form,explode=true,name=id"`
    IDGt *string `queryParam:"style=form,explode=true,name=id__gt"`
    IDGte *string `queryParam:"style=form,explode=true,name=id__gte"`
    IDLt *string `queryParam:"style=form,explode=true,name=id__lt"`
    IDLte *string `queryParam:"style=form,explode=true,name=id__lte"`
    IDN *string `queryParam:"style=form,explode=true,name=id__n"`
    Interface *string `queryParam:"style=form,explode=true,name=interface"`
    InterfaceN *string `queryParam:"style=form,explode=true,name=interface__n"`
    InterfaceID *string `queryParam:"style=form,explode=true,name=interface_id"`
    InterfaceIDN *string `queryParam:"style=form,explode=true,name=interface_id__n"`
    LastUpdated *string `queryParam:"style=form,explode=true,name=last_updated"`
    LastUpdatedGte *string `queryParam:"style=form,explode=true,name=last_updated__gte"`
    LastUpdatedLte *string `queryParam:"style=form,explode=true,name=last_updated__lte"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    MaskLength *float64 `queryParam:"style=form,explode=true,name=mask_length"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Parent *string `queryParam:"style=form,explode=true,name=parent"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Role *string `queryParam:"style=form,explode=true,name=role"`
    RoleN *string `queryParam:"style=form,explode=true,name=role__n"`
    Status *string `queryParam:"style=form,explode=true,name=status"`
    StatusN *string `queryParam:"style=form,explode=true,name=status__n"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    TagN *string `queryParam:"style=form,explode=true,name=tag__n"`
    Tenant *string `queryParam:"style=form,explode=true,name=tenant"`
    TenantN *string `queryParam:"style=form,explode=true,name=tenant__n"`
    TenantGroup *string `queryParam:"style=form,explode=true,name=tenant_group"`
    TenantGroupN *string `queryParam:"style=form,explode=true,name=tenant_group__n"`
    TenantGroupID *string `queryParam:"style=form,explode=true,name=tenant_group_id"`
    TenantGroupIDN *string `queryParam:"style=form,explode=true,name=tenant_group_id__n"`
    TenantID *string `queryParam:"style=form,explode=true,name=tenant_id"`
    TenantIDN *string `queryParam:"style=form,explode=true,name=tenant_id__n"`
    VirtualMachine *string `queryParam:"style=form,explode=true,name=virtual_machine"`
    VirtualMachineN *string `queryParam:"style=form,explode=true,name=virtual_machine__n"`
    VirtualMachineID *string `queryParam:"style=form,explode=true,name=virtual_machine_id"`
    VirtualMachineIDN *string `queryParam:"style=form,explode=true,name=virtual_machine_id__n"`
    Vrf *string `queryParam:"style=form,explode=true,name=vrf"`
    VrfN *string `queryParam:"style=form,explode=true,name=vrf__n"`
    VrfID *string `queryParam:"style=form,explode=true,name=vrf_id"`
    VrfIDN *string `queryParam:"style=form,explode=true,name=vrf_id__n"`
    
}

type IpamIPAddressesListRequest struct {
    QueryParams IpamIPAddressesListQueryParams 
    
}

type IpamIPAddressesList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.IPAddress `json:"results"`
    
}

type IpamIPAddressesListResponse struct {
    ContentType string 
    StatusCode int64 
    IpamIPAddressesList200ApplicationJSONObject *IpamIPAddressesList200ApplicationJSON 
    
}

