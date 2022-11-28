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
var DfareportingContentCategoriesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DfareportingContentCategoriesUpdatePathParams, _super);
    function DfareportingContentCategoriesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesUpdatePathParams.prototype, "profileId", void 0);
    return DfareportingContentCategoriesUpdatePathParams;
}(SpeakeasyBase));
export { DfareportingContentCategoriesUpdatePathParams };
var DfareportingContentCategoriesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingContentCategoriesUpdateQueryParams, _super);
    function DfareportingContentCategoriesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingContentCategoriesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingContentCategoriesUpdateQueryParams;
}(SpeakeasyBase));
export { DfareportingContentCategoriesUpdateQueryParams };
var DfareportingContentCategoriesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DfareportingContentCategoriesUpdateSecurity, _super);
    function DfareportingContentCategoriesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingContentCategoriesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingContentCategoriesUpdateSecurity.prototype, "oauth2c", void 0);
    return DfareportingContentCategoriesUpdateSecurity;
}(SpeakeasyBase));
export { DfareportingContentCategoriesUpdateSecurity };
var DfareportingContentCategoriesUpdateRequest = /** @class */ (function (_super) {
    __extends(DfareportingContentCategoriesUpdateRequest, _super);
    function DfareportingContentCategoriesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingContentCategoriesUpdatePathParams)
    ], DfareportingContentCategoriesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingContentCategoriesUpdateQueryParams)
    ], DfareportingContentCategoriesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ContentCategory)
    ], DfareportingContentCategoriesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingContentCategoriesUpdateSecurity)
    ], DfareportingContentCategoriesUpdateRequest.prototype, "security", void 0);
    return DfareportingContentCategoriesUpdateRequest;
}(SpeakeasyBase));
export { DfareportingContentCategoriesUpdateRequest };
var DfareportingContentCategoriesUpdateResponse = /** @class */ (function (_super) {
    __extends(DfareportingContentCategoriesUpdateResponse, _super);
    function DfareportingContentCategoriesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ContentCategory)
    ], DfareportingContentCategoriesUpdateResponse.prototype, "contentCategory", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingContentCategoriesUpdateResponse.prototype, "statusCode", void 0);
    return DfareportingContentCategoriesUpdateResponse;
}(SpeakeasyBase));
export { DfareportingContentCategoriesUpdateResponse };
