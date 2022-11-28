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
var YoutubeLiveBroadcastsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsDeleteQueryParams, _super);
    function YoutubeLiveBroadcastsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsDeleteQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsDeleteQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsDeleteQueryParams.prototype, "onBehalfOfContentOwnerChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeLiveBroadcastsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeLiveBroadcastsDeleteQueryParams;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsDeleteQueryParams };
var YoutubeLiveBroadcastsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsDeleteSecurityOption1, _super);
    function YoutubeLiveBroadcastsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveBroadcastsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveBroadcastsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeLiveBroadcastsDeleteSecurityOption1;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsDeleteSecurityOption1 };
var YoutubeLiveBroadcastsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsDeleteSecurityOption2, _super);
    function YoutubeLiveBroadcastsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveBroadcastsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveBroadcastsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeLiveBroadcastsDeleteSecurityOption2;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsDeleteSecurityOption2 };
var YoutubeLiveBroadcastsDeleteSecurity = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsDeleteSecurity, _super);
    function YoutubeLiveBroadcastsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveBroadcastsDeleteSecurityOption1)
    ], YoutubeLiveBroadcastsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveBroadcastsDeleteSecurityOption2)
    ], YoutubeLiveBroadcastsDeleteSecurity.prototype, "option2", void 0);
    return YoutubeLiveBroadcastsDeleteSecurity;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsDeleteSecurity };
var YoutubeLiveBroadcastsDeleteRequest = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsDeleteRequest, _super);
    function YoutubeLiveBroadcastsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveBroadcastsDeleteQueryParams)
    ], YoutubeLiveBroadcastsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveBroadcastsDeleteSecurity)
    ], YoutubeLiveBroadcastsDeleteRequest.prototype, "security", void 0);
    return YoutubeLiveBroadcastsDeleteRequest;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsDeleteRequest };
var YoutubeLiveBroadcastsDeleteResponse = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsDeleteResponse, _super);
    function YoutubeLiveBroadcastsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeLiveBroadcastsDeleteResponse.prototype, "statusCode", void 0);
    return YoutubeLiveBroadcastsDeleteResponse;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsDeleteResponse };
