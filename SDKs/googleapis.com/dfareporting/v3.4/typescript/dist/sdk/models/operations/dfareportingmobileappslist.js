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
var DfareportingMobileAppsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingMobileAppsListPathParams, _super);
    function DfareportingMobileAppsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingMobileAppsListPathParams.prototype, "profileId", void 0);
    return DfareportingMobileAppsListPathParams;
}(SpeakeasyBase));
export { DfareportingMobileAppsListPathParams };
export var DfareportingMobileAppsListDirectoriesEnum;
(function (DfareportingMobileAppsListDirectoriesEnum) {
    DfareportingMobileAppsListDirectoriesEnum["Unknown"] = "UNKNOWN";
    DfareportingMobileAppsListDirectoriesEnum["AppleAppStore"] = "APPLE_APP_STORE";
    DfareportingMobileAppsListDirectoriesEnum["GooglePlayStore"] = "GOOGLE_PLAY_STORE";
})(DfareportingMobileAppsListDirectoriesEnum || (DfareportingMobileAppsListDirectoriesEnum = {}));
var DfareportingMobileAppsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingMobileAppsListQueryParams, _super);
    function DfareportingMobileAppsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingMobileAppsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingMobileAppsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingMobileAppsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingMobileAppsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=directories" }),
        __metadata("design:type", Array)
    ], DfareportingMobileAppsListQueryParams.prototype, "directories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingMobileAppsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingMobileAppsListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingMobileAppsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingMobileAppsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingMobileAppsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingMobileAppsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingMobileAppsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingMobileAppsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingMobileAppsListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingMobileAppsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingMobileAppsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingMobileAppsListQueryParams;
}(SpeakeasyBase));
export { DfareportingMobileAppsListQueryParams };
var DfareportingMobileAppsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingMobileAppsListSecurity, _super);
    function DfareportingMobileAppsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingMobileAppsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingMobileAppsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingMobileAppsListSecurity;
}(SpeakeasyBase));
export { DfareportingMobileAppsListSecurity };
var DfareportingMobileAppsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingMobileAppsListRequest, _super);
    function DfareportingMobileAppsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingMobileAppsListPathParams)
    ], DfareportingMobileAppsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingMobileAppsListQueryParams)
    ], DfareportingMobileAppsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingMobileAppsListSecurity)
    ], DfareportingMobileAppsListRequest.prototype, "security", void 0);
    return DfareportingMobileAppsListRequest;
}(SpeakeasyBase));
export { DfareportingMobileAppsListRequest };
var DfareportingMobileAppsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingMobileAppsListResponse, _super);
    function DfareportingMobileAppsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingMobileAppsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MobileAppsListResponse)
    ], DfareportingMobileAppsListResponse.prototype, "mobileAppsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingMobileAppsListResponse.prototype, "statusCode", void 0);
    return DfareportingMobileAppsListResponse;
}(SpeakeasyBase));
export { DfareportingMobileAppsListResponse };
