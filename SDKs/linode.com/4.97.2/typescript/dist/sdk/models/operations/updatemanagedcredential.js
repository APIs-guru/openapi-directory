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
var UpdateManagedCredentialPathParams = /** @class */ (function (_super) {
    __extends(UpdateManagedCredentialPathParams, _super);
    function UpdateManagedCredentialPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credentialId" }),
        __metadata("design:type", Number)
    ], UpdateManagedCredentialPathParams.prototype, "credentialId", void 0);
    return UpdateManagedCredentialPathParams;
}(SpeakeasyBase));
export { UpdateManagedCredentialPathParams };
var UpdateManagedCredentialSecurity = /** @class */ (function (_super) {
    __extends(UpdateManagedCredentialSecurity, _super);
    function UpdateManagedCredentialSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateManagedCredentialSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateManagedCredentialSecurity.prototype, "oauth", void 0);
    return UpdateManagedCredentialSecurity;
}(SpeakeasyBase));
export { UpdateManagedCredentialSecurity };
var UpdateManagedCredentialDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateManagedCredentialDefaultApplicationJson, _super);
    function UpdateManagedCredentialDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateManagedCredentialDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateManagedCredentialDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateManagedCredentialDefaultApplicationJson };
var UpdateManagedCredentialRequest = /** @class */ (function (_super) {
    __extends(UpdateManagedCredentialRequest, _super);
    function UpdateManagedCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateManagedCredentialPathParams)
    ], UpdateManagedCredentialRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ManagedCredentialInput)
    ], UpdateManagedCredentialRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateManagedCredentialSecurity)
    ], UpdateManagedCredentialRequest.prototype, "security", void 0);
    return UpdateManagedCredentialRequest;
}(SpeakeasyBase));
export { UpdateManagedCredentialRequest };
var UpdateManagedCredentialResponse = /** @class */ (function (_super) {
    __extends(UpdateManagedCredentialResponse, _super);
    function UpdateManagedCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateManagedCredentialResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedCredential)
    ], UpdateManagedCredentialResponse.prototype, "managedCredential", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateManagedCredentialResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateManagedCredentialDefaultApplicationJson)
    ], UpdateManagedCredentialResponse.prototype, "updateManagedCredentialDefaultApplicationJsonObject", void 0);
    return UpdateManagedCredentialResponse;
}(SpeakeasyBase));
export { UpdateManagedCredentialResponse };
