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
var SlidesPresentationsBatchUpdatePathParams = /** @class */ (function (_super) {
    __extends(SlidesPresentationsBatchUpdatePathParams, _super);
    function SlidesPresentationsBatchUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=presentationId" }),
        __metadata("design:type", String)
    ], SlidesPresentationsBatchUpdatePathParams.prototype, "presentationId", void 0);
    return SlidesPresentationsBatchUpdatePathParams;
}(SpeakeasyBase));
export { SlidesPresentationsBatchUpdatePathParams };
var SlidesPresentationsBatchUpdateQueryParams = /** @class */ (function (_super) {
    __extends(SlidesPresentationsBatchUpdateQueryParams, _super);
    function SlidesPresentationsBatchUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SlidesPresentationsBatchUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SlidesPresentationsBatchUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SlidesPresentationsBatchUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SlidesPresentationsBatchUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SlidesPresentationsBatchUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SlidesPresentationsBatchUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SlidesPresentationsBatchUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SlidesPresentationsBatchUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SlidesPresentationsBatchUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SlidesPresentationsBatchUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SlidesPresentationsBatchUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return SlidesPresentationsBatchUpdateQueryParams;
}(SpeakeasyBase));
export { SlidesPresentationsBatchUpdateQueryParams };
var SlidesPresentationsBatchUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsBatchUpdateSecurityOption1, _super);
    function SlidesPresentationsBatchUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsBatchUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsBatchUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return SlidesPresentationsBatchUpdateSecurityOption1;
}(SpeakeasyBase));
export { SlidesPresentationsBatchUpdateSecurityOption1 };
var SlidesPresentationsBatchUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsBatchUpdateSecurityOption2, _super);
    function SlidesPresentationsBatchUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsBatchUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsBatchUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return SlidesPresentationsBatchUpdateSecurityOption2;
}(SpeakeasyBase));
export { SlidesPresentationsBatchUpdateSecurityOption2 };
var SlidesPresentationsBatchUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsBatchUpdateSecurityOption3, _super);
    function SlidesPresentationsBatchUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsBatchUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsBatchUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return SlidesPresentationsBatchUpdateSecurityOption3;
}(SpeakeasyBase));
export { SlidesPresentationsBatchUpdateSecurityOption3 };
var SlidesPresentationsBatchUpdateSecurityOption4 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsBatchUpdateSecurityOption4, _super);
    function SlidesPresentationsBatchUpdateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsBatchUpdateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsBatchUpdateSecurityOption4.prototype, "oauth2c", void 0);
    return SlidesPresentationsBatchUpdateSecurityOption4;
}(SpeakeasyBase));
export { SlidesPresentationsBatchUpdateSecurityOption4 };
var SlidesPresentationsBatchUpdateSecurityOption5 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsBatchUpdateSecurityOption5, _super);
    function SlidesPresentationsBatchUpdateSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsBatchUpdateSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsBatchUpdateSecurityOption5.prototype, "oauth2c", void 0);
    return SlidesPresentationsBatchUpdateSecurityOption5;
}(SpeakeasyBase));
export { SlidesPresentationsBatchUpdateSecurityOption5 };
var SlidesPresentationsBatchUpdateSecurityOption6 = /** @class */ (function (_super) {
    __extends(SlidesPresentationsBatchUpdateSecurityOption6, _super);
    function SlidesPresentationsBatchUpdateSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SlidesPresentationsBatchUpdateSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SlidesPresentationsBatchUpdateSecurityOption6.prototype, "oauth2c", void 0);
    return SlidesPresentationsBatchUpdateSecurityOption6;
}(SpeakeasyBase));
export { SlidesPresentationsBatchUpdateSecurityOption6 };
var SlidesPresentationsBatchUpdateSecurity = /** @class */ (function (_super) {
    __extends(SlidesPresentationsBatchUpdateSecurity, _super);
    function SlidesPresentationsBatchUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsBatchUpdateSecurityOption1)
    ], SlidesPresentationsBatchUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsBatchUpdateSecurityOption2)
    ], SlidesPresentationsBatchUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsBatchUpdateSecurityOption3)
    ], SlidesPresentationsBatchUpdateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsBatchUpdateSecurityOption4)
    ], SlidesPresentationsBatchUpdateSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsBatchUpdateSecurityOption5)
    ], SlidesPresentationsBatchUpdateSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SlidesPresentationsBatchUpdateSecurityOption6)
    ], SlidesPresentationsBatchUpdateSecurity.prototype, "option6", void 0);
    return SlidesPresentationsBatchUpdateSecurity;
}(SpeakeasyBase));
export { SlidesPresentationsBatchUpdateSecurity };
var SlidesPresentationsBatchUpdateRequest = /** @class */ (function (_super) {
    __extends(SlidesPresentationsBatchUpdateRequest, _super);
    function SlidesPresentationsBatchUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SlidesPresentationsBatchUpdatePathParams)
    ], SlidesPresentationsBatchUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SlidesPresentationsBatchUpdateQueryParams)
    ], SlidesPresentationsBatchUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchUpdatePresentationRequest)
    ], SlidesPresentationsBatchUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SlidesPresentationsBatchUpdateSecurity)
    ], SlidesPresentationsBatchUpdateRequest.prototype, "security", void 0);
    return SlidesPresentationsBatchUpdateRequest;
}(SpeakeasyBase));
export { SlidesPresentationsBatchUpdateRequest };
var SlidesPresentationsBatchUpdateResponse = /** @class */ (function (_super) {
    __extends(SlidesPresentationsBatchUpdateResponse, _super);
    function SlidesPresentationsBatchUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchUpdatePresentationResponse)
    ], SlidesPresentationsBatchUpdateResponse.prototype, "batchUpdatePresentationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SlidesPresentationsBatchUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SlidesPresentationsBatchUpdateResponse.prototype, "statusCode", void 0);
    return SlidesPresentationsBatchUpdateResponse;
}(SpeakeasyBase));
export { SlidesPresentationsBatchUpdateResponse };
