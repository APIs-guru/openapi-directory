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
var DcimInterfacesListQueryParams = /** @class */ (function (_super) {
    __extends(DcimInterfacesListQueryParams, _super);
    function DcimInterfacesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", Number)
    ], DcimInterfacesListQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enabled" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=form_factor" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "formFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lag_id" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "lagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimInterfacesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mgmt_only" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "mgmtOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu" }),
        __metadata("design:type", Number)
    ], DcimInterfacesListQueryParams.prototype, "mtu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimInterfacesListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vlan" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "vlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vlan_id" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "vlanId", void 0);
    return DcimInterfacesListQueryParams;
}(SpeakeasyBase));
export { DcimInterfacesListQueryParams };
var DcimInterfacesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimInterfacesList200ApplicationJson, _super);
    function DcimInterfacesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimInterfacesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimInterfacesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimInterfacesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Interface }),
        __metadata("design:type", Array)
    ], DcimInterfacesList200ApplicationJson.prototype, "results", void 0);
    return DcimInterfacesList200ApplicationJson;
}(SpeakeasyBase));
export { DcimInterfacesList200ApplicationJson };
var DcimInterfacesListRequest = /** @class */ (function (_super) {
    __extends(DcimInterfacesListRequest, _super);
    function DcimInterfacesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimInterfacesListQueryParams)
    ], DcimInterfacesListRequest.prototype, "queryParams", void 0);
    return DcimInterfacesListRequest;
}(SpeakeasyBase));
export { DcimInterfacesListRequest };
var DcimInterfacesListResponse = /** @class */ (function (_super) {
    __extends(DcimInterfacesListResponse, _super);
    function DcimInterfacesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimInterfacesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimInterfacesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimInterfacesList200ApplicationJson)
    ], DcimInterfacesListResponse.prototype, "dcimInterfacesList200ApplicationJsonObject", void 0);
    return DcimInterfacesListResponse;
}(SpeakeasyBase));
export { DcimInterfacesListResponse };
