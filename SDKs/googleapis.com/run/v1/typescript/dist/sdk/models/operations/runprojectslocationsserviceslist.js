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
var RunProjectsLocationsServicesListPathParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesListPathParams, _super);
    function RunProjectsLocationsServicesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListPathParams.prototype, "parent", void 0);
    return RunProjectsLocationsServicesListPathParams;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesListPathParams };
var RunProjectsLocationsServicesListQueryParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesListQueryParams, _super);
    function RunProjectsLocationsServicesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=continue" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "continue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fieldSelector" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "fieldSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeUninitialized" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "includeUninitialized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labelSelector" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceVersion" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "resourceVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=watch" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsServicesListQueryParams.prototype, "watch", void 0);
    return RunProjectsLocationsServicesListQueryParams;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesListQueryParams };
var RunProjectsLocationsServicesListSecurity = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesListSecurity, _super);
    function RunProjectsLocationsServicesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RunProjectsLocationsServicesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RunProjectsLocationsServicesListSecurity.prototype, "oauth2c", void 0);
    return RunProjectsLocationsServicesListSecurity;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesListSecurity };
var RunProjectsLocationsServicesListRequest = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesListRequest, _super);
    function RunProjectsLocationsServicesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsServicesListPathParams)
    ], RunProjectsLocationsServicesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsServicesListQueryParams)
    ], RunProjectsLocationsServicesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsServicesListSecurity)
    ], RunProjectsLocationsServicesListRequest.prototype, "security", void 0);
    return RunProjectsLocationsServicesListRequest;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesListRequest };
var RunProjectsLocationsServicesListResponse = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesListResponse, _super);
    function RunProjectsLocationsServicesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListServicesResponse)
    ], RunProjectsLocationsServicesListResponse.prototype, "listServicesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunProjectsLocationsServicesListResponse.prototype, "statusCode", void 0);
    return RunProjectsLocationsServicesListResponse;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesListResponse };
