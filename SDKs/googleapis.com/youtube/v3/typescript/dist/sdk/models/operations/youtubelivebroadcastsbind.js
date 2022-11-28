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
var YoutubeLiveBroadcastsBindQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsBindQueryParams, _super);
    function YoutubeLiveBroadcastsBindQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "onBehalfOfContentOwnerChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streamId" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "streamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsBindQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeLiveBroadcastsBindQueryParams;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsBindQueryParams };
var YoutubeLiveBroadcastsBindSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsBindSecurityOption1, _super);
    function YoutubeLiveBroadcastsBindSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveBroadcastsBindSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveBroadcastsBindSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeLiveBroadcastsBindSecurityOption1;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsBindSecurityOption1 };
var YoutubeLiveBroadcastsBindSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsBindSecurityOption2, _super);
    function YoutubeLiveBroadcastsBindSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveBroadcastsBindSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveBroadcastsBindSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeLiveBroadcastsBindSecurityOption2;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsBindSecurityOption2 };
var YoutubeLiveBroadcastsBindSecurity = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsBindSecurity, _super);
    function YoutubeLiveBroadcastsBindSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveBroadcastsBindSecurityOption1)
    ], YoutubeLiveBroadcastsBindSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveBroadcastsBindSecurityOption2)
    ], YoutubeLiveBroadcastsBindSecurity.prototype, "option2", void 0);
    return YoutubeLiveBroadcastsBindSecurity;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsBindSecurity };
var YoutubeLiveBroadcastsBindRequest = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsBindRequest, _super);
    function YoutubeLiveBroadcastsBindRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveBroadcastsBindQueryParams)
    ], YoutubeLiveBroadcastsBindRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveBroadcastsBindSecurity)
    ], YoutubeLiveBroadcastsBindRequest.prototype, "security", void 0);
    return YoutubeLiveBroadcastsBindRequest;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsBindRequest };
var YoutubeLiveBroadcastsBindResponse = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsBindResponse, _super);
    function YoutubeLiveBroadcastsBindResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsBindResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiveBroadcast)
    ], YoutubeLiveBroadcastsBindResponse.prototype, "liveBroadcast", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeLiveBroadcastsBindResponse.prototype, "statusCode", void 0);
    return YoutubeLiveBroadcastsBindResponse;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsBindResponse };
