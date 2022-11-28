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
var SlidesPresentationsGetPathParams = /** @class */ (function (_super) {
    __extends(SlidesPresentationsGetPathParams, _super);
    function SlidesPresentationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=presentationId" }),
        __metadata("design:type", String)
    ], SlidesPresentationsGetPathParams.prototype, "presentationId", void 0);
    return SlidesPresentationsGetPathParams;
}(SpeakeasyBase));
export { SlidesPresentationsGetPathParams };
var SlidesPresentationsGetQueryParams = /** @class */ (function (_super) {
    __extends(SlidesPresentationsGetQueryParams, _super);
    function SlidesPresentationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SlidesPresentationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SlidesPresentationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SlidesPresentationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SlidesPresentationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SlidesPresentationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SlidesPresentationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SlidesPresentationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SlidesPresentationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SlidesPresentationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SlidesPresentationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SlidesPresentationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return SlidesPresentationsGetQueryParams;
}(SpeakeasyBase));
export { SlidesPresentationsGetQueryParams };
var SlidesPresentationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsGetSecurityOption1, _super);
    function SlidesPresentationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return SlidesPresentationsGetSecurityOption1;
}(SpeakeasyBase));
export { SlidesPresentationsGetSecurityOption1 };
var SlidesPresentationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsGetSecurityOption2, _super);
    function SlidesPresentationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return SlidesPresentationsGetSecurityOption2;
}(SpeakeasyBase));
export { SlidesPresentationsGetSecurityOption2 };
var SlidesPresentationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsGetSecurityOption3, _super);
    function SlidesPresentationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return SlidesPresentationsGetSecurityOption3;
}(SpeakeasyBase));
export { SlidesPresentationsGetSecurityOption3 };
var SlidesPresentationsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsGetSecurityOption4, _super);
    function SlidesPresentationsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsGetSecurityOption4.prototype, "oauth2c", void 0);
    return SlidesPresentationsGetSecurityOption4;
}(SpeakeasyBase));
export { SlidesPresentationsGetSecurityOption4 };
var SlidesPresentationsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsGetSecurityOption5, _super);
    function SlidesPresentationsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsGetSecurityOption5.prototype, "oauth2c", void 0);
    return SlidesPresentationsGetSecurityOption5;
}(SpeakeasyBase));
export { SlidesPresentationsGetSecurityOption5 };
var SlidesPresentationsGetSecurity = /** @class */ (function (_super) {
    __extends(SlidesPresentationsGetSecurity, _super);
    function SlidesPresentationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsGetSecurityOption1)
    ], SlidesPresentationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsGetSecurityOption2)
    ], SlidesPresentationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsGetSecurityOption3)
    ], SlidesPresentationsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsGetSecurityOption4)
    ], SlidesPresentationsGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsGetSecurityOption5)
    ], SlidesPresentationsGetSecurity.prototype, "option5", void 0);
    return SlidesPresentationsGetSecurity;
}(SpeakeasyBase));
export { SlidesPresentationsGetSecurity };
var SlidesPresentationsGetRequest = /** @class */ (function (_super) {
    __extends(SlidesPresentationsGetRequest, _super);
    function SlidesPresentationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SlidesPresentationsGetPathParams)
    ], SlidesPresentationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SlidesPresentationsGetQueryParams)
    ], SlidesPresentationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SlidesPresentationsGetSecurity)
    ], SlidesPresentationsGetRequest.prototype, "security", void 0);
    return SlidesPresentationsGetRequest;
}(SpeakeasyBase));
export { SlidesPresentationsGetRequest };
var SlidesPresentationsGetResponse = /** @class */ (function (_super) {
    __extends(SlidesPresentationsGetResponse, _super);
    function SlidesPresentationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SlidesPresentationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Presentation)
    ], SlidesPresentationsGetResponse.prototype, "presentation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SlidesPresentationsGetResponse.prototype, "statusCode", void 0);
    return SlidesPresentationsGetResponse;
}(SpeakeasyBase));
export { SlidesPresentationsGetResponse };
