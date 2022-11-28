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
var FirebasehostingSitesVersionsDeletePathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsDeletePathParams, _super);
    function FirebasehostingSitesVersionsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsDeletePathParams.prototype, "name", void 0);
    return FirebasehostingSitesVersionsDeletePathParams;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsDeletePathParams };
var FirebasehostingSitesVersionsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsDeleteQueryParams, _super);
    function FirebasehostingSitesVersionsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingSitesVersionsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasehostingSitesVersionsDeleteQueryParams;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsDeleteQueryParams };
var FirebasehostingSitesVersionsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsDeleteSecurityOption1, _super);
    function FirebasehostingSitesVersionsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsDeleteSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsDeleteSecurityOption1 };
var FirebasehostingSitesVersionsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsDeleteSecurityOption2, _super);
    function FirebasehostingSitesVersionsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsDeleteSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsDeleteSecurityOption2 };
var FirebasehostingSitesVersionsDeleteSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsDeleteSecurity, _super);
    function FirebasehostingSitesVersionsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsDeleteSecurityOption1)
    ], FirebasehostingSitesVersionsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsDeleteSecurityOption2)
    ], FirebasehostingSitesVersionsDeleteSecurity.prototype, "option2", void 0);
    return FirebasehostingSitesVersionsDeleteSecurity;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsDeleteSecurity };
var FirebasehostingSitesVersionsDeleteRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsDeleteRequest, _super);
    function FirebasehostingSitesVersionsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsDeletePathParams)
    ], FirebasehostingSitesVersionsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsDeleteQueryParams)
    ], FirebasehostingSitesVersionsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsDeleteSecurity)
    ], FirebasehostingSitesVersionsDeleteRequest.prototype, "security", void 0);
    return FirebasehostingSitesVersionsDeleteRequest;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsDeleteRequest };
var FirebasehostingSitesVersionsDeleteResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsDeleteResponse, _super);
    function FirebasehostingSitesVersionsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], FirebasehostingSitesVersionsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingSitesVersionsDeleteResponse.prototype, "statusCode", void 0);
    return FirebasehostingSitesVersionsDeleteResponse;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsDeleteResponse };
