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
var DatalabelingProjectsEvaluationJobsPatchPathParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsEvaluationJobsPatchPathParams, _super);
    function DatalabelingProjectsEvaluationJobsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPatchPathParams.prototype, "name", void 0);
    return DatalabelingProjectsEvaluationJobsPatchPathParams;
}(SpeakeasyBase));
export { DatalabelingProjectsEvaluationJobsPatchPathParams };
var DatalabelingProjectsEvaluationJobsPatchQueryParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsEvaluationJobsPatchQueryParams, _super);
    function DatalabelingProjectsEvaluationJobsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatalabelingProjectsEvaluationJobsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DatalabelingProjectsEvaluationJobsPatchQueryParams;
}(SpeakeasyBase));
export { DatalabelingProjectsEvaluationJobsPatchQueryParams };
var DatalabelingProjectsEvaluationJobsPatchSecurity = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsEvaluationJobsPatchSecurity, _super);
    function DatalabelingProjectsEvaluationJobsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatalabelingProjectsEvaluationJobsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatalabelingProjectsEvaluationJobsPatchSecurity.prototype, "oauth2c", void 0);
    return DatalabelingProjectsEvaluationJobsPatchSecurity;
}(SpeakeasyBase));
export { DatalabelingProjectsEvaluationJobsPatchSecurity };
var DatalabelingProjectsEvaluationJobsPatchRequest = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsEvaluationJobsPatchRequest, _super);
    function DatalabelingProjectsEvaluationJobsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsEvaluationJobsPatchPathParams)
    ], DatalabelingProjectsEvaluationJobsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsEvaluationJobsPatchQueryParams)
    ], DatalabelingProjectsEvaluationJobsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDatalabelingV1beta1EvaluationJob)
    ], DatalabelingProjectsEvaluationJobsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsEvaluationJobsPatchSecurity)
    ], DatalabelingProjectsEvaluationJobsPatchRequest.prototype, "security", void 0);
    return DatalabelingProjectsEvaluationJobsPatchRequest;
}(SpeakeasyBase));
export { DatalabelingProjectsEvaluationJobsPatchRequest };
var DatalabelingProjectsEvaluationJobsPatchResponse = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsEvaluationJobsPatchResponse, _super);
    function DatalabelingProjectsEvaluationJobsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDatalabelingV1beta1EvaluationJob)
    ], DatalabelingProjectsEvaluationJobsPatchResponse.prototype, "googleCloudDatalabelingV1beta1EvaluationJob", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatalabelingProjectsEvaluationJobsPatchResponse.prototype, "statusCode", void 0);
    return DatalabelingProjectsEvaluationJobsPatchResponse;
}(SpeakeasyBase));
export { DatalabelingProjectsEvaluationJobsPatchResponse };
