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
var ContentLiasettingsRequestinventoryverificationPathParams = /** @class */ (function (_super) {
    __extends(ContentLiasettingsRequestinventoryverificationPathParams, _super);
    function ContentLiasettingsRequestinventoryverificationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestinventoryverificationPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestinventoryverificationPathParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestinventoryverificationPathParams.prototype, "merchantId", void 0);
    return ContentLiasettingsRequestinventoryverificationPathParams;
}(SpeakeasyBase));
export { ContentLiasettingsRequestinventoryverificationPathParams };
var ContentLiasettingsRequestinventoryverificationQueryParams = /** @class */ (function (_super) {
    __extends(ContentLiasettingsRequestinventoryverificationQueryParams, _super);
    function ContentLiasettingsRequestinventoryverificationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestinventoryverificationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestinventoryverificationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestinventoryverificationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestinventoryverificationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestinventoryverificationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestinventoryverificationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestinventoryverificationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentLiasettingsRequestinventoryverificationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestinventoryverificationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestinventoryverificationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestinventoryverificationQueryParams.prototype, "uploadProtocol", void 0);
    return ContentLiasettingsRequestinventoryverificationQueryParams;
}(SpeakeasyBase));
export { ContentLiasettingsRequestinventoryverificationQueryParams };
var ContentLiasettingsRequestinventoryverificationSecurity = /** @class */ (function (_super) {
    __extends(ContentLiasettingsRequestinventoryverificationSecurity, _super);
    function ContentLiasettingsRequestinventoryverificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentLiasettingsRequestinventoryverificationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentLiasettingsRequestinventoryverificationSecurity.prototype, "oauth2c", void 0);
    return ContentLiasettingsRequestinventoryverificationSecurity;
}(SpeakeasyBase));
export { ContentLiasettingsRequestinventoryverificationSecurity };
var ContentLiasettingsRequestinventoryverificationRequest = /** @class */ (function (_super) {
    __extends(ContentLiasettingsRequestinventoryverificationRequest, _super);
    function ContentLiasettingsRequestinventoryverificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentLiasettingsRequestinventoryverificationPathParams)
    ], ContentLiasettingsRequestinventoryverificationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentLiasettingsRequestinventoryverificationQueryParams)
    ], ContentLiasettingsRequestinventoryverificationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentLiasettingsRequestinventoryverificationSecurity)
    ], ContentLiasettingsRequestinventoryverificationRequest.prototype, "security", void 0);
    return ContentLiasettingsRequestinventoryverificationRequest;
}(SpeakeasyBase));
export { ContentLiasettingsRequestinventoryverificationRequest };
var ContentLiasettingsRequestinventoryverificationResponse = /** @class */ (function (_super) {
    __extends(ContentLiasettingsRequestinventoryverificationResponse, _super);
    function ContentLiasettingsRequestinventoryverificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestinventoryverificationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiasettingsRequestInventoryVerificationResponse)
    ], ContentLiasettingsRequestinventoryverificationResponse.prototype, "liasettingsRequestInventoryVerificationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentLiasettingsRequestinventoryverificationResponse.prototype, "statusCode", void 0);
    return ContentLiasettingsRequestinventoryverificationResponse;
}(SpeakeasyBase));
export { ContentLiasettingsRequestinventoryverificationResponse };
