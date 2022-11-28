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
var RunProjectsLocationsRevisionsListPathParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsRevisionsListPathParams, _super);
    function RunProjectsLocationsRevisionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListPathParams.prototype, "parent", void 0);
    return RunProjectsLocationsRevisionsListPathParams;
}(SpeakeasyBase));
export { RunProjectsLocationsRevisionsListPathParams };
var RunProjectsLocationsRevisionsListQueryParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsRevisionsListQueryParams, _super);
    function RunProjectsLocationsRevisionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=continue" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "continue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fieldSelector" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "fieldSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeUninitialized" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "includeUninitialized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labelSelector" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceVersion" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "resourceVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=watch" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsRevisionsListQueryParams.prototype, "watch", void 0);
    return RunProjectsLocationsRevisionsListQueryParams;
}(SpeakeasyBase));
export { RunProjectsLocationsRevisionsListQueryParams };
var RunProjectsLocationsRevisionsListSecurity = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsRevisionsListSecurity, _super);
    function RunProjectsLocationsRevisionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RunProjectsLocationsRevisionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RunProjectsLocationsRevisionsListSecurity.prototype, "oauth2c", void 0);
    return RunProjectsLocationsRevisionsListSecurity;
}(SpeakeasyBase));
export { RunProjectsLocationsRevisionsListSecurity };
var RunProjectsLocationsRevisionsListRequest = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsRevisionsListRequest, _super);
    function RunProjectsLocationsRevisionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsRevisionsListPathParams)
    ], RunProjectsLocationsRevisionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsRevisionsListQueryParams)
    ], RunProjectsLocationsRevisionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsRevisionsListSecurity)
    ], RunProjectsLocationsRevisionsListRequest.prototype, "security", void 0);
    return RunProjectsLocationsRevisionsListRequest;
}(SpeakeasyBase));
export { RunProjectsLocationsRevisionsListRequest };
var RunProjectsLocationsRevisionsListResponse = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsRevisionsListResponse, _super);
    function RunProjectsLocationsRevisionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunProjectsLocationsRevisionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListRevisionsResponse)
    ], RunProjectsLocationsRevisionsListResponse.prototype, "listRevisionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunProjectsLocationsRevisionsListResponse.prototype, "statusCode", void 0);
    return RunProjectsLocationsRevisionsListResponse;
}(SpeakeasyBase));
export { RunProjectsLocationsRevisionsListResponse };
