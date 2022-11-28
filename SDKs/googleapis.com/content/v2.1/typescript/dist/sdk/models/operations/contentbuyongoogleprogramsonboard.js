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
var ContentBuyongoogleprogramsOnboardPathParams = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsOnboardPathParams, _super);
    function ContentBuyongoogleprogramsOnboardPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsOnboardPathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=regionCode" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsOnboardPathParams.prototype, "regionCode", void 0);
    return ContentBuyongoogleprogramsOnboardPathParams;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsOnboardPathParams };
var ContentBuyongoogleprogramsOnboardQueryParams = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsOnboardQueryParams, _super);
    function ContentBuyongoogleprogramsOnboardQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsOnboardQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsOnboardQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsOnboardQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsOnboardQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsOnboardQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsOnboardQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsOnboardQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentBuyongoogleprogramsOnboardQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsOnboardQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsOnboardQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsOnboardQueryParams.prototype, "uploadProtocol", void 0);
    return ContentBuyongoogleprogramsOnboardQueryParams;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsOnboardQueryParams };
var ContentBuyongoogleprogramsOnboardSecurity = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsOnboardSecurity, _super);
    function ContentBuyongoogleprogramsOnboardSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentBuyongoogleprogramsOnboardSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentBuyongoogleprogramsOnboardSecurity.prototype, "oauth2c", void 0);
    return ContentBuyongoogleprogramsOnboardSecurity;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsOnboardSecurity };
var ContentBuyongoogleprogramsOnboardRequest = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsOnboardRequest, _super);
    function ContentBuyongoogleprogramsOnboardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentBuyongoogleprogramsOnboardPathParams)
    ], ContentBuyongoogleprogramsOnboardRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentBuyongoogleprogramsOnboardQueryParams)
    ], ContentBuyongoogleprogramsOnboardRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OnboardBuyOnGoogleProgramRequest)
    ], ContentBuyongoogleprogramsOnboardRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentBuyongoogleprogramsOnboardSecurity)
    ], ContentBuyongoogleprogramsOnboardRequest.prototype, "security", void 0);
    return ContentBuyongoogleprogramsOnboardRequest;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsOnboardRequest };
var ContentBuyongoogleprogramsOnboardResponse = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsOnboardResponse, _super);
    function ContentBuyongoogleprogramsOnboardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsOnboardResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentBuyongoogleprogramsOnboardResponse.prototype, "statusCode", void 0);
    return ContentBuyongoogleprogramsOnboardResponse;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsOnboardResponse };
