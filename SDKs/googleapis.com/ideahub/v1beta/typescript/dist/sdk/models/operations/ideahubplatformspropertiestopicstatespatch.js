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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var IdeahubPlatformsPropertiesTopicStatesPatchPathParams = /** @class */ (function (_super) {
    __extends(IdeahubPlatformsPropertiesTopicStatesPatchPathParams, _super);
    function IdeahubPlatformsPropertiesTopicStatesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesTopicStatesPatchPathParams.prototype, "name", void 0);
    return IdeahubPlatformsPropertiesTopicStatesPatchPathParams;
}(SpeakeasyBase));
export { IdeahubPlatformsPropertiesTopicStatesPatchPathParams };
var IdeahubPlatformsPropertiesTopicStatesPatchQueryParams = /** @class */ (function (_super) {
    __extends(IdeahubPlatformsPropertiesTopicStatesPatchQueryParams, _super);
    function IdeahubPlatformsPropertiesTopicStatesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesTopicStatesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesTopicStatesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesTopicStatesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesTopicStatesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesTopicStatesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesTopicStatesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesTopicStatesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdeahubPlatformsPropertiesTopicStatesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesTopicStatesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesTopicStatesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesTopicStatesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesTopicStatesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return IdeahubPlatformsPropertiesTopicStatesPatchQueryParams;
}(SpeakeasyBase));
export { IdeahubPlatformsPropertiesTopicStatesPatchQueryParams };
var IdeahubPlatformsPropertiesTopicStatesPatchRequest = /** @class */ (function (_super) {
    __extends(IdeahubPlatformsPropertiesTopicStatesPatchRequest, _super);
    function IdeahubPlatformsPropertiesTopicStatesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IdeahubPlatformsPropertiesTopicStatesPatchPathParams)
    ], IdeahubPlatformsPropertiesTopicStatesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdeahubPlatformsPropertiesTopicStatesPatchQueryParams)
    ], IdeahubPlatformsPropertiesTopicStatesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleSearchIdeahubV1betaTopicState)
    ], IdeahubPlatformsPropertiesTopicStatesPatchRequest.prototype, "request", void 0);
    return IdeahubPlatformsPropertiesTopicStatesPatchRequest;
}(SpeakeasyBase));
export { IdeahubPlatformsPropertiesTopicStatesPatchRequest };
var IdeahubPlatformsPropertiesTopicStatesPatchResponse = /** @class */ (function (_super) {
    __extends(IdeahubPlatformsPropertiesTopicStatesPatchResponse, _super);
    function IdeahubPlatformsPropertiesTopicStatesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesTopicStatesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleSearchIdeahubV1betaTopicState)
    ], IdeahubPlatformsPropertiesTopicStatesPatchResponse.prototype, "googleSearchIdeahubV1betaTopicState", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IdeahubPlatformsPropertiesTopicStatesPatchResponse.prototype, "statusCode", void 0);
    return IdeahubPlatformsPropertiesTopicStatesPatchResponse;
}(SpeakeasyBase));
export { IdeahubPlatformsPropertiesTopicStatesPatchResponse };
