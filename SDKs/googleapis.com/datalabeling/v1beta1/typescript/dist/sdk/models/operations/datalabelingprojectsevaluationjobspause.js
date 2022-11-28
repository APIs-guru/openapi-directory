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
var DatalabelingProjectsEvaluationJobsPausePathParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsEvaluationJobsPausePathParams, _super);
    function DatalabelingProjectsEvaluationJobsPausePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPausePathParams.prototype, "name", void 0);
    return DatalabelingProjectsEvaluationJobsPausePathParams;
}(SpeakeasyBase));
export { DatalabelingProjectsEvaluationJobsPausePathParams };
var DatalabelingProjectsEvaluationJobsPauseQueryParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsEvaluationJobsPauseQueryParams, _super);
    function DatalabelingProjectsEvaluationJobsPauseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPauseQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPauseQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPauseQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPauseQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPauseQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPauseQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPauseQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatalabelingProjectsEvaluationJobsPauseQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPauseQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPauseQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPauseQueryParams.prototype, "uploadProtocol", void 0);
    return DatalabelingProjectsEvaluationJobsPauseQueryParams;
}(SpeakeasyBase));
export { DatalabelingProjectsEvaluationJobsPauseQueryParams };
var DatalabelingProjectsEvaluationJobsPauseSecurity = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsEvaluationJobsPauseSecurity, _super);
    function DatalabelingProjectsEvaluationJobsPauseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatalabelingProjectsEvaluationJobsPauseSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatalabelingProjectsEvaluationJobsPauseSecurity.prototype, "oauth2c", void 0);
    return DatalabelingProjectsEvaluationJobsPauseSecurity;
}(SpeakeasyBase));
export { DatalabelingProjectsEvaluationJobsPauseSecurity };
var DatalabelingProjectsEvaluationJobsPauseRequest = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsEvaluationJobsPauseRequest, _super);
    function DatalabelingProjectsEvaluationJobsPauseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsEvaluationJobsPausePathParams)
    ], DatalabelingProjectsEvaluationJobsPauseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsEvaluationJobsPauseQueryParams)
    ], DatalabelingProjectsEvaluationJobsPauseRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DatalabelingProjectsEvaluationJobsPauseRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsEvaluationJobsPauseSecurity)
    ], DatalabelingProjectsEvaluationJobsPauseRequest.prototype, "security", void 0);
    return DatalabelingProjectsEvaluationJobsPauseRequest;
}(SpeakeasyBase));
export { DatalabelingProjectsEvaluationJobsPauseRequest };
var DatalabelingProjectsEvaluationJobsPauseResponse = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsEvaluationJobsPauseResponse, _super);
    function DatalabelingProjectsEvaluationJobsPauseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatalabelingProjectsEvaluationJobsPauseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DatalabelingProjectsEvaluationJobsPauseResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatalabelingProjectsEvaluationJobsPauseResponse.prototype, "statusCode", void 0);
    return DatalabelingProjectsEvaluationJobsPauseResponse;
}(SpeakeasyBase));
export { DatalabelingProjectsEvaluationJobsPauseResponse };
