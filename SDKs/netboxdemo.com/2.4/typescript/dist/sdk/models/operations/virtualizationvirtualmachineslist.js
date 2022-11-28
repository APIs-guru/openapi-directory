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
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_type" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_type_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "clusterTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__in" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "idIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "platformId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" }),
        __metadata("design:type", Number)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "regionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "roleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" }),
        __metadata("design:type", String)
    ], VirtualizationVirtualMachinesListQueryParams.prototype, "tenantId", void 0);
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
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.VirtualMachine }),
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
