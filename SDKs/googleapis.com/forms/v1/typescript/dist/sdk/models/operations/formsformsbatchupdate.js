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
var FormsFormsBatchUpdatePathParams = /** @class */ (function (_super) {
    __extends(FormsFormsBatchUpdatePathParams, _super);
    function FormsFormsBatchUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=formId" }),
        __metadata("design:type", String)
    ], FormsFormsBatchUpdatePathParams.prototype, "formId", void 0);
    return FormsFormsBatchUpdatePathParams;
}(SpeakeasyBase));
export { FormsFormsBatchUpdatePathParams };
var FormsFormsBatchUpdateQueryParams = /** @class */ (function (_super) {
    __extends(FormsFormsBatchUpdateQueryParams, _super);
    function FormsFormsBatchUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FormsFormsBatchUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FormsFormsBatchUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FormsFormsBatchUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FormsFormsBatchUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FormsFormsBatchUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FormsFormsBatchUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FormsFormsBatchUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FormsFormsBatchUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FormsFormsBatchUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FormsFormsBatchUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FormsFormsBatchUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return FormsFormsBatchUpdateQueryParams;
}(SpeakeasyBase));
export { FormsFormsBatchUpdateQueryParams };
var FormsFormsBatchUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FormsFormsBatchUpdateSecurityOption1, _super);
    function FormsFormsBatchUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsBatchUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsBatchUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return FormsFormsBatchUpdateSecurityOption1;
}(SpeakeasyBase));
export { FormsFormsBatchUpdateSecurityOption1 };
var FormsFormsBatchUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FormsFormsBatchUpdateSecurityOption2, _super);
    function FormsFormsBatchUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsBatchUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsBatchUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return FormsFormsBatchUpdateSecurityOption2;
}(SpeakeasyBase));
export { FormsFormsBatchUpdateSecurityOption2 };
var FormsFormsBatchUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(FormsFormsBatchUpdateSecurityOption3, _super);
    function FormsFormsBatchUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsBatchUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsBatchUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return FormsFormsBatchUpdateSecurityOption3;
}(SpeakeasyBase));
export { FormsFormsBatchUpdateSecurityOption3 };
var FormsFormsBatchUpdateSecurity = /** @class */ (function (_super) {
    __extends(FormsFormsBatchUpdateSecurity, _super);
    function FormsFormsBatchUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsBatchUpdateSecurityOption1)
    ], FormsFormsBatchUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsBatchUpdateSecurityOption2)
    ], FormsFormsBatchUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsBatchUpdateSecurityOption3)
    ], FormsFormsBatchUpdateSecurity.prototype, "option3", void 0);
    return FormsFormsBatchUpdateSecurity;
}(SpeakeasyBase));
export { FormsFormsBatchUpdateSecurity };
var FormsFormsBatchUpdateRequest = /** @class */ (function (_super) {
    __extends(FormsFormsBatchUpdateRequest, _super);
    function FormsFormsBatchUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsBatchUpdatePathParams)
    ], FormsFormsBatchUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsBatchUpdateQueryParams)
    ], FormsFormsBatchUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchUpdateFormRequestInput)
    ], FormsFormsBatchUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsBatchUpdateSecurity)
    ], FormsFormsBatchUpdateRequest.prototype, "security", void 0);
    return FormsFormsBatchUpdateRequest;
}(SpeakeasyBase));
export { FormsFormsBatchUpdateRequest };
var FormsFormsBatchUpdateResponse = /** @class */ (function (_super) {
    __extends(FormsFormsBatchUpdateResponse, _super);
    function FormsFormsBatchUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchUpdateFormResponse)
    ], FormsFormsBatchUpdateResponse.prototype, "batchUpdateFormResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FormsFormsBatchUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FormsFormsBatchUpdateResponse.prototype, "statusCode", void 0);
    return FormsFormsBatchUpdateResponse;
}(SpeakeasyBase));
export { FormsFormsBatchUpdateResponse };
