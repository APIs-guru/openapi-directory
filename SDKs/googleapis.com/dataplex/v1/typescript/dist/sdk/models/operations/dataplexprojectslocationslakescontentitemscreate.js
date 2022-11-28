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
var DataplexProjectsLocationsLakesContentitemsCreatePathParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesContentitemsCreatePathParams, _super);
    function DataplexProjectsLocationsLakesContentitemsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsCreatePathParams.prototype, "parent", void 0);
    return DataplexProjectsLocationsLakesContentitemsCreatePathParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesContentitemsCreatePathParams };
var DataplexProjectsLocationsLakesContentitemsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesContentitemsCreateQueryParams, _super);
    function DataplexProjectsLocationsLakesContentitemsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesContentitemsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesContentitemsCreateQueryParams.prototype, "validateOnly", void 0);
    return DataplexProjectsLocationsLakesContentitemsCreateQueryParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesContentitemsCreateQueryParams };
var DataplexProjectsLocationsLakesContentitemsCreateSecurity = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesContentitemsCreateSecurity, _super);
    function DataplexProjectsLocationsLakesContentitemsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataplexProjectsLocationsLakesContentitemsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataplexProjectsLocationsLakesContentitemsCreateSecurity.prototype, "oauth2c", void 0);
    return DataplexProjectsLocationsLakesContentitemsCreateSecurity;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesContentitemsCreateSecurity };
var DataplexProjectsLocationsLakesContentitemsCreateRequest = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesContentitemsCreateRequest, _super);
    function DataplexProjectsLocationsLakesContentitemsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesContentitemsCreatePathParams)
    ], DataplexProjectsLocationsLakesContentitemsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesContentitemsCreateQueryParams)
    ], DataplexProjectsLocationsLakesContentitemsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDataplexV1ContentInput)
    ], DataplexProjectsLocationsLakesContentitemsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesContentitemsCreateSecurity)
    ], DataplexProjectsLocationsLakesContentitemsCreateRequest.prototype, "security", void 0);
    return DataplexProjectsLocationsLakesContentitemsCreateRequest;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesContentitemsCreateRequest };
var DataplexProjectsLocationsLakesContentitemsCreateResponse = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesContentitemsCreateResponse, _super);
    function DataplexProjectsLocationsLakesContentitemsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDataplexV1Content)
    ], DataplexProjectsLocationsLakesContentitemsCreateResponse.prototype, "googleCloudDataplexV1Content", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataplexProjectsLocationsLakesContentitemsCreateResponse.prototype, "statusCode", void 0);
    return DataplexProjectsLocationsLakesContentitemsCreateResponse;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesContentitemsCreateResponse };
