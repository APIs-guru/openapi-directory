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
var FirebasehostingSitesVersionsClonePathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsClonePathParams, _super);
    function FirebasehostingSitesVersionsClonePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsClonePathParams.prototype, "parent", void 0);
    return FirebasehostingSitesVersionsClonePathParams;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsClonePathParams };
var FirebasehostingSitesVersionsCloneQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsCloneQueryParams, _super);
    function FirebasehostingSitesVersionsCloneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCloneQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCloneQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCloneQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCloneQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCloneQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCloneQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCloneQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingSitesVersionsCloneQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCloneQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCloneQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCloneQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasehostingSitesVersionsCloneQueryParams;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsCloneQueryParams };
var FirebasehostingSitesVersionsCloneSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsCloneSecurityOption1, _super);
    function FirebasehostingSitesVersionsCloneSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsCloneSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsCloneSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsCloneSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsCloneSecurityOption1 };
var FirebasehostingSitesVersionsCloneSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsCloneSecurityOption2, _super);
    function FirebasehostingSitesVersionsCloneSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsCloneSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsCloneSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsCloneSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsCloneSecurityOption2 };
var FirebasehostingSitesVersionsCloneSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsCloneSecurity, _super);
    function FirebasehostingSitesVersionsCloneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsCloneSecurityOption1)
    ], FirebasehostingSitesVersionsCloneSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsCloneSecurityOption2)
    ], FirebasehostingSitesVersionsCloneSecurity.prototype, "option2", void 0);
    return FirebasehostingSitesVersionsCloneSecurity;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsCloneSecurity };
var FirebasehostingSitesVersionsCloneRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsCloneRequest, _super);
    function FirebasehostingSitesVersionsCloneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsClonePathParams)
    ], FirebasehostingSitesVersionsCloneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsCloneQueryParams)
    ], FirebasehostingSitesVersionsCloneRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CloneVersionRequest)
    ], FirebasehostingSitesVersionsCloneRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsCloneSecurity)
    ], FirebasehostingSitesVersionsCloneRequest.prototype, "security", void 0);
    return FirebasehostingSitesVersionsCloneRequest;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsCloneRequest };
var FirebasehostingSitesVersionsCloneResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsCloneResponse, _super);
    function FirebasehostingSitesVersionsCloneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCloneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], FirebasehostingSitesVersionsCloneResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingSitesVersionsCloneResponse.prototype, "statusCode", void 0);
    return FirebasehostingSitesVersionsCloneResponse;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsCloneResponse };
