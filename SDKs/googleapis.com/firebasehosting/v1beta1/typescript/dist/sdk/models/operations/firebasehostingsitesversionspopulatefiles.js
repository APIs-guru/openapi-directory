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
var FirebasehostingSitesVersionsPopulateFilesPathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsPopulateFilesPathParams, _super);
    function FirebasehostingSitesVersionsPopulateFilesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPopulateFilesPathParams.prototype, "parent", void 0);
    return FirebasehostingSitesVersionsPopulateFilesPathParams;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsPopulateFilesPathParams };
var FirebasehostingSitesVersionsPopulateFilesQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsPopulateFilesQueryParams, _super);
    function FirebasehostingSitesVersionsPopulateFilesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPopulateFilesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPopulateFilesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPopulateFilesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPopulateFilesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPopulateFilesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPopulateFilesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPopulateFilesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingSitesVersionsPopulateFilesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPopulateFilesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPopulateFilesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPopulateFilesQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasehostingSitesVersionsPopulateFilesQueryParams;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsPopulateFilesQueryParams };
var FirebasehostingSitesVersionsPopulateFilesSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsPopulateFilesSecurityOption1, _super);
    function FirebasehostingSitesVersionsPopulateFilesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsPopulateFilesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsPopulateFilesSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsPopulateFilesSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsPopulateFilesSecurityOption1 };
var FirebasehostingSitesVersionsPopulateFilesSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsPopulateFilesSecurityOption2, _super);
    function FirebasehostingSitesVersionsPopulateFilesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsPopulateFilesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsPopulateFilesSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsPopulateFilesSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsPopulateFilesSecurityOption2 };
var FirebasehostingSitesVersionsPopulateFilesSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsPopulateFilesSecurity, _super);
    function FirebasehostingSitesVersionsPopulateFilesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsPopulateFilesSecurityOption1)
    ], FirebasehostingSitesVersionsPopulateFilesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsPopulateFilesSecurityOption2)
    ], FirebasehostingSitesVersionsPopulateFilesSecurity.prototype, "option2", void 0);
    return FirebasehostingSitesVersionsPopulateFilesSecurity;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsPopulateFilesSecurity };
var FirebasehostingSitesVersionsPopulateFilesRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsPopulateFilesRequest, _super);
    function FirebasehostingSitesVersionsPopulateFilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsPopulateFilesPathParams)
    ], FirebasehostingSitesVersionsPopulateFilesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsPopulateFilesQueryParams)
    ], FirebasehostingSitesVersionsPopulateFilesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PopulateVersionFilesRequest)
    ], FirebasehostingSitesVersionsPopulateFilesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsPopulateFilesSecurity)
    ], FirebasehostingSitesVersionsPopulateFilesRequest.prototype, "security", void 0);
    return FirebasehostingSitesVersionsPopulateFilesRequest;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsPopulateFilesRequest };
var FirebasehostingSitesVersionsPopulateFilesResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsPopulateFilesResponse, _super);
    function FirebasehostingSitesVersionsPopulateFilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsPopulateFilesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PopulateVersionFilesResponse)
    ], FirebasehostingSitesVersionsPopulateFilesResponse.prototype, "populateVersionFilesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingSitesVersionsPopulateFilesResponse.prototype, "statusCode", void 0);
    return FirebasehostingSitesVersionsPopulateFilesResponse;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsPopulateFilesResponse };
