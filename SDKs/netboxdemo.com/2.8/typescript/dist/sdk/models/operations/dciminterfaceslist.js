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
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cabled" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "cabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connection_status" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "connectionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connection_status__n" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "connectionStatusN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__ic" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "descriptionIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__ie" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "descriptionIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__iew" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "descriptionIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__isw" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "descriptionIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__n" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "descriptionN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nic" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "descriptionNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nie" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "descriptionNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__niew" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "descriptionNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nisw" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "descriptionNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enabled" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=kind" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lag_id" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "lagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lag_id__n" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "lagIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimInterfacesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__ic" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "macAddressIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__ie" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "macAddressIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__iew" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "macAddressIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__isw" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "macAddressIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__n" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "macAddressN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__nic" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "macAddressNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__nie" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "macAddressNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__niew" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "macAddressNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__nisw" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "macAddressNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mgmt_only" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "mgmtOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode__n" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "modeN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "mtu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu__gt" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "mtuGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu__gte" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "mtuGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu__lt" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "mtuLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu__lte" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "mtuLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu__n" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "mtuN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "nameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "nameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "nameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "nameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "nameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "nameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "nameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "nameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "nameNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimInterfacesListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region__n" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "regionN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "regionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id__n" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "regionIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site__n" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "siteN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id__n" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "siteIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "tagN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type__n" }),
        __metadata("design:type", String)
    ], DcimInterfacesListQueryParams.prototype, "typeN", void 0);
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
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.DeviceInterface }),
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
