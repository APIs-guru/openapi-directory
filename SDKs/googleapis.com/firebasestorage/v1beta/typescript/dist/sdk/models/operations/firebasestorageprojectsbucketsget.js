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
var FirebasestorageProjectsBucketsGetPathParams = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsGetPathParams, _super);
    function FirebasestorageProjectsBucketsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsGetPathParams.prototype, "name", void 0);
    return FirebasestorageProjectsBucketsGetPathParams;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsGetPathParams };
var FirebasestorageProjectsBucketsGetQueryParams = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsGetQueryParams, _super);
    function FirebasestorageProjectsBucketsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasestorageProjectsBucketsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsGetQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasestorageProjectsBucketsGetQueryParams;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsGetQueryParams };
var FirebasestorageProjectsBucketsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsGetSecurityOption1, _super);
    function FirebasestorageProjectsBucketsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasestorageProjectsBucketsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasestorageProjectsBucketsGetSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasestorageProjectsBucketsGetSecurityOption1;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsGetSecurityOption1 };
var FirebasestorageProjectsBucketsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsGetSecurityOption2, _super);
    function FirebasestorageProjectsBucketsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasestorageProjectsBucketsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasestorageProjectsBucketsGetSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasestorageProjectsBucketsGetSecurityOption2;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsGetSecurityOption2 };
var FirebasestorageProjectsBucketsGetSecurity = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsGetSecurity, _super);
    function FirebasestorageProjectsBucketsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasestorageProjectsBucketsGetSecurityOption1)
    ], FirebasestorageProjectsBucketsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasestorageProjectsBucketsGetSecurityOption2)
    ], FirebasestorageProjectsBucketsGetSecurity.prototype, "option2", void 0);
    return FirebasestorageProjectsBucketsGetSecurity;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsGetSecurity };
var FirebasestorageProjectsBucketsGetRequest = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsGetRequest, _super);
    function FirebasestorageProjectsBucketsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasestorageProjectsBucketsGetPathParams)
    ], FirebasestorageProjectsBucketsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasestorageProjectsBucketsGetQueryParams)
    ], FirebasestorageProjectsBucketsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasestorageProjectsBucketsGetSecurity)
    ], FirebasestorageProjectsBucketsGetRequest.prototype, "security", void 0);
    return FirebasestorageProjectsBucketsGetRequest;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsGetRequest };
var FirebasestorageProjectsBucketsGetResponse = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsGetResponse, _super);
    function FirebasestorageProjectsBucketsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Bucket)
    ], FirebasestorageProjectsBucketsGetResponse.prototype, "bucket", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebasestorageProjectsBucketsGetResponse.prototype, "statusCode", void 0);
    return FirebasestorageProjectsBucketsGetResponse;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsGetResponse };
