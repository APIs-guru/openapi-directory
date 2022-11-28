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
var DcimDeviceTypesListQueryParams = /** @class */ (function (_super) {
    __extends(DcimDeviceTypesListQueryParams, _super);
    function DcimDeviceTypesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__in" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "idIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_console_server" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "isConsoleServer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_full_depth" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "isFullDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_network_device" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "isNetworkDevice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_pdu" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "isPdu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimDeviceTypesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "manufacturerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimDeviceTypesListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_number" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "partNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subdevice_role" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "subdeviceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=u_height" }),
        __metadata("design:type", Number)
    ], DcimDeviceTypesListQueryParams.prototype, "uHeight", void 0);
    return DcimDeviceTypesListQueryParams;
}(SpeakeasyBase));
export { DcimDeviceTypesListQueryParams };
var DcimDeviceTypesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimDeviceTypesList200ApplicationJson, _super);
    function DcimDeviceTypesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimDeviceTypesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimDeviceTypesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.DeviceType }),
        __metadata("design:type", Array)
    ], DcimDeviceTypesList200ApplicationJson.prototype, "results", void 0);
    return DcimDeviceTypesList200ApplicationJson;
}(SpeakeasyBase));
export { DcimDeviceTypesList200ApplicationJson };
var DcimDeviceTypesListRequest = /** @class */ (function (_super) {
    __extends(DcimDeviceTypesListRequest, _super);
    function DcimDeviceTypesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimDeviceTypesListQueryParams)
    ], DcimDeviceTypesListRequest.prototype, "queryParams", void 0);
    return DcimDeviceTypesListRequest;
}(SpeakeasyBase));
export { DcimDeviceTypesListRequest };
var DcimDeviceTypesListResponse = /** @class */ (function (_super) {
    __extends(DcimDeviceTypesListResponse, _super);
    function DcimDeviceTypesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimDeviceTypesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimDeviceTypesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimDeviceTypesList200ApplicationJson)
    ], DcimDeviceTypesListResponse.prototype, "dcimDeviceTypesList200ApplicationJsonObject", void 0);
    return DcimDeviceTypesListResponse;
}(SpeakeasyBase));
export { DcimDeviceTypesListResponse };
