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
var IpamServicesListQueryParams = /** @class */ (function (_super) {
    __extends(IpamServicesListQueryParams, _super);
    function IpamServicesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], IpamServicesListQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], IpamServicesListQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], IpamServicesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], IpamServicesListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], IpamServicesListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=port" }),
        __metadata("design:type", Number)
    ], IpamServicesListQueryParams.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=protocol" }),
        __metadata("design:type", String)
    ], IpamServicesListQueryParams.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], IpamServicesListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], IpamServicesListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_machine" }),
        __metadata("design:type", String)
    ], IpamServicesListQueryParams.prototype, "virtualMachine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_machine_id" }),
        __metadata("design:type", String)
    ], IpamServicesListQueryParams.prototype, "virtualMachineId", void 0);
    return IpamServicesListQueryParams;
}(SpeakeasyBase));
export { IpamServicesListQueryParams };
var IpamServicesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(IpamServicesList200ApplicationJson, _super);
    function IpamServicesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], IpamServicesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], IpamServicesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], IpamServicesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Service }),
        __metadata("design:type", Array)
    ], IpamServicesList200ApplicationJson.prototype, "results", void 0);
    return IpamServicesList200ApplicationJson;
}(SpeakeasyBase));
export { IpamServicesList200ApplicationJson };
var IpamServicesListRequest = /** @class */ (function (_super) {
    __extends(IpamServicesListRequest, _super);
    function IpamServicesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IpamServicesListQueryParams)
    ], IpamServicesListRequest.prototype, "queryParams", void 0);
    return IpamServicesListRequest;
}(SpeakeasyBase));
export { IpamServicesListRequest };
var IpamServicesListResponse = /** @class */ (function (_super) {
    __extends(IpamServicesListResponse, _super);
    function IpamServicesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IpamServicesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IpamServicesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IpamServicesList200ApplicationJson)
    ], IpamServicesListResponse.prototype, "ipamServicesList200ApplicationJsonObject", void 0);
    return IpamServicesListResponse;
}(SpeakeasyBase));
export { IpamServicesListResponse };
