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
var ContentAccountsRequestphoneverificationPathParams = /** @class */ (function (_super) {
    __extends(ContentAccountsRequestphoneverificationPathParams, _super);
    function ContentAccountsRequestphoneverificationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ContentAccountsRequestphoneverificationPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentAccountsRequestphoneverificationPathParams.prototype, "merchantId", void 0);
    return ContentAccountsRequestphoneverificationPathParams;
}(SpeakeasyBase));
export { ContentAccountsRequestphoneverificationPathParams };
var ContentAccountsRequestphoneverificationQueryParams = /** @class */ (function (_super) {
    __extends(ContentAccountsRequestphoneverificationQueryParams, _super);
    function ContentAccountsRequestphoneverificationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentAccountsRequestphoneverificationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentAccountsRequestphoneverificationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentAccountsRequestphoneverificationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentAccountsRequestphoneverificationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentAccountsRequestphoneverificationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentAccountsRequestphoneverificationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentAccountsRequestphoneverificationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentAccountsRequestphoneverificationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentAccountsRequestphoneverificationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentAccountsRequestphoneverificationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentAccountsRequestphoneverificationQueryParams.prototype, "uploadProtocol", void 0);
    return ContentAccountsRequestphoneverificationQueryParams;
}(SpeakeasyBase));
export { ContentAccountsRequestphoneverificationQueryParams };
var ContentAccountsRequestphoneverificationSecurity = /** @class */ (function (_super) {
    __extends(ContentAccountsRequestphoneverificationSecurity, _super);
    function ContentAccountsRequestphoneverificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentAccountsRequestphoneverificationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentAccountsRequestphoneverificationSecurity.prototype, "oauth2c", void 0);
    return ContentAccountsRequestphoneverificationSecurity;
}(SpeakeasyBase));
export { ContentAccountsRequestphoneverificationSecurity };
var ContentAccountsRequestphoneverificationRequest = /** @class */ (function (_super) {
    __extends(ContentAccountsRequestphoneverificationRequest, _super);
    function ContentAccountsRequestphoneverificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsRequestphoneverificationPathParams)
    ], ContentAccountsRequestphoneverificationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsRequestphoneverificationQueryParams)
    ], ContentAccountsRequestphoneverificationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RequestPhoneVerificationRequest)
    ], ContentAccountsRequestphoneverificationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsRequestphoneverificationSecurity)
    ], ContentAccountsRequestphoneverificationRequest.prototype, "security", void 0);
    return ContentAccountsRequestphoneverificationRequest;
}(SpeakeasyBase));
export { ContentAccountsRequestphoneverificationRequest };
var ContentAccountsRequestphoneverificationResponse = /** @class */ (function (_super) {
    __extends(ContentAccountsRequestphoneverificationResponse, _super);
    function ContentAccountsRequestphoneverificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentAccountsRequestphoneverificationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RequestPhoneVerificationResponse)
    ], ContentAccountsRequestphoneverificationResponse.prototype, "requestPhoneVerificationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentAccountsRequestphoneverificationResponse.prototype, "statusCode", void 0);
    return ContentAccountsRequestphoneverificationResponse;
}(SpeakeasyBase));
export { ContentAccountsRequestphoneverificationResponse };
