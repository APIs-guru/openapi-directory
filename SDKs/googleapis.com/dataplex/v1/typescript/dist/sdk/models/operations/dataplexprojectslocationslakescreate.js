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
var DataplexProjectsLocationsLakesCreatePathParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesCreatePathParams, _super);
    function DataplexProjectsLocationsLakesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesCreatePathParams.prototype, "parent", void 0);
    return DataplexProjectsLocationsLakesCreatePathParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesCreatePathParams };
var DataplexProjectsLocationsLakesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesCreateQueryParams, _super);
    function DataplexProjectsLocationsLakesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lakeId" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesCreateQueryParams.prototype, "lakeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesCreateQueryParams.prototype, "validateOnly", void 0);
    return DataplexProjectsLocationsLakesCreateQueryParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesCreateQueryParams };
var DataplexProjectsLocationsLakesCreateSecurity = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesCreateSecurity, _super);
    function DataplexProjectsLocationsLakesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataplexProjectsLocationsLakesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataplexProjectsLocationsLakesCreateSecurity.prototype, "oauth2c", void 0);
    return DataplexProjectsLocationsLakesCreateSecurity;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesCreateSecurity };
var DataplexProjectsLocationsLakesCreateRequest = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesCreateRequest, _super);
    function DataplexProjectsLocationsLakesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesCreatePathParams)
    ], DataplexProjectsLocationsLakesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesCreateQueryParams)
    ], DataplexProjectsLocationsLakesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDataplexV1LakeInput)
    ], DataplexProjectsLocationsLakesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesCreateSecurity)
    ], DataplexProjectsLocationsLakesCreateRequest.prototype, "security", void 0);
    return DataplexProjectsLocationsLakesCreateRequest;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesCreateRequest };
var DataplexProjectsLocationsLakesCreateResponse = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesCreateResponse, _super);
    function DataplexProjectsLocationsLakesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DataplexProjectsLocationsLakesCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataplexProjectsLocationsLakesCreateResponse.prototype, "statusCode", void 0);
    return DataplexProjectsLocationsLakesCreateResponse;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesCreateResponse };
