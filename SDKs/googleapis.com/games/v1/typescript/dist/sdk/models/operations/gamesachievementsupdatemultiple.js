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
var GamesAchievementsUpdateMultipleQueryParams = /** @class */ (function (_super) {
    __extends(GamesAchievementsUpdateMultipleQueryParams, _super);
    function GamesAchievementsUpdateMultipleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesAchievementsUpdateMultipleQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesAchievementsUpdateMultipleQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesAchievementsUpdateMultipleQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesAchievementsUpdateMultipleQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesAchievementsUpdateMultipleQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesAchievementsUpdateMultipleQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesAchievementsUpdateMultipleQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesAchievementsUpdateMultipleQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesAchievementsUpdateMultipleQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesAchievementsUpdateMultipleQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesAchievementsUpdateMultipleQueryParams.prototype, "uploadProtocol", void 0);
    return GamesAchievementsUpdateMultipleQueryParams;
}(SpeakeasyBase));
export { GamesAchievementsUpdateMultipleQueryParams };
var GamesAchievementsUpdateMultipleSecurity = /** @class */ (function (_super) {
    __extends(GamesAchievementsUpdateMultipleSecurity, _super);
    function GamesAchievementsUpdateMultipleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesAchievementsUpdateMultipleSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesAchievementsUpdateMultipleSecurity.prototype, "oauth2c", void 0);
    return GamesAchievementsUpdateMultipleSecurity;
}(SpeakeasyBase));
export { GamesAchievementsUpdateMultipleSecurity };
var GamesAchievementsUpdateMultipleRequest = /** @class */ (function (_super) {
    __extends(GamesAchievementsUpdateMultipleRequest, _super);
    function GamesAchievementsUpdateMultipleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesAchievementsUpdateMultipleQueryParams)
    ], GamesAchievementsUpdateMultipleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AchievementUpdateMultipleRequest)
    ], GamesAchievementsUpdateMultipleRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesAchievementsUpdateMultipleSecurity)
    ], GamesAchievementsUpdateMultipleRequest.prototype, "security", void 0);
    return GamesAchievementsUpdateMultipleRequest;
}(SpeakeasyBase));
export { GamesAchievementsUpdateMultipleRequest };
var GamesAchievementsUpdateMultipleResponse = /** @class */ (function (_super) {
    __extends(GamesAchievementsUpdateMultipleResponse, _super);
    function GamesAchievementsUpdateMultipleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AchievementUpdateMultipleResponse)
    ], GamesAchievementsUpdateMultipleResponse.prototype, "achievementUpdateMultipleResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesAchievementsUpdateMultipleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesAchievementsUpdateMultipleResponse.prototype, "statusCode", void 0);
    return GamesAchievementsUpdateMultipleResponse;
}(SpeakeasyBase));
export { GamesAchievementsUpdateMultipleResponse };
