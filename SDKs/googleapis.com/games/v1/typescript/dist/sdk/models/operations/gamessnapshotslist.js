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
var GamesSnapshotsListPathParams = /** @class */ (function (_super) {
    __extends(GamesSnapshotsListPathParams, _super);
    function GamesSnapshotsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerId" }),
        __metadata("design:type", String)
    ], GamesSnapshotsListPathParams.prototype, "playerId", void 0);
    return GamesSnapshotsListPathParams;
}(SpeakeasyBase));
export { GamesSnapshotsListPathParams };
var GamesSnapshotsListQueryParams = /** @class */ (function (_super) {
    __extends(GamesSnapshotsListQueryParams, _super);
    function GamesSnapshotsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesSnapshotsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesSnapshotsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesSnapshotsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesSnapshotsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesSnapshotsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesSnapshotsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GamesSnapshotsListQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GamesSnapshotsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesSnapshotsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GamesSnapshotsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesSnapshotsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesSnapshotsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesSnapshotsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesSnapshotsListQueryParams.prototype, "uploadProtocol", void 0);
    return GamesSnapshotsListQueryParams;
}(SpeakeasyBase));
export { GamesSnapshotsListQueryParams };
var GamesSnapshotsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(GamesSnapshotsListSecurityOption1, _super);
    function GamesSnapshotsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesSnapshotsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesSnapshotsListSecurityOption1.prototype, "oauth2c", void 0);
    return GamesSnapshotsListSecurityOption1;
}(SpeakeasyBase));
export { GamesSnapshotsListSecurityOption1 };
var GamesSnapshotsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(GamesSnapshotsListSecurityOption2, _super);
    function GamesSnapshotsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesSnapshotsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesSnapshotsListSecurityOption2.prototype, "oauth2c", void 0);
    return GamesSnapshotsListSecurityOption2;
}(SpeakeasyBase));
export { GamesSnapshotsListSecurityOption2 };
var GamesSnapshotsListSecurity = /** @class */ (function (_super) {
    __extends(GamesSnapshotsListSecurity, _super);
    function GamesSnapshotsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GamesSnapshotsListSecurityOption1)
    ], GamesSnapshotsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GamesSnapshotsListSecurityOption2)
    ], GamesSnapshotsListSecurity.prototype, "option2", void 0);
    return GamesSnapshotsListSecurity;
}(SpeakeasyBase));
export { GamesSnapshotsListSecurity };
var GamesSnapshotsListRequest = /** @class */ (function (_super) {
    __extends(GamesSnapshotsListRequest, _super);
    function GamesSnapshotsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesSnapshotsListPathParams)
    ], GamesSnapshotsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesSnapshotsListQueryParams)
    ], GamesSnapshotsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesSnapshotsListSecurity)
    ], GamesSnapshotsListRequest.prototype, "security", void 0);
    return GamesSnapshotsListRequest;
}(SpeakeasyBase));
export { GamesSnapshotsListRequest };
var GamesSnapshotsListResponse = /** @class */ (function (_super) {
    __extends(GamesSnapshotsListResponse, _super);
    function GamesSnapshotsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesSnapshotsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SnapshotListResponse)
    ], GamesSnapshotsListResponse.prototype, "snapshotListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesSnapshotsListResponse.prototype, "statusCode", void 0);
    return GamesSnapshotsListResponse;
}(SpeakeasyBase));
export { GamesSnapshotsListResponse };
