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
var SlidesPresentationsPagesGetThumbnailPathParams = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetThumbnailPathParams, _super);
    function SlidesPresentationsPagesGetThumbnailPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageObjectId" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetThumbnailPathParams.prototype, "pageObjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=presentationId" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetThumbnailPathParams.prototype, "presentationId", void 0);
    return SlidesPresentationsPagesGetThumbnailPathParams;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetThumbnailPathParams };
export var SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum;
(function (SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum) {
    SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum["Png"] = "PNG";
})(SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum || (SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum = {}));
export var SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum;
(function (SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum) {
    SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum["ThumbnailSizeUnspecified"] = "THUMBNAIL_SIZE_UNSPECIFIED";
    SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum["Large"] = "LARGE";
    SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum["Medium"] = "MEDIUM";
    SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum["Small"] = "SMALL";
})(SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum || (SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum = {}));
var SlidesPresentationsPagesGetThumbnailQueryParams = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetThumbnailQueryParams, _super);
    function SlidesPresentationsPagesGetThumbnailQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetThumbnailQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetThumbnailQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetThumbnailQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetThumbnailQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetThumbnailQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetThumbnailQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetThumbnailQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SlidesPresentationsPagesGetThumbnailQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetThumbnailQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=thumbnailProperties.mimeType" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetThumbnailQueryParams.prototype, "thumbnailPropertiesMimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=thumbnailProperties.thumbnailSize" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetThumbnailQueryParams.prototype, "thumbnailPropertiesThumbnailSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetThumbnailQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetThumbnailQueryParams.prototype, "uploadProtocol", void 0);
    return SlidesPresentationsPagesGetThumbnailQueryParams;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetThumbnailQueryParams };
var SlidesPresentationsPagesGetThumbnailSecurityOption1 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetThumbnailSecurityOption1, _super);
    function SlidesPresentationsPagesGetThumbnailSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsPagesGetThumbnailSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsPagesGetThumbnailSecurityOption1.prototype, "oauth2c", void 0);
    return SlidesPresentationsPagesGetThumbnailSecurityOption1;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetThumbnailSecurityOption1 };
var SlidesPresentationsPagesGetThumbnailSecurityOption2 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetThumbnailSecurityOption2, _super);
    function SlidesPresentationsPagesGetThumbnailSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsPagesGetThumbnailSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsPagesGetThumbnailSecurityOption2.prototype, "oauth2c", void 0);
    return SlidesPresentationsPagesGetThumbnailSecurityOption2;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetThumbnailSecurityOption2 };
var SlidesPresentationsPagesGetThumbnailSecurityOption3 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetThumbnailSecurityOption3, _super);
    function SlidesPresentationsPagesGetThumbnailSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsPagesGetThumbnailSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsPagesGetThumbnailSecurityOption3.prototype, "oauth2c", void 0);
    return SlidesPresentationsPagesGetThumbnailSecurityOption3;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetThumbnailSecurityOption3 };
var SlidesPresentationsPagesGetThumbnailSecurityOption4 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetThumbnailSecurityOption4, _super);
    function SlidesPresentationsPagesGetThumbnailSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsPagesGetThumbnailSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsPagesGetThumbnailSecurityOption4.prototype, "oauth2c", void 0);
    return SlidesPresentationsPagesGetThumbnailSecurityOption4;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetThumbnailSecurityOption4 };
var SlidesPresentationsPagesGetThumbnailSecurityOption5 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetThumbnailSecurityOption5, _super);
    function SlidesPresentationsPagesGetThumbnailSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsPagesGetThumbnailSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsPagesGetThumbnailSecurityOption5.prototype, "oauth2c", void 0);
    return SlidesPresentationsPagesGetThumbnailSecurityOption5;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetThumbnailSecurityOption5 };
var SlidesPresentationsPagesGetThumbnailSecurity = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetThumbnailSecurity, _super);
    function SlidesPresentationsPagesGetThumbnailSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsPagesGetThumbnailSecurityOption1)
    ], SlidesPresentationsPagesGetThumbnailSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsPagesGetThumbnailSecurityOption2)
    ], SlidesPresentationsPagesGetThumbnailSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsPagesGetThumbnailSecurityOption3)
    ], SlidesPresentationsPagesGetThumbnailSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsPagesGetThumbnailSecurityOption4)
    ], SlidesPresentationsPagesGetThumbnailSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsPagesGetThumbnailSecurityOption5)
    ], SlidesPresentationsPagesGetThumbnailSecurity.prototype, "option5", void 0);
    return SlidesPresentationsPagesGetThumbnailSecurity;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetThumbnailSecurity };
var SlidesPresentationsPagesGetThumbnailRequest = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetThumbnailRequest, _super);
    function SlidesPresentationsPagesGetThumbnailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SlidesPresentationsPagesGetThumbnailPathParams)
    ], SlidesPresentationsPagesGetThumbnailRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SlidesPresentationsPagesGetThumbnailQueryParams)
    ], SlidesPresentationsPagesGetThumbnailRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SlidesPresentationsPagesGetThumbnailSecurity)
    ], SlidesPresentationsPagesGetThumbnailRequest.prototype, "security", void 0);
    return SlidesPresentationsPagesGetThumbnailRequest;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetThumbnailRequest };
var SlidesPresentationsPagesGetThumbnailResponse = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetThumbnailResponse, _super);
    function SlidesPresentationsPagesGetThumbnailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetThumbnailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SlidesPresentationsPagesGetThumbnailResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Thumbnail)
    ], SlidesPresentationsPagesGetThumbnailResponse.prototype, "thumbnail", void 0);
    return SlidesPresentationsPagesGetThumbnailResponse;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetThumbnailResponse };
