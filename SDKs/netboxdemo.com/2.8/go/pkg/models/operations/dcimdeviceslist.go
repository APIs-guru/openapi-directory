package operations

import (
"openapi/pkg/models/shared")

type DcimDevicesListQueryParams struct {
    AssetTag *string `queryParam:"style=form,explode=true,name=asset_tag"`
    AssetTagIc *string `queryParam:"style=form,explode=true,name=asset_tag__ic"`
    AssetTagIe *string `queryParam:"style=form,explode=true,name=asset_tag__ie"`
    AssetTagIew *string `queryParam:"style=form,explode=true,name=asset_tag__iew"`
    AssetTagIsw *string `queryParam:"style=form,explode=true,name=asset_tag__isw"`
    AssetTagN *string `queryParam:"style=form,explode=true,name=asset_tag__n"`
    AssetTagNic *string `queryParam:"style=form,explode=true,name=asset_tag__nic"`
    AssetTagNie *string `queryParam:"style=form,explode=true,name=asset_tag__nie"`
    AssetTagNiew *string `queryParam:"style=form,explode=true,name=asset_tag__niew"`
    AssetTagNisw *string `queryParam:"style=form,explode=true,name=asset_tag__nisw"`
    ClusterID *string `queryParam:"style=form,explode=true,name=cluster_id"`
    ClusterIDN *string `queryParam:"style=form,explode=true,name=cluster_id__n"`
    ConsolePorts *string `queryParam:"style=form,explode=true,name=console_ports"`
    ConsoleServerPorts *string `queryParam:"style=form,explode=true,name=console_server_ports"`
    Created *string `queryParam:"style=form,explode=true,name=created"`
    CreatedGte *string `queryParam:"style=form,explode=true,name=created__gte"`
    CreatedLte *string `queryParam:"style=form,explode=true,name=created__lte"`
    DeviceBays *string `queryParam:"style=form,explode=true,name=device_bays"`
    DeviceTypeID *string `queryParam:"style=form,explode=true,name=device_type_id"`
    DeviceTypeIDN *string `queryParam:"style=form,explode=true,name=device_type_id__n"`
    Face *string `queryParam:"style=form,explode=true,name=face"`
    FaceN *string `queryParam:"style=form,explode=true,name=face__n"`
    HasPrimaryIP *string `queryParam:"style=form,explode=true,name=has_primary_ip"`
    ID *string `queryParam:"style=form,explode=true,name=id"`
    IDGt *string `queryParam:"style=form,explode=true,name=id__gt"`
    IDGte *string `queryParam:"style=form,explode=true,name=id__gte"`
    IDLt *string `queryParam:"style=form,explode=true,name=id__lt"`
    IDLte *string `queryParam:"style=form,explode=true,name=id__lte"`
    IDN *string `queryParam:"style=form,explode=true,name=id__n"`
    Interfaces *string `queryParam:"style=form,explode=true,name=interfaces"`
    IsFullDepth *string `queryParam:"style=form,explode=true,name=is_full_depth"`
    LastUpdated *string `queryParam:"style=form,explode=true,name=last_updated"`
    LastUpdatedGte *string `queryParam:"style=form,explode=true,name=last_updated__gte"`
    LastUpdatedLte *string `queryParam:"style=form,explode=true,name=last_updated__lte"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    LocalContextData *string `queryParam:"style=form,explode=true,name=local_context_data"`
    MacAddress *string `queryParam:"style=form,explode=true,name=mac_address"`
    MacAddressIc *string `queryParam:"style=form,explode=true,name=mac_address__ic"`
    MacAddressIe *string `queryParam:"style=form,explode=true,name=mac_address__ie"`
    MacAddressIew *string `queryParam:"style=form,explode=true,name=mac_address__iew"`
    MacAddressIsw *string `queryParam:"style=form,explode=true,name=mac_address__isw"`
    MacAddressN *string `queryParam:"style=form,explode=true,name=mac_address__n"`
    MacAddressNic *string `queryParam:"style=form,explode=true,name=mac_address__nic"`
    MacAddressNie *string `queryParam:"style=form,explode=true,name=mac_address__nie"`
    MacAddressNiew *string `queryParam:"style=form,explode=true,name=mac_address__niew"`
    MacAddressNisw *string `queryParam:"style=form,explode=true,name=mac_address__nisw"`
    Manufacturer *string `queryParam:"style=form,explode=true,name=manufacturer"`
    ManufacturerN *string `queryParam:"style=form,explode=true,name=manufacturer__n"`
    ManufacturerID *string `queryParam:"style=form,explode=true,name=manufacturer_id"`
    ManufacturerIDN *string `queryParam:"style=form,explode=true,name=manufacturer_id__n"`
    Model *string `queryParam:"style=form,explode=true,name=model"`
    ModelN *string `queryParam:"style=form,explode=true,name=model__n"`
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
    PassThroughPorts *string `queryParam:"style=form,explode=true,name=pass_through_ports"`
    Platform *string `queryParam:"style=form,explode=true,name=platform"`
    PlatformN *string `queryParam:"style=form,explode=true,name=platform__n"`
    PlatformID *string `queryParam:"style=form,explode=true,name=platform_id"`
    PlatformIDN *string `queryParam:"style=form,explode=true,name=platform_id__n"`
    Position *string `queryParam:"style=form,explode=true,name=position"`
    PositionGt *string `queryParam:"style=form,explode=true,name=position__gt"`
    PositionGte *string `queryParam:"style=form,explode=true,name=position__gte"`
    PositionLt *string `queryParam:"style=form,explode=true,name=position__lt"`
    PositionLte *string `queryParam:"style=form,explode=true,name=position__lte"`
    PositionN *string `queryParam:"style=form,explode=true,name=position__n"`
    PowerOutlets *string `queryParam:"style=form,explode=true,name=power_outlets"`
    PowerPorts *string `queryParam:"style=form,explode=true,name=power_ports"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    RackGroupID *string `queryParam:"style=form,explode=true,name=rack_group_id"`
    RackGroupIDN *string `queryParam:"style=form,explode=true,name=rack_group_id__n"`
    RackID *string `queryParam:"style=form,explode=true,name=rack_id"`
    RackIDN *string `queryParam:"style=form,explode=true,name=rack_id__n"`
    Region *string `queryParam:"style=form,explode=true,name=region"`
    RegionN *string `queryParam:"style=form,explode=true,name=region__n"`
    RegionID *string `queryParam:"style=form,explode=true,name=region_id"`
    RegionIDN *string `queryParam:"style=form,explode=true,name=region_id__n"`
    Role *string `queryParam:"style=form,explode=true,name=role"`
    RoleN *string `queryParam:"style=form,explode=true,name=role__n"`
    RoleID *string `queryParam:"style=form,explode=true,name=role_id"`
    RoleIDN *string `queryParam:"style=form,explode=true,name=role_id__n"`
    Serial *string `queryParam:"style=form,explode=true,name=serial"`
    Site *string `queryParam:"style=form,explode=true,name=site"`
    SiteN *string `queryParam:"style=form,explode=true,name=site__n"`
    SiteID *string `queryParam:"style=form,explode=true,name=site_id"`
    SiteIDN *string `queryParam:"style=form,explode=true,name=site_id__n"`
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
    VcPosition *string `queryParam:"style=form,explode=true,name=vc_position"`
    VcPositionGt *string `queryParam:"style=form,explode=true,name=vc_position__gt"`
    VcPositionGte *string `queryParam:"style=form,explode=true,name=vc_position__gte"`
    VcPositionLt *string `queryParam:"style=form,explode=true,name=vc_position__lt"`
    VcPositionLte *string `queryParam:"style=form,explode=true,name=vc_position__lte"`
    VcPositionN *string `queryParam:"style=form,explode=true,name=vc_position__n"`
    VcPriority *string `queryParam:"style=form,explode=true,name=vc_priority"`
    VcPriorityGt *string `queryParam:"style=form,explode=true,name=vc_priority__gt"`
    VcPriorityGte *string `queryParam:"style=form,explode=true,name=vc_priority__gte"`
    VcPriorityLt *string `queryParam:"style=form,explode=true,name=vc_priority__lt"`
    VcPriorityLte *string `queryParam:"style=form,explode=true,name=vc_priority__lte"`
    VcPriorityN *string `queryParam:"style=form,explode=true,name=vc_priority__n"`
    VirtualChassisID *string `queryParam:"style=form,explode=true,name=virtual_chassis_id"`
    VirtualChassisIDN *string `queryParam:"style=form,explode=true,name=virtual_chassis_id__n"`
    VirtualChassisMember *string `queryParam:"style=form,explode=true,name=virtual_chassis_member"`
    
}

type DcimDevicesListRequest struct {
    QueryParams DcimDevicesListQueryParams 
    
}

type DcimDevicesList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.DeviceWithConfigContext `json:"results"`
    
}

type DcimDevicesListResponse struct {
    ContentType string 
    StatusCode int64 
    DcimDevicesList200ApplicationJSONObject *DcimDevicesList200ApplicationJSON 
    
}

