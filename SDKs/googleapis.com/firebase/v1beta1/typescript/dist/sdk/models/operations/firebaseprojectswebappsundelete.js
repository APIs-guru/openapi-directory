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
var FirebaseProjectsWebAppsUndeletePathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsUndeletePathParams, _super);
    function FirebaseProjectsWebAppsUndeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsUndeletePathParams.prototype, "name", void 0);
    return FirebaseProjectsWebAppsUndeletePathParams;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsUndeletePathParams };
var FirebaseProjectsWebAppsUndeleteQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsUndeleteQueryParams, _super);
    function FirebaseProjectsWebAppsUndeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsUndeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsUndeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsUndeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsUndeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsUndeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsUndeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsUndeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsWebAppsUndeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsUndeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsUndeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsUndeleteQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsWebAppsUndeleteQueryParams;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsUndeleteQueryParams };
var FirebaseProjectsWebAppsUndeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsUndeleteSecurityOption1, _super);
    function FirebaseProjectsWebAppsUndeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsWebAppsUndeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsWebAppsUndeleteSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsWebAppsUndeleteSecurityOption1;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsUndeleteSecurityOption1 };
var FirebaseProjectsWebAppsUndeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsUndeleteSecurityOption2, _super);
    function FirebaseProjectsWebAppsUndeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsWebAppsUndeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsWebAppsUndeleteSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsWebAppsUndeleteSecurityOption2;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsUndeleteSecurityOption2 };
var FirebaseProjectsWebAppsUndeleteSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsUndeleteSecurity, _super);
    function FirebaseProjectsWebAppsUndeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsWebAppsUndeleteSecurityOption1)
    ], FirebaseProjectsWebAppsUndeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsWebAppsUndeleteSecurityOption2)
    ], FirebaseProjectsWebAppsUndeleteSecurity.prototype, "option2", void 0);
    return FirebaseProjectsWebAppsUndeleteSecurity;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsUndeleteSecurity };
var FirebaseProjectsWebAppsUndeleteRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsUndeleteRequest, _super);
    function FirebaseProjectsWebAppsUndeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsWebAppsUndeletePathParams)
    ], FirebaseProjectsWebAppsUndeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsWebAppsUndeleteQueryParams)
    ], FirebaseProjectsWebAppsUndeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UndeleteWebAppRequest)
    ], FirebaseProjectsWebAppsUndeleteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsWebAppsUndeleteSecurity)
    ], FirebaseProjectsWebAppsUndeleteRequest.prototype, "security", void 0);
    return FirebaseProjectsWebAppsUndeleteRequest;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsUndeleteRequest };
var FirebaseProjectsWebAppsUndeleteResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsUndeleteResponse, _super);
    function FirebaseProjectsWebAppsUndeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsUndeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], FirebaseProjectsWebAppsUndeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseProjectsWebAppsUndeleteResponse.prototype, "statusCode", void 0);
    return FirebaseProjectsWebAppsUndeleteResponse;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsUndeleteResponse };
