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
var MybusinessqandaLocationsQuestionsCreatePathParams = /** @class */ (function (_super) {
    __extends(MybusinessqandaLocationsQuestionsCreatePathParams, _super);
    function MybusinessqandaLocationsQuestionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsCreatePathParams.prototype, "parent", void 0);
    return MybusinessqandaLocationsQuestionsCreatePathParams;
}(SpeakeasyBase));
export { MybusinessqandaLocationsQuestionsCreatePathParams };
var MybusinessqandaLocationsQuestionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessqandaLocationsQuestionsCreateQueryParams, _super);
    function MybusinessqandaLocationsQuestionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessqandaLocationsQuestionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessqandaLocationsQuestionsCreateQueryParams;
}(SpeakeasyBase));
export { MybusinessqandaLocationsQuestionsCreateQueryParams };
var MybusinessqandaLocationsQuestionsCreateRequest = /** @class */ (function (_super) {
    __extends(MybusinessqandaLocationsQuestionsCreateRequest, _super);
    function MybusinessqandaLocationsQuestionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessqandaLocationsQuestionsCreatePathParams)
    ], MybusinessqandaLocationsQuestionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessqandaLocationsQuestionsCreateQueryParams)
    ], MybusinessqandaLocationsQuestionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.QuestionInput)
    ], MybusinessqandaLocationsQuestionsCreateRequest.prototype, "request", void 0);
    return MybusinessqandaLocationsQuestionsCreateRequest;
}(SpeakeasyBase));
export { MybusinessqandaLocationsQuestionsCreateRequest };
var MybusinessqandaLocationsQuestionsCreateResponse = /** @class */ (function (_super) {
    __extends(MybusinessqandaLocationsQuestionsCreateResponse, _super);
    function MybusinessqandaLocationsQuestionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Question)
    ], MybusinessqandaLocationsQuestionsCreateResponse.prototype, "question", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessqandaLocationsQuestionsCreateResponse.prototype, "statusCode", void 0);
    return MybusinessqandaLocationsQuestionsCreateResponse;
}(SpeakeasyBase));
export { MybusinessqandaLocationsQuestionsCreateResponse };
