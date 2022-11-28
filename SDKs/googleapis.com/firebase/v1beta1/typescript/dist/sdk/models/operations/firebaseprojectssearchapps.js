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
var FirebaseProjectsSearchAppsPathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsSearchAppsPathParams, _super);
    function FirebaseProjectsSearchAppsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseProjectsSearchAppsPathParams.prototype, "parent", void 0);
    return FirebaseProjectsSearchAppsPathParams;
}(SpeakeasyBase));
export { FirebaseProjectsSearchAppsPathParams };
var FirebaseProjectsSearchAppsQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsSearchAppsQueryParams, _super);
    function FirebaseProjectsSearchAppsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsSearchAppsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsSearchAppsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsSearchAppsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsSearchAppsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsSearchAppsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], FirebaseProjectsSearchAppsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsSearchAppsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsSearchAppsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebaseProjectsSearchAppsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebaseProjectsSearchAppsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsSearchAppsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsSearchAppsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsSearchAppsQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsSearchAppsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsSearchAppsQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsSearchAppsQueryParams;
}(SpeakeasyBase));
export { FirebaseProjectsSearchAppsQueryParams };
var FirebaseProjectsSearchAppsSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsSearchAppsSecurityOption1, _super);
    function FirebaseProjectsSearchAppsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsSearchAppsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsSearchAppsSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsSearchAppsSecurityOption1;
}(SpeakeasyBase));
export { FirebaseProjectsSearchAppsSecurityOption1 };
var FirebaseProjectsSearchAppsSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsSearchAppsSecurityOption2, _super);
    function FirebaseProjectsSearchAppsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsSearchAppsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsSearchAppsSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsSearchAppsSecurityOption2;
}(SpeakeasyBase));
export { FirebaseProjectsSearchAppsSecurityOption2 };
var FirebaseProjectsSearchAppsSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsSearchAppsSecurityOption3, _super);
    function FirebaseProjectsSearchAppsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsSearchAppsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsSearchAppsSecurityOption3.prototype, "oauth2c", void 0);
    return FirebaseProjectsSearchAppsSecurityOption3;
}(SpeakeasyBase));
export { FirebaseProjectsSearchAppsSecurityOption3 };
var FirebaseProjectsSearchAppsSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsSearchAppsSecurityOption4, _super);
    function FirebaseProjectsSearchAppsSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsSearchAppsSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsSearchAppsSecurityOption4.prototype, "oauth2c", void 0);
    return FirebaseProjectsSearchAppsSecurityOption4;
}(SpeakeasyBase));
export { FirebaseProjectsSearchAppsSecurityOption4 };
var FirebaseProjectsSearchAppsSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsSearchAppsSecurity, _super);
    function FirebaseProjectsSearchAppsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsSearchAppsSecurityOption1)
    ], FirebaseProjectsSearchAppsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsSearchAppsSecurityOption2)
    ], FirebaseProjectsSearchAppsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsSearchAppsSecurityOption3)
    ], FirebaseProjectsSearchAppsSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsSearchAppsSecurityOption4)
    ], FirebaseProjectsSearchAppsSecurity.prototype, "option4", void 0);
    return FirebaseProjectsSearchAppsSecurity;
}(SpeakeasyBase));
export { FirebaseProjectsSearchAppsSecurity };
var FirebaseProjectsSearchAppsRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsSearchAppsRequest, _super);
    function FirebaseProjectsSearchAppsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsSearchAppsPathParams)
    ], FirebaseProjectsSearchAppsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsSearchAppsQueryParams)
    ], FirebaseProjectsSearchAppsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsSearchAppsSecurity)
    ], FirebaseProjectsSearchAppsRequest.prototype, "security", void 0);
    return FirebaseProjectsSearchAppsRequest;
}(SpeakeasyBase));
export { FirebaseProjectsSearchAppsRequest };
var FirebaseProjectsSearchAppsResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsSearchAppsResponse, _super);
    function FirebaseProjectsSearchAppsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseProjectsSearchAppsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchFirebaseAppsResponse)
    ], FirebaseProjectsSearchAppsResponse.prototype, "searchFirebaseAppsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseProjectsSearchAppsResponse.prototype, "statusCode", void 0);
    return FirebaseProjectsSearchAppsResponse;
}(SpeakeasyBase));
export { FirebaseProjectsSearchAppsResponse };
