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
var YoutubeLiveBroadcastsInsertCuepointQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsInsertCuepointQueryParams, _super);
    function YoutubeLiveBroadcastsInsertCuepointQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsInsertCuepointQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsInsertCuepointQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsInsertCuepointQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsInsertCuepointQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsInsertCuepointQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsInsertCuepointQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsInsertCuepointQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsInsertCuepointQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsInsertCuepointQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsInsertCuepointQueryParams.prototype, "onBehalfOfContentOwnerChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeLiveBroadcastsInsertCuepointQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeLiveBroadcastsInsertCuepointQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsInsertCuepointQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsInsertCuepointQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsInsertCuepointQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeLiveBroadcastsInsertCuepointQueryParams;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsInsertCuepointQueryParams };
var YoutubeLiveBroadcastsInsertCuepointSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsInsertCuepointSecurityOption1, _super);
    function YoutubeLiveBroadcastsInsertCuepointSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveBroadcastsInsertCuepointSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveBroadcastsInsertCuepointSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeLiveBroadcastsInsertCuepointSecurityOption1;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsInsertCuepointSecurityOption1 };
var YoutubeLiveBroadcastsInsertCuepointSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsInsertCuepointSecurityOption2, _super);
    function YoutubeLiveBroadcastsInsertCuepointSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveBroadcastsInsertCuepointSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveBroadcastsInsertCuepointSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeLiveBroadcastsInsertCuepointSecurityOption2;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsInsertCuepointSecurityOption2 };
var YoutubeLiveBroadcastsInsertCuepointSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsInsertCuepointSecurityOption3, _super);
    function YoutubeLiveBroadcastsInsertCuepointSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveBroadcastsInsertCuepointSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveBroadcastsInsertCuepointSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeLiveBroadcastsInsertCuepointSecurityOption3;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsInsertCuepointSecurityOption3 };
var YoutubeLiveBroadcastsInsertCuepointSecurity = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsInsertCuepointSecurity, _super);
    function YoutubeLiveBroadcastsInsertCuepointSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveBroadcastsInsertCuepointSecurityOption1)
    ], YoutubeLiveBroadcastsInsertCuepointSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveBroadcastsInsertCuepointSecurityOption2)
    ], YoutubeLiveBroadcastsInsertCuepointSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveBroadcastsInsertCuepointSecurityOption3)
    ], YoutubeLiveBroadcastsInsertCuepointSecurity.prototype, "option3", void 0);
    return YoutubeLiveBroadcastsInsertCuepointSecurity;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsInsertCuepointSecurity };
var YoutubeLiveBroadcastsInsertCuepointRequest = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsInsertCuepointRequest, _super);
    function YoutubeLiveBroadcastsInsertCuepointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveBroadcastsInsertCuepointQueryParams)
    ], YoutubeLiveBroadcastsInsertCuepointRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Cuepoint)
    ], YoutubeLiveBroadcastsInsertCuepointRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveBroadcastsInsertCuepointSecurity)
    ], YoutubeLiveBroadcastsInsertCuepointRequest.prototype, "security", void 0);
    return YoutubeLiveBroadcastsInsertCuepointRequest;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsInsertCuepointRequest };
var YoutubeLiveBroadcastsInsertCuepointResponse = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsInsertCuepointResponse, _super);
    function YoutubeLiveBroadcastsInsertCuepointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsInsertCuepointResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Cuepoint)
    ], YoutubeLiveBroadcastsInsertCuepointResponse.prototype, "cuepoint", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeLiveBroadcastsInsertCuepointResponse.prototype, "statusCode", void 0);
    return YoutubeLiveBroadcastsInsertCuepointResponse;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsInsertCuepointResponse };
