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
var PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorPathParams = /** @class */ (function (_super) {
    __extends(PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorPathParams, _super);
    function PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topic" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorPathParams.prototype, "topic", void 0);
    return PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorPathParams;
}(SpeakeasyBase));
export { PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorPathParams };
var PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams = /** @class */ (function (_super) {
    __extends(PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams, _super);
    function PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams;
}(SpeakeasyBase));
export { PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams };
var PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorSecurity = /** @class */ (function (_super) {
    __extends(PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorSecurity, _super);
    function PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorSecurity.prototype, "oauth2c", void 0);
    return PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorSecurity;
}(SpeakeasyBase));
export { PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorSecurity };
var PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorRequest = /** @class */ (function (_super) {
    __extends(PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorRequest, _super);
    function PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorPathParams)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ComputeTimeCursorRequest)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorSecurity)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorRequest.prototype, "security", void 0);
    return PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorRequest;
}(SpeakeasyBase));
export { PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorRequest };
var PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse = /** @class */ (function (_super) {
    __extends(PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse, _super);
    function PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ComputeTimeCursorResponse)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse.prototype, "computeTimeCursorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse.prototype, "statusCode", void 0);
    return PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse;
}(SpeakeasyBase));
export { PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse };
