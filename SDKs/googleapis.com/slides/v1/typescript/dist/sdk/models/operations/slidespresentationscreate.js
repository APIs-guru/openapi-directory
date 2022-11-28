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
var SlidesPresentationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(SlidesPresentationsCreateQueryParams, _super);
    function SlidesPresentationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SlidesPresentationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SlidesPresentationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SlidesPresentationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SlidesPresentationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SlidesPresentationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SlidesPresentationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SlidesPresentationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SlidesPresentationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SlidesPresentationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SlidesPresentationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SlidesPresentationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return SlidesPresentationsCreateQueryParams;
}(SpeakeasyBase));
export { SlidesPresentationsCreateQueryParams };
var SlidesPresentationsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsCreateSecurityOption1, _super);
    function SlidesPresentationsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return SlidesPresentationsCreateSecurityOption1;
}(SpeakeasyBase));
export { SlidesPresentationsCreateSecurityOption1 };
var SlidesPresentationsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsCreateSecurityOption2, _super);
    function SlidesPresentationsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return SlidesPresentationsCreateSecurityOption2;
}(SpeakeasyBase));
export { SlidesPresentationsCreateSecurityOption2 };
var SlidesPresentationsCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsCreateSecurityOption3, _super);
    function SlidesPresentationsCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsCreateSecurityOption3.prototype, "oauth2c", void 0);
    return SlidesPresentationsCreateSecurityOption3;
}(SpeakeasyBase));
export { SlidesPresentationsCreateSecurityOption3 };
var SlidesPresentationsCreateSecurity = /** @class */ (function (_super) {
    __extends(SlidesPresentationsCreateSecurity, _super);
    function SlidesPresentationsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsCreateSecurityOption1)
    ], SlidesPresentationsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsCreateSecurityOption2)
    ], SlidesPresentationsCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsCreateSecurityOption3)
    ], SlidesPresentationsCreateSecurity.prototype, "option3", void 0);
    return SlidesPresentationsCreateSecurity;
}(SpeakeasyBase));
export { SlidesPresentationsCreateSecurity };
var SlidesPresentationsCreateRequest = /** @class */ (function (_super) {
    __extends(SlidesPresentationsCreateRequest, _super);
    function SlidesPresentationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SlidesPresentationsCreateQueryParams)
    ], SlidesPresentationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Presentation)
    ], SlidesPresentationsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SlidesPresentationsCreateSecurity)
    ], SlidesPresentationsCreateRequest.prototype, "security", void 0);
    return SlidesPresentationsCreateRequest;
}(SpeakeasyBase));
export { SlidesPresentationsCreateRequest };
var SlidesPresentationsCreateResponse = /** @class */ (function (_super) {
    __extends(SlidesPresentationsCreateResponse, _super);
    function SlidesPresentationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SlidesPresentationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Presentation)
    ], SlidesPresentationsCreateResponse.prototype, "presentation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SlidesPresentationsCreateResponse.prototype, "statusCode", void 0);
    return SlidesPresentationsCreateResponse;
}(SpeakeasyBase));
export { SlidesPresentationsCreateResponse };
