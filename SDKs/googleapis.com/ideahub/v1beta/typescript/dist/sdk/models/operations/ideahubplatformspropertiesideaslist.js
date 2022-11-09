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
var IdeahubPlatformsPropertiesIdeasListPathParams = /** @class */ (function (_super) {
    __extends(IdeahubPlatformsPropertiesIdeasListPathParams, _super);
    function IdeahubPlatformsPropertiesIdeasListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeasListPathParams.prototype, "parent", void 0);
    return IdeahubPlatformsPropertiesIdeasListPathParams;
}(SpeakeasyBase));
export { IdeahubPlatformsPropertiesIdeasListPathParams };
var IdeahubPlatformsPropertiesIdeasListQueryParams = /** @class */ (function (_super) {
    __extends(IdeahubPlatformsPropertiesIdeasListQueryParams, _super);
    function IdeahubPlatformsPropertiesIdeasListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeasListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeasListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeasListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeasListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeasListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeasListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeasListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeasListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeasListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], IdeahubPlatformsPropertiesIdeasListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeasListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdeahubPlatformsPropertiesIdeasListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeasListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeasListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeasListQueryParams.prototype, "uploadProtocol", void 0);
    return IdeahubPlatformsPropertiesIdeasListQueryParams;
}(SpeakeasyBase));
export { IdeahubPlatformsPropertiesIdeasListQueryParams };
var IdeahubPlatformsPropertiesIdeasListRequest = /** @class */ (function (_super) {
    __extends(IdeahubPlatformsPropertiesIdeasListRequest, _super);
    function IdeahubPlatformsPropertiesIdeasListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IdeahubPlatformsPropertiesIdeasListPathParams)
    ], IdeahubPlatformsPropertiesIdeasListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdeahubPlatformsPropertiesIdeasListQueryParams)
    ], IdeahubPlatformsPropertiesIdeasListRequest.prototype, "queryParams", void 0);
    return IdeahubPlatformsPropertiesIdeasListRequest;
}(SpeakeasyBase));
export { IdeahubPlatformsPropertiesIdeasListRequest };
var IdeahubPlatformsPropertiesIdeasListResponse = /** @class */ (function (_super) {
    __extends(IdeahubPlatformsPropertiesIdeasListResponse, _super);
    function IdeahubPlatformsPropertiesIdeasListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IdeahubPlatformsPropertiesIdeasListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleSearchIdeahubV1betaListIdeasResponse)
    ], IdeahubPlatformsPropertiesIdeasListResponse.prototype, "googleSearchIdeahubV1betaListIdeasResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IdeahubPlatformsPropertiesIdeasListResponse.prototype, "statusCode", void 0);
    return IdeahubPlatformsPropertiesIdeasListResponse;
}(SpeakeasyBase));
export { IdeahubPlatformsPropertiesIdeasListResponse };
