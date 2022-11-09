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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var CreateTokenRequestBodyActionEnum;
(function (CreateTokenRequestBodyActionEnum) {
    CreateTokenRequestBodyActionEnum["LicenseeLogin"] = "licenseeLogin";
})(CreateTokenRequestBodyActionEnum || (CreateTokenRequestBodyActionEnum = {}));
export var CreateTokenRequestBodyApiKeyRoleEnum;
(function (CreateTokenRequestBodyApiKeyRoleEnum) {
    CreateTokenRequestBodyApiKeyRoleEnum["RoleApikeyLicensee"] = "ROLE_APIKEY_LICENSEE";
    CreateTokenRequestBodyApiKeyRoleEnum["RoleApikeyAnalytics"] = "ROLE_APIKEY_ANALYTICS";
    CreateTokenRequestBodyApiKeyRoleEnum["RoleApikeyOperation"] = "ROLE_APIKEY_OPERATION";
    CreateTokenRequestBodyApiKeyRoleEnum["RoleApikeyMaintenance"] = "ROLE_APIKEY_MAINTENANCE";
    CreateTokenRequestBodyApiKeyRoleEnum["RoleApikeyAdmin"] = "ROLE_APIKEY_ADMIN";
})(CreateTokenRequestBodyApiKeyRoleEnum || (CreateTokenRequestBodyApiKeyRoleEnum = {}));
export var CreateTokenRequestBodyTokenTypeEnum;
(function (CreateTokenRequestBodyTokenTypeEnum) {
    CreateTokenRequestBodyTokenTypeEnum["Default"] = "DEFAULT";
    CreateTokenRequestBodyTokenTypeEnum["Shop"] = "SHOP";
    CreateTokenRequestBodyTokenTypeEnum["Apikey"] = "APIKEY";
})(CreateTokenRequestBodyTokenTypeEnum || (CreateTokenRequestBodyTokenTypeEnum = {}));
export var CreateTokenRequestBodyTypeEnum;
(function (CreateTokenRequestBodyTypeEnum) {
    CreateTokenRequestBodyTypeEnum["Action"] = "ACTION";
})(CreateTokenRequestBodyTypeEnum || (CreateTokenRequestBodyTypeEnum = {}));
var CreateTokenRequestBody = /** @class */ (function (_super) {
    __extends(CreateTokenRequestBody, _super);
    function CreateTokenRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=action;" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "form, name=apiKeyRole;" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "apiKeyRole", void 0);
    __decorate([
        Metadata({ data: "form, name=cancelURL;" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "cancelUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=cancelURLTitle;" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "cancelUrlTitle", void 0);
    __decorate([
        Metadata({ data: "form, name=licenseTemplateNumber;" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "licenseTemplateNumber", void 0);
    __decorate([
        Metadata({ data: "form, name=licenseeNumber;" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "licenseeNumber", void 0);
    __decorate([
        Metadata({ data: "form, name=predefinedShoppingItem;" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "predefinedShoppingItem", void 0);
    __decorate([
        Metadata({ data: "form, name=privateKey;" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "privateKey", void 0);
    __decorate([
        Metadata({ data: "form, name=productNumber;" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "productNumber", void 0);
    __decorate([
        Metadata({ data: "form, name=successURL;" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "successUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=successURLTitle;" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "successUrlTitle", void 0);
    __decorate([
        Metadata({ data: "form, name=tokenType;" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "tokenType", void 0);
    __decorate([
        Metadata({ data: "form, name=type;" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "type", void 0);
    return CreateTokenRequestBody;
}(SpeakeasyBase));
export { CreateTokenRequestBody };
var CreateTokenSecurity = /** @class */ (function (_super) {
    __extends(CreateTokenSecurity, _super);
    function CreateTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], CreateTokenSecurity.prototype, "basicAuth", void 0);
    return CreateTokenSecurity;
}(SpeakeasyBase));
export { CreateTokenSecurity };
var CreateTokenRequest = /** @class */ (function (_super) {
    __extends(CreateTokenRequest, _super);
    function CreateTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateTokenRequestBody)
    ], CreateTokenRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTokenSecurity)
    ], CreateTokenRequest.prototype, "security", void 0);
    return CreateTokenRequest;
}(SpeakeasyBase));
export { CreateTokenRequest };
var CreateTokenResponse = /** @class */ (function (_super) {
    __extends(CreateTokenResponse, _super);
    function CreateTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], CreateTokenResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateTokenResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTokenResponse.prototype, "netlicensing", void 0);
    return CreateTokenResponse;
}(SpeakeasyBase));
export { CreateTokenResponse };
