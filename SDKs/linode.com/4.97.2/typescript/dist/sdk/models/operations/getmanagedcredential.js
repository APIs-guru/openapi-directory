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
var GetManagedCredentialPathParams = /** @class */ (function (_super) {
    __extends(GetManagedCredentialPathParams, _super);
    function GetManagedCredentialPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credentialId" }),
        __metadata("design:type", Number)
    ], GetManagedCredentialPathParams.prototype, "credentialId", void 0);
    return GetManagedCredentialPathParams;
}(SpeakeasyBase));
export { GetManagedCredentialPathParams };
var GetManagedCredentialSecurity = /** @class */ (function (_super) {
    __extends(GetManagedCredentialSecurity, _super);
    function GetManagedCredentialSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetManagedCredentialSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetManagedCredentialSecurity.prototype, "oauth", void 0);
    return GetManagedCredentialSecurity;
}(SpeakeasyBase));
export { GetManagedCredentialSecurity };
var GetManagedCredentialDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetManagedCredentialDefaultApplicationJson, _super);
    function GetManagedCredentialDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetManagedCredentialDefaultApplicationJson.prototype, "errors", void 0);
    return GetManagedCredentialDefaultApplicationJson;
}(SpeakeasyBase));
export { GetManagedCredentialDefaultApplicationJson };
var GetManagedCredentialRequest = /** @class */ (function (_super) {
    __extends(GetManagedCredentialRequest, _super);
    function GetManagedCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedCredentialPathParams)
    ], GetManagedCredentialRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedCredentialSecurity)
    ], GetManagedCredentialRequest.prototype, "security", void 0);
    return GetManagedCredentialRequest;
}(SpeakeasyBase));
export { GetManagedCredentialRequest };
var GetManagedCredentialResponse = /** @class */ (function (_super) {
    __extends(GetManagedCredentialResponse, _super);
    function GetManagedCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetManagedCredentialResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedCredential)
    ], GetManagedCredentialResponse.prototype, "managedCredential", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetManagedCredentialResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedCredentialDefaultApplicationJson)
    ], GetManagedCredentialResponse.prototype, "getManagedCredentialDefaultApplicationJsonObject", void 0);
    return GetManagedCredentialResponse;
}(SpeakeasyBase));
export { GetManagedCredentialResponse };
