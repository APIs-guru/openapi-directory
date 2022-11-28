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
var FirebasehostingSitesVersionsPatchPathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsPatchPathParams, _super);
    function FirebasehostingSitesVersionsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPatchPathParams.prototype, "name", void 0);
    return FirebasehostingSitesVersionsPatchPathParams;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsPatchPathParams };
var FirebasehostingSitesVersionsPatchQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsPatchQueryParams, _super);
    function FirebasehostingSitesVersionsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingSitesVersionsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasehostingSitesVersionsPatchQueryParams;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsPatchQueryParams };
var FirebasehostingSitesVersionsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsPatchSecurityOption1, _super);
    function FirebasehostingSitesVersionsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsPatchSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsPatchSecurityOption1 };
var FirebasehostingSitesVersionsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsPatchSecurityOption2, _super);
    function FirebasehostingSitesVersionsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsPatchSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsPatchSecurityOption2 };
var FirebasehostingSitesVersionsPatchSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsPatchSecurity, _super);
    function FirebasehostingSitesVersionsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsPatchSecurityOption1)
    ], FirebasehostingSitesVersionsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsPatchSecurityOption2)
    ], FirebasehostingSitesVersionsPatchSecurity.prototype, "option2", void 0);
    return FirebasehostingSitesVersionsPatchSecurity;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsPatchSecurity };
var FirebasehostingSitesVersionsPatchRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsPatchRequest, _super);
    function FirebasehostingSitesVersionsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsPatchPathParams)
    ], FirebasehostingSitesVersionsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsPatchQueryParams)
    ], FirebasehostingSitesVersionsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Version)
    ], FirebasehostingSitesVersionsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsPatchSecurity)
    ], FirebasehostingSitesVersionsPatchRequest.prototype, "security", void 0);
    return FirebasehostingSitesVersionsPatchRequest;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsPatchRequest };
var FirebasehostingSitesVersionsPatchResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsPatchResponse, _super);
    function FirebasehostingSitesVersionsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingSitesVersionsPatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Version)
    ], FirebasehostingSitesVersionsPatchResponse.prototype, "version", void 0);
    return FirebasehostingSitesVersionsPatchResponse;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsPatchResponse };
