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
var ContentLiasettingsRequestgmbaccessPathParams = /** @class */ (function (_super) {
    __extends(ContentLiasettingsRequestgmbaccessPathParams, _super);
    function ContentLiasettingsRequestgmbaccessPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestgmbaccessPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestgmbaccessPathParams.prototype, "merchantId", void 0);
    return ContentLiasettingsRequestgmbaccessPathParams;
}(SpeakeasyBase));
export { ContentLiasettingsRequestgmbaccessPathParams };
var ContentLiasettingsRequestgmbaccessQueryParams = /** @class */ (function (_super) {
    __extends(ContentLiasettingsRequestgmbaccessQueryParams, _super);
    function ContentLiasettingsRequestgmbaccessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestgmbaccessQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestgmbaccessQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestgmbaccessQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestgmbaccessQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestgmbaccessQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gmbEmail" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestgmbaccessQueryParams.prototype, "gmbEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestgmbaccessQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestgmbaccessQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentLiasettingsRequestgmbaccessQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestgmbaccessQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestgmbaccessQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestgmbaccessQueryParams.prototype, "uploadProtocol", void 0);
    return ContentLiasettingsRequestgmbaccessQueryParams;
}(SpeakeasyBase));
export { ContentLiasettingsRequestgmbaccessQueryParams };
var ContentLiasettingsRequestgmbaccessSecurity = /** @class */ (function (_super) {
    __extends(ContentLiasettingsRequestgmbaccessSecurity, _super);
    function ContentLiasettingsRequestgmbaccessSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentLiasettingsRequestgmbaccessSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentLiasettingsRequestgmbaccessSecurity.prototype, "oauth2c", void 0);
    return ContentLiasettingsRequestgmbaccessSecurity;
}(SpeakeasyBase));
export { ContentLiasettingsRequestgmbaccessSecurity };
var ContentLiasettingsRequestgmbaccessRequest = /** @class */ (function (_super) {
    __extends(ContentLiasettingsRequestgmbaccessRequest, _super);
    function ContentLiasettingsRequestgmbaccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentLiasettingsRequestgmbaccessPathParams)
    ], ContentLiasettingsRequestgmbaccessRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentLiasettingsRequestgmbaccessQueryParams)
    ], ContentLiasettingsRequestgmbaccessRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentLiasettingsRequestgmbaccessSecurity)
    ], ContentLiasettingsRequestgmbaccessRequest.prototype, "security", void 0);
    return ContentLiasettingsRequestgmbaccessRequest;
}(SpeakeasyBase));
export { ContentLiasettingsRequestgmbaccessRequest };
var ContentLiasettingsRequestgmbaccessResponse = /** @class */ (function (_super) {
    __extends(ContentLiasettingsRequestgmbaccessResponse, _super);
    function ContentLiasettingsRequestgmbaccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentLiasettingsRequestgmbaccessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiasettingsRequestGmbAccessResponse)
    ], ContentLiasettingsRequestgmbaccessResponse.prototype, "liasettingsRequestGmbAccessResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentLiasettingsRequestgmbaccessResponse.prototype, "statusCode", void 0);
    return ContentLiasettingsRequestgmbaccessResponse;
}(SpeakeasyBase));
export { ContentLiasettingsRequestgmbaccessResponse };
