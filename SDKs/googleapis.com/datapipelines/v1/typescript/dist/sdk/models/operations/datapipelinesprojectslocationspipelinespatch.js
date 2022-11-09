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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var DatapipelinesProjectsLocationsPipelinesPatchPathParams = /** @class */ (function (_super) {
    __extends(DatapipelinesProjectsLocationsPipelinesPatchPathParams, _super);
    function DatapipelinesProjectsLocationsPipelinesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesPatchPathParams.prototype, "name", void 0);
    return DatapipelinesProjectsLocationsPipelinesPatchPathParams;
}(SpeakeasyBase));
export { DatapipelinesProjectsLocationsPipelinesPatchPathParams };
var DatapipelinesProjectsLocationsPipelinesPatchQueryParams = /** @class */ (function (_super) {
    __extends(DatapipelinesProjectsLocationsPipelinesPatchQueryParams, _super);
    function DatapipelinesProjectsLocationsPipelinesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatapipelinesProjectsLocationsPipelinesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DatapipelinesProjectsLocationsPipelinesPatchQueryParams;
}(SpeakeasyBase));
export { DatapipelinesProjectsLocationsPipelinesPatchQueryParams };
var DatapipelinesProjectsLocationsPipelinesPatchSecurity = /** @class */ (function (_super) {
    __extends(DatapipelinesProjectsLocationsPipelinesPatchSecurity, _super);
    function DatapipelinesProjectsLocationsPipelinesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatapipelinesProjectsLocationsPipelinesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatapipelinesProjectsLocationsPipelinesPatchSecurity.prototype, "oauth2c", void 0);
    return DatapipelinesProjectsLocationsPipelinesPatchSecurity;
}(SpeakeasyBase));
export { DatapipelinesProjectsLocationsPipelinesPatchSecurity };
var DatapipelinesProjectsLocationsPipelinesPatchRequest = /** @class */ (function (_super) {
    __extends(DatapipelinesProjectsLocationsPipelinesPatchRequest, _super);
    function DatapipelinesProjectsLocationsPipelinesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DatapipelinesProjectsLocationsPipelinesPatchPathParams)
    ], DatapipelinesProjectsLocationsPipelinesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatapipelinesProjectsLocationsPipelinesPatchQueryParams)
    ], DatapipelinesProjectsLocationsPipelinesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDatapipelinesV1Pipeline)
    ], DatapipelinesProjectsLocationsPipelinesPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatapipelinesProjectsLocationsPipelinesPatchSecurity)
    ], DatapipelinesProjectsLocationsPipelinesPatchRequest.prototype, "security", void 0);
    return DatapipelinesProjectsLocationsPipelinesPatchRequest;
}(SpeakeasyBase));
export { DatapipelinesProjectsLocationsPipelinesPatchRequest };
var DatapipelinesProjectsLocationsPipelinesPatchResponse = /** @class */ (function (_super) {
    __extends(DatapipelinesProjectsLocationsPipelinesPatchResponse, _super);
    function DatapipelinesProjectsLocationsPipelinesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudDatapipelinesV1Pipeline)
    ], DatapipelinesProjectsLocationsPipelinesPatchResponse.prototype, "googleCloudDatapipelinesV1Pipeline", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatapipelinesProjectsLocationsPipelinesPatchResponse.prototype, "statusCode", void 0);
    return DatapipelinesProjectsLocationsPipelinesPatchResponse;
}(SpeakeasyBase));
export { DatapipelinesProjectsLocationsPipelinesPatchResponse };
