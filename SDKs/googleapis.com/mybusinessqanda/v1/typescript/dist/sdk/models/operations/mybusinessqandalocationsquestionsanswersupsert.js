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
var MybusinessqandaLocationsQuestionsAnswersUpsertPathParams = /** @class */ (function (_super) {
    __extends(MybusinessqandaLocationsQuestionsAnswersUpsertPathParams, _super);
    function MybusinessqandaLocationsQuestionsAnswersUpsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertPathParams.prototype, "parent", void 0);
    return MybusinessqandaLocationsQuestionsAnswersUpsertPathParams;
}(SpeakeasyBase));
export { MybusinessqandaLocationsQuestionsAnswersUpsertPathParams };
var MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams, _super);
    function MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams;
}(SpeakeasyBase));
export { MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams };
var MybusinessqandaLocationsQuestionsAnswersUpsertRequest = /** @class */ (function (_super) {
    __extends(MybusinessqandaLocationsQuestionsAnswersUpsertRequest, _super);
    function MybusinessqandaLocationsQuestionsAnswersUpsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessqandaLocationsQuestionsAnswersUpsertPathParams)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpsertAnswerRequestInput)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertRequest.prototype, "request", void 0);
    return MybusinessqandaLocationsQuestionsAnswersUpsertRequest;
}(SpeakeasyBase));
export { MybusinessqandaLocationsQuestionsAnswersUpsertRequest };
var MybusinessqandaLocationsQuestionsAnswersUpsertResponse = /** @class */ (function (_super) {
    __extends(MybusinessqandaLocationsQuestionsAnswersUpsertResponse, _super);
    function MybusinessqandaLocationsQuestionsAnswersUpsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Answer)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertResponse.prototype, "answer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessqandaLocationsQuestionsAnswersUpsertResponse.prototype, "statusCode", void 0);
    return MybusinessqandaLocationsQuestionsAnswersUpsertResponse;
}(SpeakeasyBase));
export { MybusinessqandaLocationsQuestionsAnswersUpsertResponse };
