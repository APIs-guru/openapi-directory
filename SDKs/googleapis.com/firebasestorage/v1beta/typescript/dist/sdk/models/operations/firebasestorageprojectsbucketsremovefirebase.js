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
var FirebasestorageProjectsBucketsRemoveFirebasePathParams = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsRemoveFirebasePathParams, _super);
    function FirebasestorageProjectsBucketsRemoveFirebasePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsRemoveFirebasePathParams.prototype, "bucket", void 0);
    return FirebasestorageProjectsBucketsRemoveFirebasePathParams;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsRemoveFirebasePathParams };
var FirebasestorageProjectsBucketsRemoveFirebaseQueryParams = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsRemoveFirebaseQueryParams, _super);
    function FirebasestorageProjectsBucketsRemoveFirebaseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsRemoveFirebaseQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsRemoveFirebaseQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsRemoveFirebaseQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsRemoveFirebaseQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsRemoveFirebaseQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsRemoveFirebaseQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsRemoveFirebaseQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasestorageProjectsBucketsRemoveFirebaseQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsRemoveFirebaseQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsRemoveFirebaseQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsRemoveFirebaseQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasestorageProjectsBucketsRemoveFirebaseQueryParams;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsRemoveFirebaseQueryParams };
var FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption1, _super);
    function FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption1;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption1 };
var FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption2, _super);
    function FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption2;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption2 };
var FirebasestorageProjectsBucketsRemoveFirebaseSecurity = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsRemoveFirebaseSecurity, _super);
    function FirebasestorageProjectsBucketsRemoveFirebaseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption1)
    ], FirebasestorageProjectsBucketsRemoveFirebaseSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption2)
    ], FirebasestorageProjectsBucketsRemoveFirebaseSecurity.prototype, "option2", void 0);
    return FirebasestorageProjectsBucketsRemoveFirebaseSecurity;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsRemoveFirebaseSecurity };
var FirebasestorageProjectsBucketsRemoveFirebaseRequest = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsRemoveFirebaseRequest, _super);
    function FirebasestorageProjectsBucketsRemoveFirebaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasestorageProjectsBucketsRemoveFirebasePathParams)
    ], FirebasestorageProjectsBucketsRemoveFirebaseRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasestorageProjectsBucketsRemoveFirebaseQueryParams)
    ], FirebasestorageProjectsBucketsRemoveFirebaseRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], FirebasestorageProjectsBucketsRemoveFirebaseRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasestorageProjectsBucketsRemoveFirebaseSecurity)
    ], FirebasestorageProjectsBucketsRemoveFirebaseRequest.prototype, "security", void 0);
    return FirebasestorageProjectsBucketsRemoveFirebaseRequest;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsRemoveFirebaseRequest };
var FirebasestorageProjectsBucketsRemoveFirebaseResponse = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsRemoveFirebaseResponse, _super);
    function FirebasestorageProjectsBucketsRemoveFirebaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsRemoveFirebaseResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], FirebasestorageProjectsBucketsRemoveFirebaseResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebasestorageProjectsBucketsRemoveFirebaseResponse.prototype, "statusCode", void 0);
    return FirebasestorageProjectsBucketsRemoveFirebaseResponse;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsRemoveFirebaseResponse };
