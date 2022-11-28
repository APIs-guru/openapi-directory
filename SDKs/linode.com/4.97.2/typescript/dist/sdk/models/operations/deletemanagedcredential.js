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
var DeleteManagedCredentialPathParams = /** @class */ (function (_super) {
    __extends(DeleteManagedCredentialPathParams, _super);
    function DeleteManagedCredentialPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credentialId" }),
        __metadata("design:type", Number)
    ], DeleteManagedCredentialPathParams.prototype, "credentialId", void 0);
    return DeleteManagedCredentialPathParams;
}(SpeakeasyBase));
export { DeleteManagedCredentialPathParams };
var DeleteManagedCredentialSecurity = /** @class */ (function (_super) {
    __extends(DeleteManagedCredentialSecurity, _super);
    function DeleteManagedCredentialSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteManagedCredentialSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteManagedCredentialSecurity.prototype, "oauth", void 0);
    return DeleteManagedCredentialSecurity;
}(SpeakeasyBase));
export { DeleteManagedCredentialSecurity };
var DeleteManagedCredentialDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteManagedCredentialDefaultApplicationJson, _super);
    function DeleteManagedCredentialDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteManagedCredentialDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteManagedCredentialDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteManagedCredentialDefaultApplicationJson };
var DeleteManagedCredentialRequest = /** @class */ (function (_super) {
    __extends(DeleteManagedCredentialRequest, _super);
    function DeleteManagedCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteManagedCredentialPathParams)
    ], DeleteManagedCredentialRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteManagedCredentialSecurity)
    ], DeleteManagedCredentialRequest.prototype, "security", void 0);
    return DeleteManagedCredentialRequest;
}(SpeakeasyBase));
export { DeleteManagedCredentialRequest };
var DeleteManagedCredentialResponse = /** @class */ (function (_super) {
    __extends(DeleteManagedCredentialResponse, _super);
    function DeleteManagedCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteManagedCredentialResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteManagedCredentialResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteManagedCredentialResponse.prototype, "deleteManagedCredential200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteManagedCredentialDefaultApplicationJson)
    ], DeleteManagedCredentialResponse.prototype, "deleteManagedCredentialDefaultApplicationJsonObject", void 0);
    return DeleteManagedCredentialResponse;
}(SpeakeasyBase));
export { DeleteManagedCredentialResponse };
