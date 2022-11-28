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
var FactchecktoolsPagesUpdatePathParams = /** @class */ (function (_super) {
    __extends(FactchecktoolsPagesUpdatePathParams, _super);
    function FactchecktoolsPagesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesUpdatePathParams.prototype, "name", void 0);
    return FactchecktoolsPagesUpdatePathParams;
}(SpeakeasyBase));
export { FactchecktoolsPagesUpdatePathParams };
var FactchecktoolsPagesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(FactchecktoolsPagesUpdateQueryParams, _super);
    function FactchecktoolsPagesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FactchecktoolsPagesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return FactchecktoolsPagesUpdateQueryParams;
}(SpeakeasyBase));
export { FactchecktoolsPagesUpdateQueryParams };
var FactchecktoolsPagesUpdateSecurity = /** @class */ (function (_super) {
    __extends(FactchecktoolsPagesUpdateSecurity, _super);
    function FactchecktoolsPagesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FactchecktoolsPagesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FactchecktoolsPagesUpdateSecurity.prototype, "oauth2c", void 0);
    return FactchecktoolsPagesUpdateSecurity;
}(SpeakeasyBase));
export { FactchecktoolsPagesUpdateSecurity };
var FactchecktoolsPagesUpdateRequest = /** @class */ (function (_super) {
    __extends(FactchecktoolsPagesUpdateRequest, _super);
    function FactchecktoolsPagesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FactchecktoolsPagesUpdatePathParams)
    ], FactchecktoolsPagesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FactchecktoolsPagesUpdateQueryParams)
    ], FactchecktoolsPagesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage)
    ], FactchecktoolsPagesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FactchecktoolsPagesUpdateSecurity)
    ], FactchecktoolsPagesUpdateRequest.prototype, "security", void 0);
    return FactchecktoolsPagesUpdateRequest;
}(SpeakeasyBase));
export { FactchecktoolsPagesUpdateRequest };
var FactchecktoolsPagesUpdateResponse = /** @class */ (function (_super) {
    __extends(FactchecktoolsPagesUpdateResponse, _super);
    function FactchecktoolsPagesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FactchecktoolsPagesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage)
    ], FactchecktoolsPagesUpdateResponse.prototype, "googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FactchecktoolsPagesUpdateResponse.prototype, "statusCode", void 0);
    return FactchecktoolsPagesUpdateResponse;
}(SpeakeasyBase));
export { FactchecktoolsPagesUpdateResponse };
