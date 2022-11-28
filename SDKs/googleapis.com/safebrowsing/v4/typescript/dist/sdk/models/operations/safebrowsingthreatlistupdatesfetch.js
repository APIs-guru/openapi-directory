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
var SafebrowsingThreatListUpdatesFetchQueryParams = /** @class */ (function (_super) {
    __extends(SafebrowsingThreatListUpdatesFetchQueryParams, _super);
    function SafebrowsingThreatListUpdatesFetchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SafebrowsingThreatListUpdatesFetchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SafebrowsingThreatListUpdatesFetchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SafebrowsingThreatListUpdatesFetchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SafebrowsingThreatListUpdatesFetchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SafebrowsingThreatListUpdatesFetchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SafebrowsingThreatListUpdatesFetchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SafebrowsingThreatListUpdatesFetchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SafebrowsingThreatListUpdatesFetchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SafebrowsingThreatListUpdatesFetchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SafebrowsingThreatListUpdatesFetchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SafebrowsingThreatListUpdatesFetchQueryParams.prototype, "uploadProtocol", void 0);
    return SafebrowsingThreatListUpdatesFetchQueryParams;
}(SpeakeasyBase));
export { SafebrowsingThreatListUpdatesFetchQueryParams };
var SafebrowsingThreatListUpdatesFetchRequest = /** @class */ (function (_super) {
    __extends(SafebrowsingThreatListUpdatesFetchRequest, _super);
    function SafebrowsingThreatListUpdatesFetchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SafebrowsingThreatListUpdatesFetchQueryParams)
    ], SafebrowsingThreatListUpdatesFetchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest)
    ], SafebrowsingThreatListUpdatesFetchRequest.prototype, "request", void 0);
    return SafebrowsingThreatListUpdatesFetchRequest;
}(SpeakeasyBase));
export { SafebrowsingThreatListUpdatesFetchRequest };
var SafebrowsingThreatListUpdatesFetchResponse = /** @class */ (function (_super) {
    __extends(SafebrowsingThreatListUpdatesFetchResponse, _super);
    function SafebrowsingThreatListUpdatesFetchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SafebrowsingThreatListUpdatesFetchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse)
    ], SafebrowsingThreatListUpdatesFetchResponse.prototype, "googleSecuritySafebrowsingV4FetchThreatListUpdatesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SafebrowsingThreatListUpdatesFetchResponse.prototype, "statusCode", void 0);
    return SafebrowsingThreatListUpdatesFetchResponse;
}(SpeakeasyBase));
export { SafebrowsingThreatListUpdatesFetchResponse };
