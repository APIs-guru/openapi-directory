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
var MlProjectsLocationsListPathParams = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsListPathParams, _super);
    function MlProjectsLocationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsListPathParams.prototype, "parent", void 0);
    return MlProjectsLocationsListPathParams;
}(SpeakeasyBase));
export { MlProjectsLocationsListPathParams };
var MlProjectsLocationsListQueryParams = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsListQueryParams, _super);
    function MlProjectsLocationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MlProjectsLocationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MlProjectsLocationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsListQueryParams.prototype, "uploadProtocol", void 0);
    return MlProjectsLocationsListQueryParams;
}(SpeakeasyBase));
export { MlProjectsLocationsListQueryParams };
var MlProjectsLocationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsListSecurityOption1, _super);
    function MlProjectsLocationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MlProjectsLocationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MlProjectsLocationsListSecurityOption1.prototype, "oauth2c", void 0);
    return MlProjectsLocationsListSecurityOption1;
}(SpeakeasyBase));
export { MlProjectsLocationsListSecurityOption1 };
var MlProjectsLocationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsListSecurityOption2, _super);
    function MlProjectsLocationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MlProjectsLocationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MlProjectsLocationsListSecurityOption2.prototype, "oauth2c", void 0);
    return MlProjectsLocationsListSecurityOption2;
}(SpeakeasyBase));
export { MlProjectsLocationsListSecurityOption2 };
var MlProjectsLocationsListSecurity = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsListSecurity, _super);
    function MlProjectsLocationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MlProjectsLocationsListSecurityOption1)
    ], MlProjectsLocationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MlProjectsLocationsListSecurityOption2)
    ], MlProjectsLocationsListSecurity.prototype, "option2", void 0);
    return MlProjectsLocationsListSecurity;
}(SpeakeasyBase));
export { MlProjectsLocationsListSecurity };
var MlProjectsLocationsListRequest = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsListRequest, _super);
    function MlProjectsLocationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsLocationsListPathParams)
    ], MlProjectsLocationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsLocationsListQueryParams)
    ], MlProjectsLocationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsLocationsListSecurity)
    ], MlProjectsLocationsListRequest.prototype, "security", void 0);
    return MlProjectsLocationsListRequest;
}(SpeakeasyBase));
export { MlProjectsLocationsListRequest };
var MlProjectsLocationsListResponse = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsListResponse, _super);
    function MlProjectsLocationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MlProjectsLocationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudMlV1ListLocationsResponse)
    ], MlProjectsLocationsListResponse.prototype, "googleCloudMlV1ListLocationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MlProjectsLocationsListResponse.prototype, "statusCode", void 0);
    return MlProjectsLocationsListResponse;
}(SpeakeasyBase));
export { MlProjectsLocationsListResponse };
