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
var YoutubeThumbnailsSetQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeThumbnailsSetQueryParams, _super);
    function YoutubeThumbnailsSetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeThumbnailsSetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeThumbnailsSetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeThumbnailsSetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeThumbnailsSetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeThumbnailsSetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeThumbnailsSetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeThumbnailsSetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeThumbnailsSetQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeThumbnailsSetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeThumbnailsSetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeThumbnailsSetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeThumbnailsSetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoId" }),
        __metadata("design:type", String)
    ], YoutubeThumbnailsSetQueryParams.prototype, "videoId", void 0);
    return YoutubeThumbnailsSetQueryParams;
}(SpeakeasyBase));
export { YoutubeThumbnailsSetQueryParams };
var YoutubeThumbnailsSetSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeThumbnailsSetSecurityOption1, _super);
    function YoutubeThumbnailsSetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeThumbnailsSetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeThumbnailsSetSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeThumbnailsSetSecurityOption1;
}(SpeakeasyBase));
export { YoutubeThumbnailsSetSecurityOption1 };
var YoutubeThumbnailsSetSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeThumbnailsSetSecurityOption2, _super);
    function YoutubeThumbnailsSetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeThumbnailsSetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeThumbnailsSetSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeThumbnailsSetSecurityOption2;
}(SpeakeasyBase));
export { YoutubeThumbnailsSetSecurityOption2 };
var YoutubeThumbnailsSetSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeThumbnailsSetSecurityOption3, _super);
    function YoutubeThumbnailsSetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeThumbnailsSetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeThumbnailsSetSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeThumbnailsSetSecurityOption3;
}(SpeakeasyBase));
export { YoutubeThumbnailsSetSecurityOption3 };
var YoutubeThumbnailsSetSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeThumbnailsSetSecurityOption4, _super);
    function YoutubeThumbnailsSetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeThumbnailsSetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeThumbnailsSetSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeThumbnailsSetSecurityOption4;
}(SpeakeasyBase));
export { YoutubeThumbnailsSetSecurityOption4 };
var YoutubeThumbnailsSetSecurity = /** @class */ (function (_super) {
    __extends(YoutubeThumbnailsSetSecurity, _super);
    function YoutubeThumbnailsSetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeThumbnailsSetSecurityOption1)
    ], YoutubeThumbnailsSetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeThumbnailsSetSecurityOption2)
    ], YoutubeThumbnailsSetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeThumbnailsSetSecurityOption3)
    ], YoutubeThumbnailsSetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeThumbnailsSetSecurityOption4)
    ], YoutubeThumbnailsSetSecurity.prototype, "option4", void 0);
    return YoutubeThumbnailsSetSecurity;
}(SpeakeasyBase));
export { YoutubeThumbnailsSetSecurity };
var YoutubeThumbnailsSetRequest = /** @class */ (function (_super) {
    __extends(YoutubeThumbnailsSetRequest, _super);
    function YoutubeThumbnailsSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeThumbnailsSetQueryParams)
    ], YoutubeThumbnailsSetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeThumbnailsSetSecurity)
    ], YoutubeThumbnailsSetRequest.prototype, "security", void 0);
    return YoutubeThumbnailsSetRequest;
}(SpeakeasyBase));
export { YoutubeThumbnailsSetRequest };
var YoutubeThumbnailsSetResponse = /** @class */ (function (_super) {
    __extends(YoutubeThumbnailsSetResponse, _super);
    function YoutubeThumbnailsSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeThumbnailsSetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeThumbnailsSetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ThumbnailSetResponse)
    ], YoutubeThumbnailsSetResponse.prototype, "thumbnailSetResponse", void 0);
    return YoutubeThumbnailsSetResponse;
}(SpeakeasyBase));
export { YoutubeThumbnailsSetResponse };
