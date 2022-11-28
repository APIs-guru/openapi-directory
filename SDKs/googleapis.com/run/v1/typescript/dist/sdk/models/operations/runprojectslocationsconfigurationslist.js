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
var RunProjectsLocationsConfigurationsListPathParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsConfigurationsListPathParams, _super);
    function RunProjectsLocationsConfigurationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListPathParams.prototype, "parent", void 0);
    return RunProjectsLocationsConfigurationsListPathParams;
}(SpeakeasyBase));
export { RunProjectsLocationsConfigurationsListPathParams };
var RunProjectsLocationsConfigurationsListQueryParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsConfigurationsListQueryParams, _super);
    function RunProjectsLocationsConfigurationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=continue" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "continue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fieldSelector" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "fieldSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeUninitialized" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "includeUninitialized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labelSelector" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceVersion" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "resourceVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=watch" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsConfigurationsListQueryParams.prototype, "watch", void 0);
    return RunProjectsLocationsConfigurationsListQueryParams;
}(SpeakeasyBase));
export { RunProjectsLocationsConfigurationsListQueryParams };
var RunProjectsLocationsConfigurationsListSecurity = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsConfigurationsListSecurity, _super);
    function RunProjectsLocationsConfigurationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RunProjectsLocationsConfigurationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RunProjectsLocationsConfigurationsListSecurity.prototype, "oauth2c", void 0);
    return RunProjectsLocationsConfigurationsListSecurity;
}(SpeakeasyBase));
export { RunProjectsLocationsConfigurationsListSecurity };
var RunProjectsLocationsConfigurationsListRequest = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsConfigurationsListRequest, _super);
    function RunProjectsLocationsConfigurationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsConfigurationsListPathParams)
    ], RunProjectsLocationsConfigurationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsConfigurationsListQueryParams)
    ], RunProjectsLocationsConfigurationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsConfigurationsListSecurity)
    ], RunProjectsLocationsConfigurationsListRequest.prototype, "security", void 0);
    return RunProjectsLocationsConfigurationsListRequest;
}(SpeakeasyBase));
export { RunProjectsLocationsConfigurationsListRequest };
var RunProjectsLocationsConfigurationsListResponse = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsConfigurationsListResponse, _super);
    function RunProjectsLocationsConfigurationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunProjectsLocationsConfigurationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListConfigurationsResponse)
    ], RunProjectsLocationsConfigurationsListResponse.prototype, "listConfigurationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunProjectsLocationsConfigurationsListResponse.prototype, "statusCode", void 0);
    return RunProjectsLocationsConfigurationsListResponse;
}(SpeakeasyBase));
export { RunProjectsLocationsConfigurationsListResponse };
