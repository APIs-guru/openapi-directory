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
var RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinPathParams = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinPathParams, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinPathParams.prototype, "parent", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinPathParams;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinPathParams };
var RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams.prototype, "uploadProtocol", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams };
var RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity.prototype, "oauth2c", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity };
var RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinPathParams)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest.prototype, "security", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest };
var RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse.prototype, "statusCode", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse };
