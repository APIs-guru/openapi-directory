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
var RecommenderProjectsLocationsRecommendersUpdateConfigPathParams = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersUpdateConfigPathParams, _super);
    function RecommenderProjectsLocationsRecommendersUpdateConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigPathParams.prototype, "name", void 0);
    return RecommenderProjectsLocationsRecommendersUpdateConfigPathParams;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersUpdateConfigPathParams };
var RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams, _super);
    function RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams.prototype, "validateOnly", void 0);
    return RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams };
var RecommenderProjectsLocationsRecommendersUpdateConfigSecurity = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersUpdateConfigSecurity, _super);
    function RecommenderProjectsLocationsRecommendersUpdateConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigSecurity.prototype, "oauth2c", void 0);
    return RecommenderProjectsLocationsRecommendersUpdateConfigSecurity;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersUpdateConfigSecurity };
var RecommenderProjectsLocationsRecommendersUpdateConfigRequest = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersUpdateConfigRequest, _super);
    function RecommenderProjectsLocationsRecommendersUpdateConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsRecommendersUpdateConfigPathParams)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRecommenderV1RecommenderConfigInput)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsRecommendersUpdateConfigSecurity)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigRequest.prototype, "security", void 0);
    return RecommenderProjectsLocationsRecommendersUpdateConfigRequest;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersUpdateConfigRequest };
var RecommenderProjectsLocationsRecommendersUpdateConfigResponse = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersUpdateConfigResponse, _super);
    function RecommenderProjectsLocationsRecommendersUpdateConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecommenderV1RecommenderConfig)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigResponse.prototype, "googleCloudRecommenderV1RecommenderConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecommenderProjectsLocationsRecommendersUpdateConfigResponse.prototype, "statusCode", void 0);
    return RecommenderProjectsLocationsRecommendersUpdateConfigResponse;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersUpdateConfigResponse };
