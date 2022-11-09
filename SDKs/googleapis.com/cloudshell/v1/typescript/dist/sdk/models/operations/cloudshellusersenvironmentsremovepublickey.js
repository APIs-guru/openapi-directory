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
var CloudshellUsersEnvironmentsRemovePublicKeyPathParams = /** @class */ (function (_super) {
    __extends(CloudshellUsersEnvironmentsRemovePublicKeyPathParams, _super);
    function CloudshellUsersEnvironmentsRemovePublicKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=environment" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsRemovePublicKeyPathParams.prototype, "environment", void 0);
    return CloudshellUsersEnvironmentsRemovePublicKeyPathParams;
}(SpeakeasyBase));
export { CloudshellUsersEnvironmentsRemovePublicKeyPathParams };
var CloudshellUsersEnvironmentsRemovePublicKeyQueryParams = /** @class */ (function (_super) {
    __extends(CloudshellUsersEnvironmentsRemovePublicKeyQueryParams, _super);
    function CloudshellUsersEnvironmentsRemovePublicKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsRemovePublicKeyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsRemovePublicKeyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsRemovePublicKeyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsRemovePublicKeyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsRemovePublicKeyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsRemovePublicKeyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsRemovePublicKeyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudshellUsersEnvironmentsRemovePublicKeyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsRemovePublicKeyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsRemovePublicKeyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsRemovePublicKeyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudshellUsersEnvironmentsRemovePublicKeyQueryParams;
}(SpeakeasyBase));
export { CloudshellUsersEnvironmentsRemovePublicKeyQueryParams };
var CloudshellUsersEnvironmentsRemovePublicKeySecurity = /** @class */ (function (_super) {
    __extends(CloudshellUsersEnvironmentsRemovePublicKeySecurity, _super);
    function CloudshellUsersEnvironmentsRemovePublicKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudshellUsersEnvironmentsRemovePublicKeySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudshellUsersEnvironmentsRemovePublicKeySecurity.prototype, "oauth2c", void 0);
    return CloudshellUsersEnvironmentsRemovePublicKeySecurity;
}(SpeakeasyBase));
export { CloudshellUsersEnvironmentsRemovePublicKeySecurity };
var CloudshellUsersEnvironmentsRemovePublicKeyRequest = /** @class */ (function (_super) {
    __extends(CloudshellUsersEnvironmentsRemovePublicKeyRequest, _super);
    function CloudshellUsersEnvironmentsRemovePublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudshellUsersEnvironmentsRemovePublicKeyPathParams)
    ], CloudshellUsersEnvironmentsRemovePublicKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudshellUsersEnvironmentsRemovePublicKeyQueryParams)
    ], CloudshellUsersEnvironmentsRemovePublicKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemovePublicKeyRequest)
    ], CloudshellUsersEnvironmentsRemovePublicKeyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudshellUsersEnvironmentsRemovePublicKeySecurity)
    ], CloudshellUsersEnvironmentsRemovePublicKeyRequest.prototype, "security", void 0);
    return CloudshellUsersEnvironmentsRemovePublicKeyRequest;
}(SpeakeasyBase));
export { CloudshellUsersEnvironmentsRemovePublicKeyRequest };
var CloudshellUsersEnvironmentsRemovePublicKeyResponse = /** @class */ (function (_super) {
    __extends(CloudshellUsersEnvironmentsRemovePublicKeyResponse, _super);
    function CloudshellUsersEnvironmentsRemovePublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsRemovePublicKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], CloudshellUsersEnvironmentsRemovePublicKeyResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudshellUsersEnvironmentsRemovePublicKeyResponse.prototype, "statusCode", void 0);
    return CloudshellUsersEnvironmentsRemovePublicKeyResponse;
}(SpeakeasyBase));
export { CloudshellUsersEnvironmentsRemovePublicKeyResponse };
