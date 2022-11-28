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
var UpdateNetworkSwitchRoutingOspfPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingOspfPathParams, _super);
    function UpdateNetworkSwitchRoutingOspfPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchRoutingOspfPathParams.prototype, "networkId", void 0);
    return UpdateNetworkSwitchRoutingOspfPathParams;
}(SpeakeasyBase));
export { UpdateNetworkSwitchRoutingOspfPathParams };
export var UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum;
(function (UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum) {
    UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum["Normal"] = "normal";
    UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum["Stub"] = "stub";
    UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum["Nssa"] = "nssa";
})(UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum || (UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum = {}));
var UpdateNetworkSwitchRoutingOspfRequestBodyAreas = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingOspfRequestBodyAreas, _super);
    function UpdateNetworkSwitchRoutingOspfRequestBodyAreas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=areaId" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchRoutingOspfRequestBodyAreas.prototype, "areaId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=areaName" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchRoutingOspfRequestBodyAreas.prototype, "areaName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=areaType" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchRoutingOspfRequestBodyAreas.prototype, "areaType", void 0);
    return UpdateNetworkSwitchRoutingOspfRequestBodyAreas;
}(SpeakeasyBase));
export { UpdateNetworkSwitchRoutingOspfRequestBodyAreas };
// UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey
/**
 * MD5 authentication credentials. This param is only relevant if md5AuthenticationEnabled is true
**/
var UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey, _super);
    function UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passphrase" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey.prototype, "passphrase", void 0);
    return UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey;
}(SpeakeasyBase));
export { UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey };
var UpdateNetworkSwitchRoutingOspfRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingOspfRequestBody, _super);
    function UpdateNetworkSwitchRoutingOspfRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=areas", elemType: UpdateNetworkSwitchRoutingOspfRequestBodyAreas }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchRoutingOspfRequestBody.prototype, "areas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deadTimerInSeconds" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchRoutingOspfRequestBody.prototype, "deadTimerInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchRoutingOspfRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=helloTimerInSeconds" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchRoutingOspfRequestBody.prototype, "helloTimerInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=md5AuthenticationEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchRoutingOspfRequestBody.prototype, "md5AuthenticationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=md5AuthenticationKey" }),
        __metadata("design:type", UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey)
    ], UpdateNetworkSwitchRoutingOspfRequestBody.prototype, "md5AuthenticationKey", void 0);
    return UpdateNetworkSwitchRoutingOspfRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkSwitchRoutingOspfRequestBody };
var UpdateNetworkSwitchRoutingOspfRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingOspfRequest, _super);
    function UpdateNetworkSwitchRoutingOspfRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkSwitchRoutingOspfPathParams)
    ], UpdateNetworkSwitchRoutingOspfRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSwitchRoutingOspfRequestBody)
    ], UpdateNetworkSwitchRoutingOspfRequest.prototype, "request", void 0);
    return UpdateNetworkSwitchRoutingOspfRequest;
}(SpeakeasyBase));
export { UpdateNetworkSwitchRoutingOspfRequest };
var UpdateNetworkSwitchRoutingOspfResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingOspfResponse, _super);
    function UpdateNetworkSwitchRoutingOspfResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchRoutingOspfResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchRoutingOspfResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkSwitchRoutingOspfResponse.prototype, "updateNetworkSwitchRoutingOspf200ApplicationJsonObject", void 0);
    return UpdateNetworkSwitchRoutingOspfResponse;
}(SpeakeasyBase));
export { UpdateNetworkSwitchRoutingOspfResponse };
