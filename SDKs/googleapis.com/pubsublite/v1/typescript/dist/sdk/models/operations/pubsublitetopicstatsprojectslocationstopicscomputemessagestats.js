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
var PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsPathParams = /** @class */ (function (_super) {
    __extends(PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsPathParams, _super);
    function PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topic" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsPathParams.prototype, "topic", void 0);
    return PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsPathParams;
}(SpeakeasyBase));
export { PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsPathParams };
var PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams = /** @class */ (function (_super) {
    __extends(PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams, _super);
    function PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams;
}(SpeakeasyBase));
export { PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams };
var PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsSecurity = /** @class */ (function (_super) {
    __extends(PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsSecurity, _super);
    function PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsSecurity.prototype, "oauth2c", void 0);
    return PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsSecurity;
}(SpeakeasyBase));
export { PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsSecurity };
var PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsRequest = /** @class */ (function (_super) {
    __extends(PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsRequest, _super);
    function PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsPathParams)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ComputeMessageStatsRequest)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsSecurity)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsRequest.prototype, "security", void 0);
    return PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsRequest;
}(SpeakeasyBase));
export { PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsRequest };
var PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse = /** @class */ (function (_super) {
    __extends(PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse, _super);
    function PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ComputeMessageStatsResponse)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse.prototype, "computeMessageStatsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse.prototype, "statusCode", void 0);
    return PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse;
}(SpeakeasyBase));
export { PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse };
