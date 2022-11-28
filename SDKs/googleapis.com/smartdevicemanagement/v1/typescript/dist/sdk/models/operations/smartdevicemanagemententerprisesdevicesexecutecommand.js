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
var SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams = /** @class */ (function (_super) {
    __extends(SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams, _super);
    function SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams.prototype, "name", void 0);
    return SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams;
}(SpeakeasyBase));
export { SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams };
var SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams = /** @class */ (function (_super) {
    __extends(SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams, _super);
    function SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams.prototype, "uploadProtocol", void 0);
    return SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams;
}(SpeakeasyBase));
export { SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams };
var SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity = /** @class */ (function (_super) {
    __extends(SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity, _super);
    function SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity.prototype, "oauth2c", void 0);
    return SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity;
}(SpeakeasyBase));
export { SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity };
var SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest = /** @class */ (function (_super) {
    __extends(SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest, _super);
    function SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest.prototype, "security", void 0);
    return SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest;
}(SpeakeasyBase));
export { SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest };
var SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse = /** @class */ (function (_super) {
    __extends(SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse, _super);
    function SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse.prototype, "googleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse.prototype, "statusCode", void 0);
    return SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse;
}(SpeakeasyBase));
export { SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse };
