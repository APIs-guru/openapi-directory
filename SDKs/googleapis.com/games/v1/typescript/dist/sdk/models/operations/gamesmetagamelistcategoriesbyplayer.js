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
export var GamesMetagameListCategoriesByPlayerCollectionEnum;
(function (GamesMetagameListCategoriesByPlayerCollectionEnum) {
    GamesMetagameListCategoriesByPlayerCollectionEnum["CollectionUnspecified"] = "COLLECTION_UNSPECIFIED";
    GamesMetagameListCategoriesByPlayerCollectionEnum["All"] = "ALL";
})(GamesMetagameListCategoriesByPlayerCollectionEnum || (GamesMetagameListCategoriesByPlayerCollectionEnum = {}));
var GamesMetagameListCategoriesByPlayerPathParams = /** @class */ (function (_super) {
    __extends(GamesMetagameListCategoriesByPlayerPathParams, _super);
    function GamesMetagameListCategoriesByPlayerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection" }),
        __metadata("design:type", String)
    ], GamesMetagameListCategoriesByPlayerPathParams.prototype, "collection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerId" }),
        __metadata("design:type", String)
    ], GamesMetagameListCategoriesByPlayerPathParams.prototype, "playerId", void 0);
    return GamesMetagameListCategoriesByPlayerPathParams;
}(SpeakeasyBase));
export { GamesMetagameListCategoriesByPlayerPathParams };
var GamesMetagameListCategoriesByPlayerQueryParams = /** @class */ (function (_super) {
    __extends(GamesMetagameListCategoriesByPlayerQueryParams, _super);
    function GamesMetagameListCategoriesByPlayerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesMetagameListCategoriesByPlayerQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesMetagameListCategoriesByPlayerQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesMetagameListCategoriesByPlayerQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesMetagameListCategoriesByPlayerQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesMetagameListCategoriesByPlayerQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesMetagameListCategoriesByPlayerQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GamesMetagameListCategoriesByPlayerQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GamesMetagameListCategoriesByPlayerQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesMetagameListCategoriesByPlayerQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GamesMetagameListCategoriesByPlayerQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesMetagameListCategoriesByPlayerQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesMetagameListCategoriesByPlayerQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesMetagameListCategoriesByPlayerQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesMetagameListCategoriesByPlayerQueryParams.prototype, "uploadProtocol", void 0);
    return GamesMetagameListCategoriesByPlayerQueryParams;
}(SpeakeasyBase));
export { GamesMetagameListCategoriesByPlayerQueryParams };
var GamesMetagameListCategoriesByPlayerSecurity = /** @class */ (function (_super) {
    __extends(GamesMetagameListCategoriesByPlayerSecurity, _super);
    function GamesMetagameListCategoriesByPlayerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesMetagameListCategoriesByPlayerSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesMetagameListCategoriesByPlayerSecurity.prototype, "oauth2c", void 0);
    return GamesMetagameListCategoriesByPlayerSecurity;
}(SpeakeasyBase));
export { GamesMetagameListCategoriesByPlayerSecurity };
var GamesMetagameListCategoriesByPlayerRequest = /** @class */ (function (_super) {
    __extends(GamesMetagameListCategoriesByPlayerRequest, _super);
    function GamesMetagameListCategoriesByPlayerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesMetagameListCategoriesByPlayerPathParams)
    ], GamesMetagameListCategoriesByPlayerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesMetagameListCategoriesByPlayerQueryParams)
    ], GamesMetagameListCategoriesByPlayerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesMetagameListCategoriesByPlayerSecurity)
    ], GamesMetagameListCategoriesByPlayerRequest.prototype, "security", void 0);
    return GamesMetagameListCategoriesByPlayerRequest;
}(SpeakeasyBase));
export { GamesMetagameListCategoriesByPlayerRequest };
var GamesMetagameListCategoriesByPlayerResponse = /** @class */ (function (_super) {
    __extends(GamesMetagameListCategoriesByPlayerResponse, _super);
    function GamesMetagameListCategoriesByPlayerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CategoryListResponse)
    ], GamesMetagameListCategoriesByPlayerResponse.prototype, "categoryListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesMetagameListCategoriesByPlayerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesMetagameListCategoriesByPlayerResponse.prototype, "statusCode", void 0);
    return GamesMetagameListCategoriesByPlayerResponse;
}(SpeakeasyBase));
export { GamesMetagameListCategoriesByPlayerResponse };
