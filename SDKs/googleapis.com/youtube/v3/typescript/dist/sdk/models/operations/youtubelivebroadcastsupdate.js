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
var YoutubeLiveBroadcastsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsUpdateQueryParams, _super);
    function YoutubeLiveBroadcastsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsUpdateQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsUpdateQueryParams.prototype, "onBehalfOfContentOwnerChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeLiveBroadcastsUpdateQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeLiveBroadcastsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeLiveBroadcastsUpdateQueryParams;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsUpdateQueryParams };
var YoutubeLiveBroadcastsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsUpdateSecurityOption1, _super);
    function YoutubeLiveBroadcastsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveBroadcastsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveBroadcastsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeLiveBroadcastsUpdateSecurityOption1;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsUpdateSecurityOption1 };
var YoutubeLiveBroadcastsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsUpdateSecurityOption2, _super);
    function YoutubeLiveBroadcastsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveBroadcastsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveBroadcastsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeLiveBroadcastsUpdateSecurityOption2;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsUpdateSecurityOption2 };
var YoutubeLiveBroadcastsUpdateSecurity = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsUpdateSecurity, _super);
    function YoutubeLiveBroadcastsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveBroadcastsUpdateSecurityOption1)
    ], YoutubeLiveBroadcastsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveBroadcastsUpdateSecurityOption2)
    ], YoutubeLiveBroadcastsUpdateSecurity.prototype, "option2", void 0);
    return YoutubeLiveBroadcastsUpdateSecurity;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsUpdateSecurity };
var YoutubeLiveBroadcastsUpdateRequest = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsUpdateRequest, _super);
    function YoutubeLiveBroadcastsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveBroadcastsUpdateQueryParams)
    ], YoutubeLiveBroadcastsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LiveBroadcast)
    ], YoutubeLiveBroadcastsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveBroadcastsUpdateSecurity)
    ], YoutubeLiveBroadcastsUpdateRequest.prototype, "security", void 0);
    return YoutubeLiveBroadcastsUpdateRequest;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsUpdateRequest };
var YoutubeLiveBroadcastsUpdateResponse = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsUpdateResponse, _super);
    function YoutubeLiveBroadcastsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiveBroadcast)
    ], YoutubeLiveBroadcastsUpdateResponse.prototype, "liveBroadcast", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeLiveBroadcastsUpdateResponse.prototype, "statusCode", void 0);
    return YoutubeLiveBroadcastsUpdateResponse;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsUpdateResponse };
