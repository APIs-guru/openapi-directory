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
var RunProjectsLocationsServicesRevisionsDeletePathParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesRevisionsDeletePathParams, _super);
    function RunProjectsLocationsServicesRevisionsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsDeletePathParams.prototype, "name", void 0);
    return RunProjectsLocationsServicesRevisionsDeletePathParams;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesRevisionsDeletePathParams };
var RunProjectsLocationsServicesRevisionsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesRevisionsDeleteQueryParams, _super);
    function RunProjectsLocationsServicesRevisionsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=etag" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsDeleteQueryParams.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsServicesRevisionsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsServicesRevisionsDeleteQueryParams.prototype, "validateOnly", void 0);
    return RunProjectsLocationsServicesRevisionsDeleteQueryParams;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesRevisionsDeleteQueryParams };
var RunProjectsLocationsServicesRevisionsDeleteSecurity = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesRevisionsDeleteSecurity, _super);
    function RunProjectsLocationsServicesRevisionsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RunProjectsLocationsServicesRevisionsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RunProjectsLocationsServicesRevisionsDeleteSecurity.prototype, "oauth2c", void 0);
    return RunProjectsLocationsServicesRevisionsDeleteSecurity;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesRevisionsDeleteSecurity };
var RunProjectsLocationsServicesRevisionsDeleteRequest = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesRevisionsDeleteRequest, _super);
    function RunProjectsLocationsServicesRevisionsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsServicesRevisionsDeletePathParams)
    ], RunProjectsLocationsServicesRevisionsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsServicesRevisionsDeleteQueryParams)
    ], RunProjectsLocationsServicesRevisionsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsServicesRevisionsDeleteSecurity)
    ], RunProjectsLocationsServicesRevisionsDeleteRequest.prototype, "security", void 0);
    return RunProjectsLocationsServicesRevisionsDeleteRequest;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesRevisionsDeleteRequest };
var RunProjectsLocationsServicesRevisionsDeleteResponse = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesRevisionsDeleteResponse, _super);
    function RunProjectsLocationsServicesRevisionsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], RunProjectsLocationsServicesRevisionsDeleteResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunProjectsLocationsServicesRevisionsDeleteResponse.prototype, "statusCode", void 0);
    return RunProjectsLocationsServicesRevisionsDeleteResponse;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesRevisionsDeleteResponse };
