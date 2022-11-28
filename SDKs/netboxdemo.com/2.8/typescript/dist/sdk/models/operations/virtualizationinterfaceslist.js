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
var VirtualizationInterfacesListQueryParams = /** @class */ (function (_super) {
    __extends(VirtualizationInterfacesListQueryParams, _super);
    function VirtualizationInterfacesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enabled" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], VirtualizationInterfacesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__ic" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "macAddressIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__ie" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "macAddressIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__iew" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "macAddressIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__isw" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "macAddressIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__n" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "macAddressN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__nic" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "macAddressNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__nie" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "macAddressNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__niew" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "macAddressNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__nisw" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "macAddressNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "mtu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu__gt" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "mtuGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu__gte" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "mtuGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu__lt" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "mtuLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu__lte" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "mtuLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu__n" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "mtuN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "nameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "nameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "nameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "nameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "nameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "nameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "nameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "nameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "nameNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], VirtualizationInterfacesListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_machine" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "virtualMachine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_machine__n" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "virtualMachineN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_machine_id" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "virtualMachineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_machine_id__n" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListQueryParams.prototype, "virtualMachineIdN", void 0);
    return VirtualizationInterfacesListQueryParams;
}(SpeakeasyBase));
export { VirtualizationInterfacesListQueryParams };
var VirtualizationInterfacesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(VirtualizationInterfacesList200ApplicationJson, _super);
    function VirtualizationInterfacesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], VirtualizationInterfacesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], VirtualizationInterfacesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.VirtualMachineInterface }),
        __metadata("design:type", Array)
    ], VirtualizationInterfacesList200ApplicationJson.prototype, "results", void 0);
    return VirtualizationInterfacesList200ApplicationJson;
}(SpeakeasyBase));
export { VirtualizationInterfacesList200ApplicationJson };
var VirtualizationInterfacesListRequest = /** @class */ (function (_super) {
    __extends(VirtualizationInterfacesListRequest, _super);
    function VirtualizationInterfacesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VirtualizationInterfacesListQueryParams)
    ], VirtualizationInterfacesListRequest.prototype, "queryParams", void 0);
    return VirtualizationInterfacesListRequest;
}(SpeakeasyBase));
export { VirtualizationInterfacesListRequest };
var VirtualizationInterfacesListResponse = /** @class */ (function (_super) {
    __extends(VirtualizationInterfacesListResponse, _super);
    function VirtualizationInterfacesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VirtualizationInterfacesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VirtualizationInterfacesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VirtualizationInterfacesList200ApplicationJson)
    ], VirtualizationInterfacesListResponse.prototype, "virtualizationInterfacesList200ApplicationJsonObject", void 0);
    return VirtualizationInterfacesListResponse;
}(SpeakeasyBase));
export { VirtualizationInterfacesListResponse };
