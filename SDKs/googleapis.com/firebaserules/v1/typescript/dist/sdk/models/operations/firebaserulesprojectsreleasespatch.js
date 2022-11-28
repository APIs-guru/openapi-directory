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
var FirebaserulesProjectsReleasesPatchPathParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesPatchPathParams, _super);
    function FirebaserulesProjectsReleasesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesPatchPathParams.prototype, "name", void 0);
    return FirebaserulesProjectsReleasesPatchPathParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesPatchPathParams };
var FirebaserulesProjectsReleasesPatchQueryParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesPatchQueryParams, _super);
    function FirebaserulesProjectsReleasesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaserulesProjectsReleasesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaserulesProjectsReleasesPatchQueryParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesPatchQueryParams };
var FirebaserulesProjectsReleasesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesPatchSecurityOption1, _super);
    function FirebaserulesProjectsReleasesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsReleasesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsReleasesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsReleasesPatchSecurityOption1;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesPatchSecurityOption1 };
var FirebaserulesProjectsReleasesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesPatchSecurityOption2, _super);
    function FirebaserulesProjectsReleasesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsReleasesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsReleasesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsReleasesPatchSecurityOption2;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesPatchSecurityOption2 };
var FirebaserulesProjectsReleasesPatchSecurity = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesPatchSecurity, _super);
    function FirebaserulesProjectsReleasesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsReleasesPatchSecurityOption1)
    ], FirebaserulesProjectsReleasesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsReleasesPatchSecurityOption2)
    ], FirebaserulesProjectsReleasesPatchSecurity.prototype, "option2", void 0);
    return FirebaserulesProjectsReleasesPatchSecurity;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesPatchSecurity };
var FirebaserulesProjectsReleasesPatchRequest = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesPatchRequest, _super);
    function FirebaserulesProjectsReleasesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsReleasesPatchPathParams)
    ], FirebaserulesProjectsReleasesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsReleasesPatchQueryParams)
    ], FirebaserulesProjectsReleasesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateReleaseRequestInput)
    ], FirebaserulesProjectsReleasesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsReleasesPatchSecurity)
    ], FirebaserulesProjectsReleasesPatchRequest.prototype, "security", void 0);
    return FirebaserulesProjectsReleasesPatchRequest;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesPatchRequest };
var FirebaserulesProjectsReleasesPatchResponse = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesPatchResponse, _super);
    function FirebaserulesProjectsReleasesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Release)
    ], FirebaserulesProjectsReleasesPatchResponse.prototype, "release", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaserulesProjectsReleasesPatchResponse.prototype, "statusCode", void 0);
    return FirebaserulesProjectsReleasesPatchResponse;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesPatchResponse };
