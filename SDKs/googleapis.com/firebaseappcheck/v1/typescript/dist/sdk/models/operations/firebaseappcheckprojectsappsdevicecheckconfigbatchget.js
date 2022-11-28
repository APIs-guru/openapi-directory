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
var FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetPathParams, _super);
    function FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetPathParams.prototype, "parent", void 0);
    return FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetPathParams };
var FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams, _super);
    function FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=names" }),
        __metadata("design:type", Array)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams };
var FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1 };
var FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2 };
var FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity, _super);
    function FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity };
var FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest, _super);
    function FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetPathParams)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest };
var FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse, _super);
    function FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse.prototype, "googleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse };
