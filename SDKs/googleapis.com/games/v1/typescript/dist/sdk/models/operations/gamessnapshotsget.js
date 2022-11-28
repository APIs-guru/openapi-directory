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
var GamesSnapshotsGetPathParams = /** @class */ (function (_super) {
    __extends(GamesSnapshotsGetPathParams, _super);
    function GamesSnapshotsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=snapshotId" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetPathParams.prototype, "snapshotId", void 0);
    return GamesSnapshotsGetPathParams;
}(SpeakeasyBase));
export { GamesSnapshotsGetPathParams };
var GamesSnapshotsGetQueryParams = /** @class */ (function (_super) {
    __extends(GamesSnapshotsGetQueryParams, _super);
    function GamesSnapshotsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesSnapshotsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesSnapshotsGetQueryParams.prototype, "uploadProtocol", void 0);
    return GamesSnapshotsGetQueryParams;
}(SpeakeasyBase));
export { GamesSnapshotsGetQueryParams };
var GamesSnapshotsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(GamesSnapshotsGetSecurityOption1, _super);
    function GamesSnapshotsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesSnapshotsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesSnapshotsGetSecurityOption1.prototype, "oauth2c", void 0);
    return GamesSnapshotsGetSecurityOption1;
}(SpeakeasyBase));
export { GamesSnapshotsGetSecurityOption1 };
var GamesSnapshotsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(GamesSnapshotsGetSecurityOption2, _super);
    function GamesSnapshotsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesSnapshotsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesSnapshotsGetSecurityOption2.prototype, "oauth2c", void 0);
    return GamesSnapshotsGetSecurityOption2;
}(SpeakeasyBase));
export { GamesSnapshotsGetSecurityOption2 };
var GamesSnapshotsGetSecurity = /** @class */ (function (_super) {
    __extends(GamesSnapshotsGetSecurity, _super);
    function GamesSnapshotsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GamesSnapshotsGetSecurityOption1)
    ], GamesSnapshotsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GamesSnapshotsGetSecurityOption2)
    ], GamesSnapshotsGetSecurity.prototype, "option2", void 0);
    return GamesSnapshotsGetSecurity;
}(SpeakeasyBase));
export { GamesSnapshotsGetSecurity };
var GamesSnapshotsGetRequest = /** @class */ (function (_super) {
    __extends(GamesSnapshotsGetRequest, _super);
    function GamesSnapshotsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesSnapshotsGetPathParams)
    ], GamesSnapshotsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesSnapshotsGetQueryParams)
    ], GamesSnapshotsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesSnapshotsGetSecurity)
    ], GamesSnapshotsGetRequest.prototype, "security", void 0);
    return GamesSnapshotsGetRequest;
}(SpeakeasyBase));
export { GamesSnapshotsGetRequest };
var GamesSnapshotsGetResponse = /** @class */ (function (_super) {
    __extends(GamesSnapshotsGetResponse, _super);
    function GamesSnapshotsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesSnapshotsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Snapshot)
    ], GamesSnapshotsGetResponse.prototype, "snapshot", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesSnapshotsGetResponse.prototype, "statusCode", void 0);
    return GamesSnapshotsGetResponse;
}(SpeakeasyBase));
export { GamesSnapshotsGetResponse };
