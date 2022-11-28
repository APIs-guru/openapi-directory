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
var UpdateOrganizationSnmpPathParams = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSnmpPathParams, _super);
    function UpdateOrganizationSnmpPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSnmpPathParams.prototype, "organizationId", void 0);
    return UpdateOrganizationSnmpPathParams;
}(SpeakeasyBase));
export { UpdateOrganizationSnmpPathParams };
export var UpdateOrganizationSnmpRequestBodyV3AuthModeEnum;
(function (UpdateOrganizationSnmpRequestBodyV3AuthModeEnum) {
    UpdateOrganizationSnmpRequestBodyV3AuthModeEnum["Md5"] = "MD5";
    UpdateOrganizationSnmpRequestBodyV3AuthModeEnum["Sha"] = "SHA";
})(UpdateOrganizationSnmpRequestBodyV3AuthModeEnum || (UpdateOrganizationSnmpRequestBodyV3AuthModeEnum = {}));
export var UpdateOrganizationSnmpRequestBodyV3PrivModeEnum;
(function (UpdateOrganizationSnmpRequestBodyV3PrivModeEnum) {
    UpdateOrganizationSnmpRequestBodyV3PrivModeEnum["Des"] = "DES";
    UpdateOrganizationSnmpRequestBodyV3PrivModeEnum["Aes128"] = "AES128";
})(UpdateOrganizationSnmpRequestBodyV3PrivModeEnum || (UpdateOrganizationSnmpRequestBodyV3PrivModeEnum = {}));
var UpdateOrganizationSnmpRequestBody = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSnmpRequestBody, _super);
    function UpdateOrganizationSnmpRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=peerIps" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationSnmpRequestBody.prototype, "peerIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=v2cEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationSnmpRequestBody.prototype, "v2cEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=v3AuthMode" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSnmpRequestBody.prototype, "v3AuthMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=v3AuthPass" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSnmpRequestBody.prototype, "v3AuthPass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=v3Enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationSnmpRequestBody.prototype, "v3Enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=v3PrivMode" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSnmpRequestBody.prototype, "v3PrivMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=v3PrivPass" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSnmpRequestBody.prototype, "v3PrivPass", void 0);
    return UpdateOrganizationSnmpRequestBody;
}(SpeakeasyBase));
export { UpdateOrganizationSnmpRequestBody };
var UpdateOrganizationSnmpRequest = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSnmpRequest, _super);
    function UpdateOrganizationSnmpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateOrganizationSnmpPathParams)
    ], UpdateOrganizationSnmpRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateOrganizationSnmpRequestBody)
    ], UpdateOrganizationSnmpRequest.prototype, "request", void 0);
    return UpdateOrganizationSnmpRequest;
}(SpeakeasyBase));
export { UpdateOrganizationSnmpRequest };
var UpdateOrganizationSnmpResponse = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSnmpResponse, _super);
    function UpdateOrganizationSnmpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateOrganizationSnmpResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateOrganizationSnmpResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateOrganizationSnmpResponse.prototype, "updateOrganizationSnmp200ApplicationJsonObject", void 0);
    return UpdateOrganizationSnmpResponse;
}(SpeakeasyBase));
export { UpdateOrganizationSnmpResponse };
