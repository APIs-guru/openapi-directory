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
var MybusinessqandaLocationsQuestionsAnswersDeletePathParams = /** @class */ (function (_super) {
    __extends(MybusinessqandaLocationsQuestionsAnswersDeletePathParams, _super);
    function MybusinessqandaLocationsQuestionsAnswersDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersDeletePathParams.prototype, "name", void 0);
    return MybusinessqandaLocationsQuestionsAnswersDeletePathParams;
}(SpeakeasyBase));
export { MybusinessqandaLocationsQuestionsAnswersDeletePathParams };
var MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams, _super);
    function MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams;
}(SpeakeasyBase));
export { MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams };
var MybusinessqandaLocationsQuestionsAnswersDeleteRequest = /** @class */ (function (_super) {
    __extends(MybusinessqandaLocationsQuestionsAnswersDeleteRequest, _super);
    function MybusinessqandaLocationsQuestionsAnswersDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessqandaLocationsQuestionsAnswersDeletePathParams)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteRequest.prototype, "queryParams", void 0);
    return MybusinessqandaLocationsQuestionsAnswersDeleteRequest;
}(SpeakeasyBase));
export { MybusinessqandaLocationsQuestionsAnswersDeleteRequest };
var MybusinessqandaLocationsQuestionsAnswersDeleteResponse = /** @class */ (function (_super) {
    __extends(MybusinessqandaLocationsQuestionsAnswersDeleteResponse, _super);
    function MybusinessqandaLocationsQuestionsAnswersDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessqandaLocationsQuestionsAnswersDeleteResponse.prototype, "statusCode", void 0);
    return MybusinessqandaLocationsQuestionsAnswersDeleteResponse;
}(SpeakeasyBase));
export { MybusinessqandaLocationsQuestionsAnswersDeleteResponse };
