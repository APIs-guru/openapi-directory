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
var ContentLiasettingsSetposdataproviderPathParams = /** @class */ (function (_super) {
    __extends(ContentLiasettingsSetposdataproviderPathParams, _super);
    function ContentLiasettingsSetposdataproviderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderPathParams.prototype, "merchantId", void 0);
    return ContentLiasettingsSetposdataproviderPathParams;
}(SpeakeasyBase));
export { ContentLiasettingsSetposdataproviderPathParams };
var ContentLiasettingsSetposdataproviderQueryParams = /** @class */ (function (_super) {
    __extends(ContentLiasettingsSetposdataproviderQueryParams, _super);
    function ContentLiasettingsSetposdataproviderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=posDataProviderId" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderQueryParams.prototype, "posDataProviderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=posExternalAccountId" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderQueryParams.prototype, "posExternalAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentLiasettingsSetposdataproviderQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderQueryParams.prototype, "uploadProtocol", void 0);
    return ContentLiasettingsSetposdataproviderQueryParams;
}(SpeakeasyBase));
export { ContentLiasettingsSetposdataproviderQueryParams };
var ContentLiasettingsSetposdataproviderSecurity = /** @class */ (function (_super) {
    __extends(ContentLiasettingsSetposdataproviderSecurity, _super);
    function ContentLiasettingsSetposdataproviderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentLiasettingsSetposdataproviderSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentLiasettingsSetposdataproviderSecurity.prototype, "oauth2c", void 0);
    return ContentLiasettingsSetposdataproviderSecurity;
}(SpeakeasyBase));
export { ContentLiasettingsSetposdataproviderSecurity };
var ContentLiasettingsSetposdataproviderRequest = /** @class */ (function (_super) {
    __extends(ContentLiasettingsSetposdataproviderRequest, _super);
    function ContentLiasettingsSetposdataproviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentLiasettingsSetposdataproviderPathParams)
    ], ContentLiasettingsSetposdataproviderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentLiasettingsSetposdataproviderQueryParams)
    ], ContentLiasettingsSetposdataproviderRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentLiasettingsSetposdataproviderSecurity)
    ], ContentLiasettingsSetposdataproviderRequest.prototype, "security", void 0);
    return ContentLiasettingsSetposdataproviderRequest;
}(SpeakeasyBase));
export { ContentLiasettingsSetposdataproviderRequest };
var ContentLiasettingsSetposdataproviderResponse = /** @class */ (function (_super) {
    __extends(ContentLiasettingsSetposdataproviderResponse, _super);
    function ContentLiasettingsSetposdataproviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentLiasettingsSetposdataproviderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiasettingsSetPosDataProviderResponse)
    ], ContentLiasettingsSetposdataproviderResponse.prototype, "liasettingsSetPosDataProviderResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentLiasettingsSetposdataproviderResponse.prototype, "statusCode", void 0);
    return ContentLiasettingsSetposdataproviderResponse;
}(SpeakeasyBase));
export { ContentLiasettingsSetposdataproviderResponse };
