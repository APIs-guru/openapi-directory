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
var GamesAchievementsUnlockPathParams = /** @class */ (function (_super) {
    __extends(GamesAchievementsUnlockPathParams, _super);
    function GamesAchievementsUnlockPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=achievementId" }),
        __metadata("design:type", String)
    ], GamesAchievementsUnlockPathParams.prototype, "achievementId", void 0);
    return GamesAchievementsUnlockPathParams;
}(SpeakeasyBase));
export { GamesAchievementsUnlockPathParams };
var GamesAchievementsUnlockQueryParams = /** @class */ (function (_super) {
    __extends(GamesAchievementsUnlockQueryParams, _super);
    function GamesAchievementsUnlockQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesAchievementsUnlockQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesAchievementsUnlockQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesAchievementsUnlockQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesAchievementsUnlockQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesAchievementsUnlockQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesAchievementsUnlockQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesAchievementsUnlockQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesAchievementsUnlockQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesAchievementsUnlockQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesAchievementsUnlockQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesAchievementsUnlockQueryParams.prototype, "uploadProtocol", void 0);
    return GamesAchievementsUnlockQueryParams;
}(SpeakeasyBase));
export { GamesAchievementsUnlockQueryParams };
var GamesAchievementsUnlockSecurity = /** @class */ (function (_super) {
    __extends(GamesAchievementsUnlockSecurity, _super);
    function GamesAchievementsUnlockSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesAchievementsUnlockSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesAchievementsUnlockSecurity.prototype, "oauth2c", void 0);
    return GamesAchievementsUnlockSecurity;
}(SpeakeasyBase));
export { GamesAchievementsUnlockSecurity };
var GamesAchievementsUnlockRequest = /** @class */ (function (_super) {
    __extends(GamesAchievementsUnlockRequest, _super);
    function GamesAchievementsUnlockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesAchievementsUnlockPathParams)
    ], GamesAchievementsUnlockRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesAchievementsUnlockQueryParams)
    ], GamesAchievementsUnlockRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesAchievementsUnlockSecurity)
    ], GamesAchievementsUnlockRequest.prototype, "security", void 0);
    return GamesAchievementsUnlockRequest;
}(SpeakeasyBase));
export { GamesAchievementsUnlockRequest };
var GamesAchievementsUnlockResponse = /** @class */ (function (_super) {
    __extends(GamesAchievementsUnlockResponse, _super);
    function GamesAchievementsUnlockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AchievementUnlockResponse)
    ], GamesAchievementsUnlockResponse.prototype, "achievementUnlockResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesAchievementsUnlockResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesAchievementsUnlockResponse.prototype, "statusCode", void 0);
    return GamesAchievementsUnlockResponse;
}(SpeakeasyBase));
export { GamesAchievementsUnlockResponse };
