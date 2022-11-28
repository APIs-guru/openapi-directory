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
var CreateNetworkMerakiAuthUserPathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkMerakiAuthUserPathParams, _super);
    function CreateNetworkMerakiAuthUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkMerakiAuthUserPathParams.prototype, "networkId", void 0);
    return CreateNetworkMerakiAuthUserPathParams;
}(SpeakeasyBase));
export { CreateNetworkMerakiAuthUserPathParams };
export var CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum;
(function (CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum) {
    CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum["Guest"] = "Guest";
    CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum["EightHundredAndTwo1X"] = "802.1X";
    CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum["ClientVpn"] = "Client VPN";
})(CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum || (CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum = {}));
var CreateNetworkMerakiAuthUserRequestBodyAuthorizations = /** @class */ (function (_super) {
    __extends(CreateNetworkMerakiAuthUserRequestBodyAuthorizations, _super);
    function CreateNetworkMerakiAuthUserRequestBodyAuthorizations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiresAt" }),
        __metadata("design:type", String)
    ], CreateNetworkMerakiAuthUserRequestBodyAuthorizations.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssidNumber" }),
        __metadata("design:type", Number)
    ], CreateNetworkMerakiAuthUserRequestBodyAuthorizations.prototype, "ssidNumber", void 0);
    return CreateNetworkMerakiAuthUserRequestBodyAuthorizations;
}(SpeakeasyBase));
export { CreateNetworkMerakiAuthUserRequestBodyAuthorizations };
var CreateNetworkMerakiAuthUserRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkMerakiAuthUserRequestBody, _super);
    function CreateNetworkMerakiAuthUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountType" }),
        __metadata("design:type", String)
    ], CreateNetworkMerakiAuthUserRequestBody.prototype, "accountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizations", elemType: CreateNetworkMerakiAuthUserRequestBodyAuthorizations }),
        __metadata("design:type", Array)
    ], CreateNetworkMerakiAuthUserRequestBody.prototype, "authorizations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CreateNetworkMerakiAuthUserRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailPasswordToUser" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkMerakiAuthUserRequestBody.prototype, "emailPasswordToUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkMerakiAuthUserRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], CreateNetworkMerakiAuthUserRequestBody.prototype, "password", void 0);
    return CreateNetworkMerakiAuthUserRequestBody;
}(SpeakeasyBase));
export { CreateNetworkMerakiAuthUserRequestBody };
var CreateNetworkMerakiAuthUserRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkMerakiAuthUserRequest, _super);
    function CreateNetworkMerakiAuthUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNetworkMerakiAuthUserPathParams)
    ], CreateNetworkMerakiAuthUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkMerakiAuthUserRequestBody)
    ], CreateNetworkMerakiAuthUserRequest.prototype, "request", void 0);
    return CreateNetworkMerakiAuthUserRequest;
}(SpeakeasyBase));
export { CreateNetworkMerakiAuthUserRequest };
var CreateNetworkMerakiAuthUserResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkMerakiAuthUserResponse, _super);
    function CreateNetworkMerakiAuthUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNetworkMerakiAuthUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNetworkMerakiAuthUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateNetworkMerakiAuthUserResponse.prototype, "createNetworkMerakiAuthUser201ApplicationJsonObject", void 0);
    return CreateNetworkMerakiAuthUserResponse;
}(SpeakeasyBase));
export { CreateNetworkMerakiAuthUserResponse };
