var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var VirtualizationVirtualMachinesListQueryParams = /** @class */ (function (_super) {
    __extends(VirtualizationVirtualMachinesListQueryParams, _super);
    function VirtualizationVirtualMachinesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "cluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterGroupN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group_id__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterGroupIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_id__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_type" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_type__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterTypeN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_type_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_type_id__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterTypeIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__gte" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "createdGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__lte" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "createdLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disk" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "disk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disk__gt" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "diskGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disk__gte" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "diskGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disk__lt" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "diskLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disk__lte" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "diskLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disk__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "diskN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "lastUpdatedGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "lastUpdatedLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=local_context_data" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "localContextData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__ic" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "macAddressIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__ie" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "macAddressIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__iew" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "macAddressIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__isw" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "macAddressIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "macAddressN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__nic" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "macAddressNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__nie" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "macAddressNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__niew" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "macAddressNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__nisw" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "macAddressNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memory" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memory__gt" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "memoryGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memory__gte" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "memoryGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memory__lt" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "memoryLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memory__lte" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "memoryLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memory__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "memoryN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "nameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "nameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "nameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "nameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "nameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "nameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "nameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "nameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "nameNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "platformN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "platformId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform_id__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "platformIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "regionN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "regionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "regionIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "roleN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "roleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "roleIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "siteN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "siteIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "statusN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "tagN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "tenantN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "tenantGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "tenantGroupN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "tenantGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "tenantGroupIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "tenantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "tenantIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vcpus" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "vcpus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vcpus__gt" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "vcpusGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vcpus__gte" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "vcpusGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vcpus__lt" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "vcpusLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vcpus__lte" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "vcpusLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vcpus__n" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "vcpusN", void 0);
    return VirtualizationVirtualMachinesListQueryParams;
}(SpeakeasyBase));
export { VirtualizationVirtualMachinesListQueryParams };
var VirtualizationVirtualMachinesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(VirtualizationVirtualMachinesList200ApplicationJson, _super);
    function VirtualizationVirtualMachinesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], VirtualizationVirtualMachinesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.VirtualMachineWithConfigContext }),
        __metadata("design:type", Array)
    ], VirtualizationVirtualMachinesList200ApplicationJson.prototype, "results", void 0);
    return VirtualizationVirtualMachinesList200ApplicationJson;
}(SpeakeasyBase));
export { VirtualizationVirtualMachinesList200ApplicationJson };
var VirtualizationVirtualMachinesListRequest = /** @class */ (function (_super) {
    __extends(VirtualizationVirtualMachinesListRequest, _super);
    function VirtualizationVirtualMachinesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VirtualizationVirtualMachinesListQueryParams)
    ], VirtualizationVirtualMachinesListRequest.prototype, "queryParams", void 0);
    return VirtualizationVirtualMachinesListRequest;
}(SpeakeasyBase));
export { VirtualizationVirtualMachinesListRequest };
var VirtualizationVirtualMachinesListResponse = /** @class */ (function (_super) {
    __extends(VirtualizationVirtualMachinesListResponse, _super);
    function VirtualizationVirtualMachinesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VirtualizationVirtualMachinesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VirtualizationVirtualMachinesList200ApplicationJson)
    ], VirtualizationVirtualMachinesListResponse.prototype, "virtualizationVirtualMachinesList200ApplicationJsonObject", void 0);
    return VirtualizationVirtualMachinesListResponse;
}(SpeakeasyBase));
export { VirtualizationVirtualMachinesListResponse };
