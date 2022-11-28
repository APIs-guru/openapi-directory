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
var IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams = /** @class */ (function (_super) {
    __extends(IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams, _super);
    function IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams.prototype, "parent", void 0);
    return IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams;
}(SpeakeasyBase));
export { IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams };
var IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams = /** @class */ (function (_super) {
    __extends(IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams, _super);
    function IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams;
}(SpeakeasyBase));
export { IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams };
var IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest = /** @class */ (function (_super) {
    __extends(IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest, _super);
    function IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleSearchIdeahubV1betaIdeaActivity)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest.prototype, "request", void 0);
    return IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest;
}(SpeakeasyBase));
export { IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest };
var IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse = /** @class */ (function (_super) {
    __extends(IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse, _super);
    function IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleSearchIdeahubV1betaIdeaActivity)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse.prototype, "googleSearchIdeahubV1betaIdeaActivity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse.prototype, "statusCode", void 0);
    return IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse;
}(SpeakeasyBase));
export { IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse };
