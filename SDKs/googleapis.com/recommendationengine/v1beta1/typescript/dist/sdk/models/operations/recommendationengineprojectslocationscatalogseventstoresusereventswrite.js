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
var RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWritePathParams = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWritePathParams, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWritePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWritePathParams.prototype, "parent", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWritePathParams;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWritePathParams };
var RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams.prototype, "uploadProtocol", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams };
var RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity.prototype, "oauth2c", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity };
var RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWritePathParams)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRecommendationengineV1beta1UserEvent)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest.prototype, "security", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest };
var RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecommendationengineV1beta1UserEvent)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse.prototype, "googleCloudRecommendationengineV1beta1UserEvent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse.prototype, "statusCode", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse };
