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
var CloudbuildProjectsWorkerPoolsListPathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsWorkerPoolsListPathParams, _super);
    function CloudbuildProjectsWorkerPoolsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsListPathParams.prototype, "parent", void 0);
    return CloudbuildProjectsWorkerPoolsListPathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsWorkerPoolsListPathParams };
var CloudbuildProjectsWorkerPoolsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsWorkerPoolsListQueryParams, _super);
    function CloudbuildProjectsWorkerPoolsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsWorkerPoolsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsWorkerPoolsListQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsWorkerPoolsListQueryParams };
var CloudbuildProjectsWorkerPoolsListSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsWorkerPoolsListSecurity, _super);
    function CloudbuildProjectsWorkerPoolsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsWorkerPoolsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsWorkerPoolsListSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsWorkerPoolsListSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsWorkerPoolsListSecurity };
var CloudbuildProjectsWorkerPoolsListRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsWorkerPoolsListRequest, _super);
    function CloudbuildProjectsWorkerPoolsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsWorkerPoolsListPathParams)
    ], CloudbuildProjectsWorkerPoolsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsWorkerPoolsListQueryParams)
    ], CloudbuildProjectsWorkerPoolsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsWorkerPoolsListSecurity)
    ], CloudbuildProjectsWorkerPoolsListRequest.prototype, "security", void 0);
    return CloudbuildProjectsWorkerPoolsListRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsWorkerPoolsListRequest };
var CloudbuildProjectsWorkerPoolsListResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsWorkerPoolsListResponse, _super);
    function CloudbuildProjectsWorkerPoolsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListWorkerPoolsResponse)
    ], CloudbuildProjectsWorkerPoolsListResponse.prototype, "listWorkerPoolsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsWorkerPoolsListResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsWorkerPoolsListResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsWorkerPoolsListResponse };
