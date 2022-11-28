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
var MlProjectsModelsVersionsListPathParams = /** @class */ (function (_super) {
    __extends(MlProjectsModelsVersionsListPathParams, _super);
    function MlProjectsModelsVersionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MlProjectsModelsVersionsListPathParams.prototype, "parent", void 0);
    return MlProjectsModelsVersionsListPathParams;
}(SpeakeasyBase));
export { MlProjectsModelsVersionsListPathParams };
var MlProjectsModelsVersionsListQueryParams = /** @class */ (function (_super) {
    __extends(MlProjectsModelsVersionsListQueryParams, _super);
    function MlProjectsModelsVersionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MlProjectsModelsVersionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MlProjectsModelsVersionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MlProjectsModelsVersionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MlProjectsModelsVersionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MlProjectsModelsVersionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], MlProjectsModelsVersionsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MlProjectsModelsVersionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MlProjectsModelsVersionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MlProjectsModelsVersionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MlProjectsModelsVersionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MlProjectsModelsVersionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MlProjectsModelsVersionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MlProjectsModelsVersionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MlProjectsModelsVersionsListQueryParams.prototype, "uploadProtocol", void 0);
    return MlProjectsModelsVersionsListQueryParams;
}(SpeakeasyBase));
export { MlProjectsModelsVersionsListQueryParams };
var MlProjectsModelsVersionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MlProjectsModelsVersionsListSecurityOption1, _super);
    function MlProjectsModelsVersionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MlProjectsModelsVersionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MlProjectsModelsVersionsListSecurityOption1.prototype, "oauth2c", void 0);
    return MlProjectsModelsVersionsListSecurityOption1;
}(SpeakeasyBase));
export { MlProjectsModelsVersionsListSecurityOption1 };
var MlProjectsModelsVersionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MlProjectsModelsVersionsListSecurityOption2, _super);
    function MlProjectsModelsVersionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MlProjectsModelsVersionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MlProjectsModelsVersionsListSecurityOption2.prototype, "oauth2c", void 0);
    return MlProjectsModelsVersionsListSecurityOption2;
}(SpeakeasyBase));
export { MlProjectsModelsVersionsListSecurityOption2 };
var MlProjectsModelsVersionsListSecurity = /** @class */ (function (_super) {
    __extends(MlProjectsModelsVersionsListSecurity, _super);
    function MlProjectsModelsVersionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MlProjectsModelsVersionsListSecurityOption1)
    ], MlProjectsModelsVersionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MlProjectsModelsVersionsListSecurityOption2)
    ], MlProjectsModelsVersionsListSecurity.prototype, "option2", void 0);
    return MlProjectsModelsVersionsListSecurity;
}(SpeakeasyBase));
export { MlProjectsModelsVersionsListSecurity };
var MlProjectsModelsVersionsListRequest = /** @class */ (function (_super) {
    __extends(MlProjectsModelsVersionsListRequest, _super);
    function MlProjectsModelsVersionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsModelsVersionsListPathParams)
    ], MlProjectsModelsVersionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsModelsVersionsListQueryParams)
    ], MlProjectsModelsVersionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsModelsVersionsListSecurity)
    ], MlProjectsModelsVersionsListRequest.prototype, "security", void 0);
    return MlProjectsModelsVersionsListRequest;
}(SpeakeasyBase));
export { MlProjectsModelsVersionsListRequest };
var MlProjectsModelsVersionsListResponse = /** @class */ (function (_super) {
    __extends(MlProjectsModelsVersionsListResponse, _super);
    function MlProjectsModelsVersionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MlProjectsModelsVersionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudMlV1ListVersionsResponse)
    ], MlProjectsModelsVersionsListResponse.prototype, "googleCloudMlV1ListVersionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MlProjectsModelsVersionsListResponse.prototype, "statusCode", void 0);
    return MlProjectsModelsVersionsListResponse;
}(SpeakeasyBase));
export { MlProjectsModelsVersionsListResponse };
