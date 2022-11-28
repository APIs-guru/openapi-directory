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
var GamesAchievementsSetStepsAtLeastPathParams = /** @class */ (function (_super) {
    __extends(GamesAchievementsSetStepsAtLeastPathParams, _super);
    function GamesAchievementsSetStepsAtLeastPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=achievementId" }),
        __metadata("design:type", String)
    ], GamesAchievementsSetStepsAtLeastPathParams.prototype, "achievementId", void 0);
    return GamesAchievementsSetStepsAtLeastPathParams;
}(SpeakeasyBase));
export { GamesAchievementsSetStepsAtLeastPathParams };
var GamesAchievementsSetStepsAtLeastQueryParams = /** @class */ (function (_super) {
    __extends(GamesAchievementsSetStepsAtLeastQueryParams, _super);
    function GamesAchievementsSetStepsAtLeastQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesAchievementsSetStepsAtLeastQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesAchievementsSetStepsAtLeastQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesAchievementsSetStepsAtLeastQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesAchievementsSetStepsAtLeastQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesAchievementsSetStepsAtLeastQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesAchievementsSetStepsAtLeastQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesAchievementsSetStepsAtLeastQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesAchievementsSetStepsAtLeastQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesAchievementsSetStepsAtLeastQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=steps" }),
        __metadata("design:type", Number)
    ], GamesAchievementsSetStepsAtLeastQueryParams.prototype, "steps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesAchievementsSetStepsAtLeastQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesAchievementsSetStepsAtLeastQueryParams.prototype, "uploadProtocol", void 0);
    return GamesAchievementsSetStepsAtLeastQueryParams;
}(SpeakeasyBase));
export { GamesAchievementsSetStepsAtLeastQueryParams };
var GamesAchievementsSetStepsAtLeastSecurity = /** @class */ (function (_super) {
    __extends(GamesAchievementsSetStepsAtLeastSecurity, _super);
    function GamesAchievementsSetStepsAtLeastSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesAchievementsSetStepsAtLeastSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesAchievementsSetStepsAtLeastSecurity.prototype, "oauth2c", void 0);
    return GamesAchievementsSetStepsAtLeastSecurity;
}(SpeakeasyBase));
export { GamesAchievementsSetStepsAtLeastSecurity };
var GamesAchievementsSetStepsAtLeastRequest = /** @class */ (function (_super) {
    __extends(GamesAchievementsSetStepsAtLeastRequest, _super);
    function GamesAchievementsSetStepsAtLeastRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesAchievementsSetStepsAtLeastPathParams)
    ], GamesAchievementsSetStepsAtLeastRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesAchievementsSetStepsAtLeastQueryParams)
    ], GamesAchievementsSetStepsAtLeastRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesAchievementsSetStepsAtLeastSecurity)
    ], GamesAchievementsSetStepsAtLeastRequest.prototype, "security", void 0);
    return GamesAchievementsSetStepsAtLeastRequest;
}(SpeakeasyBase));
export { GamesAchievementsSetStepsAtLeastRequest };
var GamesAchievementsSetStepsAtLeastResponse = /** @class */ (function (_super) {
    __extends(GamesAchievementsSetStepsAtLeastResponse, _super);
    function GamesAchievementsSetStepsAtLeastResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AchievementSetStepsAtLeastResponse)
    ], GamesAchievementsSetStepsAtLeastResponse.prototype, "achievementSetStepsAtLeastResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesAchievementsSetStepsAtLeastResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesAchievementsSetStepsAtLeastResponse.prototype, "statusCode", void 0);
    return GamesAchievementsSetStepsAtLeastResponse;
}(SpeakeasyBase));
export { GamesAchievementsSetStepsAtLeastResponse };
