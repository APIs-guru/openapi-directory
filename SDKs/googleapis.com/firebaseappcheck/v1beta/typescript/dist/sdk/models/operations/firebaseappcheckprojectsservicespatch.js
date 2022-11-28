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
var FirebaseappcheckProjectsServicesPatchPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesPatchPathParams, _super);
    function FirebaseappcheckProjectsServicesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesPatchPathParams.prototype, "name", void 0);
    return FirebaseappcheckProjectsServicesPatchPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesPatchPathParams };
var FirebaseappcheckProjectsServicesPatchQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesPatchQueryParams, _super);
    function FirebaseappcheckProjectsServicesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsServicesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsServicesPatchQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesPatchQueryParams };
var FirebaseappcheckProjectsServicesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesPatchSecurityOption1, _super);
    function FirebaseappcheckProjectsServicesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsServicesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsServicesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsServicesPatchSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesPatchSecurityOption1 };
var FirebaseappcheckProjectsServicesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesPatchSecurityOption2, _super);
    function FirebaseappcheckProjectsServicesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsServicesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsServicesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsServicesPatchSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesPatchSecurityOption2 };
var FirebaseappcheckProjectsServicesPatchSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesPatchSecurity, _super);
    function FirebaseappcheckProjectsServicesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsServicesPatchSecurityOption1)
    ], FirebaseappcheckProjectsServicesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsServicesPatchSecurityOption2)
    ], FirebaseappcheckProjectsServicesPatchSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsServicesPatchSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesPatchSecurity };
var FirebaseappcheckProjectsServicesPatchRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesPatchRequest, _super);
    function FirebaseappcheckProjectsServicesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsServicesPatchPathParams)
    ], FirebaseappcheckProjectsServicesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsServicesPatchQueryParams)
    ], FirebaseappcheckProjectsServicesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaService)
    ], FirebaseappcheckProjectsServicesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsServicesPatchSecurity)
    ], FirebaseappcheckProjectsServicesPatchRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsServicesPatchRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesPatchRequest };
var FirebaseappcheckProjectsServicesPatchResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesPatchResponse, _super);
    function FirebaseappcheckProjectsServicesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaService)
    ], FirebaseappcheckProjectsServicesPatchResponse.prototype, "googleFirebaseAppcheckV1betaService", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsServicesPatchResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsServicesPatchResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesPatchResponse };
