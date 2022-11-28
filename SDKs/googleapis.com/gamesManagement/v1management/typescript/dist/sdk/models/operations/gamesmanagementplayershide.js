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
var GamesManagementPlayersHidePathParams = /** @class */ (function (_super) {
    __extends(GamesManagementPlayersHidePathParams, _super);
    function GamesManagementPlayersHidePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationId" }),
        __metadata("design:type", String)
    ], GamesManagementPlayersHidePathParams.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerId" }),
        __metadata("design:type", String)
    ], GamesManagementPlayersHidePathParams.prototype, "playerId", void 0);
    return GamesManagementPlayersHidePathParams;
}(SpeakeasyBase));
export { GamesManagementPlayersHidePathParams };
var GamesManagementPlayersHideQueryParams = /** @class */ (function (_super) {
    __extends(GamesManagementPlayersHideQueryParams, _super);
    function GamesManagementPlayersHideQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesManagementPlayersHideQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesManagementPlayersHideQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesManagementPlayersHideQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesManagementPlayersHideQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesManagementPlayersHideQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesManagementPlayersHideQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesManagementPlayersHideQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesManagementPlayersHideQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesManagementPlayersHideQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesManagementPlayersHideQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesManagementPlayersHideQueryParams.prototype, "uploadProtocol", void 0);
    return GamesManagementPlayersHideQueryParams;
}(SpeakeasyBase));
export { GamesManagementPlayersHideQueryParams };
var GamesManagementPlayersHideSecurity = /** @class */ (function (_super) {
    __extends(GamesManagementPlayersHideSecurity, _super);
    function GamesManagementPlayersHideSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesManagementPlayersHideSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesManagementPlayersHideSecurity.prototype, "oauth2c", void 0);
    return GamesManagementPlayersHideSecurity;
}(SpeakeasyBase));
export { GamesManagementPlayersHideSecurity };
var GamesManagementPlayersHideRequest = /** @class */ (function (_super) {
    __extends(GamesManagementPlayersHideRequest, _super);
    function GamesManagementPlayersHideRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesManagementPlayersHidePathParams)
    ], GamesManagementPlayersHideRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesManagementPlayersHideQueryParams)
    ], GamesManagementPlayersHideRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesManagementPlayersHideSecurity)
    ], GamesManagementPlayersHideRequest.prototype, "security", void 0);
    return GamesManagementPlayersHideRequest;
}(SpeakeasyBase));
export { GamesManagementPlayersHideRequest };
var GamesManagementPlayersHideResponse = /** @class */ (function (_super) {
    __extends(GamesManagementPlayersHideResponse, _super);
    function GamesManagementPlayersHideResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesManagementPlayersHideResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesManagementPlayersHideResponse.prototype, "statusCode", void 0);
    return GamesManagementPlayersHideResponse;
}(SpeakeasyBase));
export { GamesManagementPlayersHideResponse };
