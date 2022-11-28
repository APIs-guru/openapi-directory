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
var DataplexProjectsLocationsLakesEnvironmentsCreatePathParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesEnvironmentsCreatePathParams, _super);
    function DataplexProjectsLocationsLakesEnvironmentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsCreatePathParams.prototype, "parent", void 0);
    return DataplexProjectsLocationsLakesEnvironmentsCreatePathParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesEnvironmentsCreatePathParams };
var DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams, _super);
    function DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=environmentId" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams.prototype, "environmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams.prototype, "validateOnly", void 0);
    return DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams };
var DataplexProjectsLocationsLakesEnvironmentsCreateSecurity = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesEnvironmentsCreateSecurity, _super);
    function DataplexProjectsLocationsLakesEnvironmentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateSecurity.prototype, "oauth2c", void 0);
    return DataplexProjectsLocationsLakesEnvironmentsCreateSecurity;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesEnvironmentsCreateSecurity };
var DataplexProjectsLocationsLakesEnvironmentsCreateRequest = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesEnvironmentsCreateRequest, _super);
    function DataplexProjectsLocationsLakesEnvironmentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesEnvironmentsCreatePathParams)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDataplexV1EnvironmentInput)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesEnvironmentsCreateSecurity)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateRequest.prototype, "security", void 0);
    return DataplexProjectsLocationsLakesEnvironmentsCreateRequest;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesEnvironmentsCreateRequest };
var DataplexProjectsLocationsLakesEnvironmentsCreateResponse = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesEnvironmentsCreateResponse, _super);
    function DataplexProjectsLocationsLakesEnvironmentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataplexProjectsLocationsLakesEnvironmentsCreateResponse.prototype, "statusCode", void 0);
    return DataplexProjectsLocationsLakesEnvironmentsCreateResponse;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesEnvironmentsCreateResponse };
