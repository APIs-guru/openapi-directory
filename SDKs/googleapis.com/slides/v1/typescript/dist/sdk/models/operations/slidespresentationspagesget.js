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
var SlidesPresentationsPagesGetPathParams = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetPathParams, _super);
    function SlidesPresentationsPagesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageObjectId" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetPathParams.prototype, "pageObjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=presentationId" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetPathParams.prototype, "presentationId", void 0);
    return SlidesPresentationsPagesGetPathParams;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetPathParams };
var SlidesPresentationsPagesGetQueryParams = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetQueryParams, _super);
    function SlidesPresentationsPagesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SlidesPresentationsPagesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetQueryParams.prototype, "uploadProtocol", void 0);
    return SlidesPresentationsPagesGetQueryParams;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetQueryParams };
var SlidesPresentationsPagesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetSecurityOption1, _super);
    function SlidesPresentationsPagesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsPagesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsPagesGetSecurityOption1.prototype, "oauth2c", void 0);
    return SlidesPresentationsPagesGetSecurityOption1;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetSecurityOption1 };
var SlidesPresentationsPagesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetSecurityOption2, _super);
    function SlidesPresentationsPagesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsPagesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsPagesGetSecurityOption2.prototype, "oauth2c", void 0);
    return SlidesPresentationsPagesGetSecurityOption2;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetSecurityOption2 };
var SlidesPresentationsPagesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetSecurityOption3, _super);
    function SlidesPresentationsPagesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsPagesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsPagesGetSecurityOption3.prototype, "oauth2c", void 0);
    return SlidesPresentationsPagesGetSecurityOption3;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetSecurityOption3 };
var SlidesPresentationsPagesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetSecurityOption4, _super);
    function SlidesPresentationsPagesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsPagesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsPagesGetSecurityOption4.prototype, "oauth2c", void 0);
    return SlidesPresentationsPagesGetSecurityOption4;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetSecurityOption4 };
var SlidesPresentationsPagesGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetSecurityOption5, _super);
    function SlidesPresentationsPagesGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsPagesGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsPagesGetSecurityOption5.prototype, "oauth2c", void 0);
    return SlidesPresentationsPagesGetSecurityOption5;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetSecurityOption5 };
var SlidesPresentationsPagesGetSecurity = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetSecurity, _super);
    function SlidesPresentationsPagesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsPagesGetSecurityOption1)
    ], SlidesPresentationsPagesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsPagesGetSecurityOption2)
    ], SlidesPresentationsPagesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsPagesGetSecurityOption3)
    ], SlidesPresentationsPagesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsPagesGetSecurityOption4)
    ], SlidesPresentationsPagesGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsPagesGetSecurityOption5)
    ], SlidesPresentationsPagesGetSecurity.prototype, "option5", void 0);
    return SlidesPresentationsPagesGetSecurity;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetSecurity };
var SlidesPresentationsPagesGetRequest = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetRequest, _super);
    function SlidesPresentationsPagesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SlidesPresentationsPagesGetPathParams)
    ], SlidesPresentationsPagesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SlidesPresentationsPagesGetQueryParams)
    ], SlidesPresentationsPagesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SlidesPresentationsPagesGetSecurity)
    ], SlidesPresentationsPagesGetRequest.prototype, "security", void 0);
    return SlidesPresentationsPagesGetRequest;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetRequest };
var SlidesPresentationsPagesGetResponse = /** @class */ (function (_super) {
    __extends(SlidesPresentationsPagesGetResponse, _super);
    function SlidesPresentationsPagesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SlidesPresentationsPagesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Page)
    ], SlidesPresentationsPagesGetResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SlidesPresentationsPagesGetResponse.prototype, "statusCode", void 0);
    return SlidesPresentationsPagesGetResponse;
}(SpeakeasyBase));
export { SlidesPresentationsPagesGetResponse };
