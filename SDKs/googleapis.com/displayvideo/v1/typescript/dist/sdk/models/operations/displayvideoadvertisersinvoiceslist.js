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
var DisplayvideoAdvertisersInvoicesListPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInvoicesListPathParams, _super);
    function DisplayvideoAdvertisersInvoicesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesListPathParams.prototype, "advertiserId", void 0);
    return DisplayvideoAdvertisersInvoicesListPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInvoicesListPathParams };
export var DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum;
(function (DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum) {
    DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum["LoiSapinInvoiceTypeUnspecified"] = "LOI_SAPIN_INVOICE_TYPE_UNSPECIFIED";
    DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum["LoiSapinInvoiceTypeMedia"] = "LOI_SAPIN_INVOICE_TYPE_MEDIA";
    DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum["LoiSapinInvoiceTypePlatform"] = "LOI_SAPIN_INVOICE_TYPE_PLATFORM";
})(DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum || (DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum = {}));
var DisplayvideoAdvertisersInvoicesListQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInvoicesListQueryParams, _super);
    function DisplayvideoAdvertisersInvoicesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=issueMonth" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesListQueryParams.prototype, "issueMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=loiSapinInvoiceType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesListQueryParams.prototype, "loiSapinInvoiceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersInvoicesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersInvoicesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesListQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersInvoicesListQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInvoicesListQueryParams };
var DisplayvideoAdvertisersInvoicesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInvoicesListSecurityOption1, _super);
    function DisplayvideoAdvertisersInvoicesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersInvoicesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersInvoicesListSecurityOption1.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersInvoicesListSecurityOption1;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInvoicesListSecurityOption1 };
var DisplayvideoAdvertisersInvoicesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInvoicesListSecurityOption2, _super);
    function DisplayvideoAdvertisersInvoicesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersInvoicesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersInvoicesListSecurityOption2.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersInvoicesListSecurityOption2;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInvoicesListSecurityOption2 };
var DisplayvideoAdvertisersInvoicesListSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInvoicesListSecurity, _super);
    function DisplayvideoAdvertisersInvoicesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoAdvertisersInvoicesListSecurityOption1)
    ], DisplayvideoAdvertisersInvoicesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoAdvertisersInvoicesListSecurityOption2)
    ], DisplayvideoAdvertisersInvoicesListSecurity.prototype, "option2", void 0);
    return DisplayvideoAdvertisersInvoicesListSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInvoicesListSecurity };
var DisplayvideoAdvertisersInvoicesListRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInvoicesListRequest, _super);
    function DisplayvideoAdvertisersInvoicesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInvoicesListPathParams)
    ], DisplayvideoAdvertisersInvoicesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInvoicesListQueryParams)
    ], DisplayvideoAdvertisersInvoicesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInvoicesListSecurity)
    ], DisplayvideoAdvertisersInvoicesListRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersInvoicesListRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInvoicesListRequest };
var DisplayvideoAdvertisersInvoicesListResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInvoicesListResponse, _super);
    function DisplayvideoAdvertisersInvoicesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListInvoicesResponse)
    ], DisplayvideoAdvertisersInvoicesListResponse.prototype, "listInvoicesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersInvoicesListResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersInvoicesListResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInvoicesListResponse };
