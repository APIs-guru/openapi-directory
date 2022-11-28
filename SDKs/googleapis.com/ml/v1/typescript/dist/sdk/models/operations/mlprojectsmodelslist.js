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
var MlProjectsModelsListPathParams = /** @class */ (function (_super) {
    __extends(MlProjectsModelsListPathParams, _super);
    function MlProjectsModelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MlProjectsModelsListPathParams.prototype, "parent", void 0);
    return MlProjectsModelsListPathParams;
}(SpeakeasyBase));
export { MlProjectsModelsListPathParams };
var MlProjectsModelsListQueryParams = /** @class */ (function (_super) {
    __extends(MlProjectsModelsListQueryParams, _super);
    function MlProjectsModelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MlProjectsModelsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MlProjectsModelsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MlProjectsModelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MlProjectsModelsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MlProjectsModelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], MlProjectsModelsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MlProjectsModelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MlProjectsModelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MlProjectsModelsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MlProjectsModelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MlProjectsModelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MlProjectsModelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MlProjectsModelsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MlProjectsModelsListQueryParams.prototype, "uploadProtocol", void 0);
    return MlProjectsModelsListQueryParams;
}(SpeakeasyBase));
export { MlProjectsModelsListQueryParams };
var MlProjectsModelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MlProjectsModelsListSecurityOption1, _super);
    function MlProjectsModelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MlProjectsModelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MlProjectsModelsListSecurityOption1.prototype, "oauth2c", void 0);
    return MlProjectsModelsListSecurityOption1;
}(SpeakeasyBase));
export { MlProjectsModelsListSecurityOption1 };
var MlProjectsModelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MlProjectsModelsListSecurityOption2, _super);
    function MlProjectsModelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MlProjectsModelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MlProjectsModelsListSecurityOption2.prototype, "oauth2c", void 0);
    return MlProjectsModelsListSecurityOption2;
}(SpeakeasyBase));
export { MlProjectsModelsListSecurityOption2 };
var MlProjectsModelsListSecurity = /** @class */ (function (_super) {
    __extends(MlProjectsModelsListSecurity, _super);
    function MlProjectsModelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MlProjectsModelsListSecurityOption1)
    ], MlProjectsModelsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MlProjectsModelsListSecurityOption2)
    ], MlProjectsModelsListSecurity.prototype, "option2", void 0);
    return MlProjectsModelsListSecurity;
}(SpeakeasyBase));
export { MlProjectsModelsListSecurity };
var MlProjectsModelsListRequest = /** @class */ (function (_super) {
    __extends(MlProjectsModelsListRequest, _super);
    function MlProjectsModelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsModelsListPathParams)
    ], MlProjectsModelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsModelsListQueryParams)
    ], MlProjectsModelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsModelsListSecurity)
    ], MlProjectsModelsListRequest.prototype, "security", void 0);
    return MlProjectsModelsListRequest;
}(SpeakeasyBase));
export { MlProjectsModelsListRequest };
var MlProjectsModelsListResponse = /** @class */ (function (_super) {
    __extends(MlProjectsModelsListResponse, _super);
    function MlProjectsModelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MlProjectsModelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudMlV1ListModelsResponse)
    ], MlProjectsModelsListResponse.prototype, "googleCloudMlV1ListModelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MlProjectsModelsListResponse.prototype, "statusCode", void 0);
    return MlProjectsModelsListResponse;
}(SpeakeasyBase));
export { MlProjectsModelsListResponse };
