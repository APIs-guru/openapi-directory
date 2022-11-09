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
var CloudshellUsersEnvironmentsAddPublicKeyPathParams = /** @class */ (function (_super) {
    __extends(CloudshellUsersEnvironmentsAddPublicKeyPathParams, _super);
    function CloudshellUsersEnvironmentsAddPublicKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=environment" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsAddPublicKeyPathParams.prototype, "environment", void 0);
    return CloudshellUsersEnvironmentsAddPublicKeyPathParams;
}(SpeakeasyBase));
export { CloudshellUsersEnvironmentsAddPublicKeyPathParams };
var CloudshellUsersEnvironmentsAddPublicKeyQueryParams = /** @class */ (function (_super) {
    __extends(CloudshellUsersEnvironmentsAddPublicKeyQueryParams, _super);
    function CloudshellUsersEnvironmentsAddPublicKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsAddPublicKeyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsAddPublicKeyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsAddPublicKeyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsAddPublicKeyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsAddPublicKeyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsAddPublicKeyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsAddPublicKeyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudshellUsersEnvironmentsAddPublicKeyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsAddPublicKeyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsAddPublicKeyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsAddPublicKeyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudshellUsersEnvironmentsAddPublicKeyQueryParams;
}(SpeakeasyBase));
export { CloudshellUsersEnvironmentsAddPublicKeyQueryParams };
var CloudshellUsersEnvironmentsAddPublicKeySecurity = /** @class */ (function (_super) {
    __extends(CloudshellUsersEnvironmentsAddPublicKeySecurity, _super);
    function CloudshellUsersEnvironmentsAddPublicKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudshellUsersEnvironmentsAddPublicKeySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudshellUsersEnvironmentsAddPublicKeySecurity.prototype, "oauth2c", void 0);
    return CloudshellUsersEnvironmentsAddPublicKeySecurity;
}(SpeakeasyBase));
export { CloudshellUsersEnvironmentsAddPublicKeySecurity };
var CloudshellUsersEnvironmentsAddPublicKeyRequest = /** @class */ (function (_super) {
    __extends(CloudshellUsersEnvironmentsAddPublicKeyRequest, _super);
    function CloudshellUsersEnvironmentsAddPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudshellUsersEnvironmentsAddPublicKeyPathParams)
    ], CloudshellUsersEnvironmentsAddPublicKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudshellUsersEnvironmentsAddPublicKeyQueryParams)
    ], CloudshellUsersEnvironmentsAddPublicKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddPublicKeyRequest)
    ], CloudshellUsersEnvironmentsAddPublicKeyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudshellUsersEnvironmentsAddPublicKeySecurity)
    ], CloudshellUsersEnvironmentsAddPublicKeyRequest.prototype, "security", void 0);
    return CloudshellUsersEnvironmentsAddPublicKeyRequest;
}(SpeakeasyBase));
export { CloudshellUsersEnvironmentsAddPublicKeyRequest };
var CloudshellUsersEnvironmentsAddPublicKeyResponse = /** @class */ (function (_super) {
    __extends(CloudshellUsersEnvironmentsAddPublicKeyResponse, _super);
    function CloudshellUsersEnvironmentsAddPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsAddPublicKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], CloudshellUsersEnvironmentsAddPublicKeyResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudshellUsersEnvironmentsAddPublicKeyResponse.prototype, "statusCode", void 0);
    return CloudshellUsersEnvironmentsAddPublicKeyResponse;
}(SpeakeasyBase));
export { CloudshellUsersEnvironmentsAddPublicKeyResponse };
