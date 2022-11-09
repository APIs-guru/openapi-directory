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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var FcmdataProjectsAndroidAppsDeliveryDataListPathParams = /** @class */ (function (_super) {
    __extends(FcmdataProjectsAndroidAppsDeliveryDataListPathParams, _super);
    function FcmdataProjectsAndroidAppsDeliveryDataListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FcmdataProjectsAndroidAppsDeliveryDataListPathParams.prototype, "parent", void 0);
    return FcmdataProjectsAndroidAppsDeliveryDataListPathParams;
}(SpeakeasyBase));
export { FcmdataProjectsAndroidAppsDeliveryDataListPathParams };
var FcmdataProjectsAndroidAppsDeliveryDataListQueryParams = /** @class */ (function (_super) {
    __extends(FcmdataProjectsAndroidAppsDeliveryDataListQueryParams, _super);
    function FcmdataProjectsAndroidAppsDeliveryDataListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FcmdataProjectsAndroidAppsDeliveryDataListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FcmdataProjectsAndroidAppsDeliveryDataListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FcmdataProjectsAndroidAppsDeliveryDataListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FcmdataProjectsAndroidAppsDeliveryDataListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FcmdataProjectsAndroidAppsDeliveryDataListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FcmdataProjectsAndroidAppsDeliveryDataListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FcmdataProjectsAndroidAppsDeliveryDataListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FcmdataProjectsAndroidAppsDeliveryDataListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FcmdataProjectsAndroidAppsDeliveryDataListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FcmdataProjectsAndroidAppsDeliveryDataListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FcmdataProjectsAndroidAppsDeliveryDataListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FcmdataProjectsAndroidAppsDeliveryDataListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FcmdataProjectsAndroidAppsDeliveryDataListQueryParams.prototype, "uploadProtocol", void 0);
    return FcmdataProjectsAndroidAppsDeliveryDataListQueryParams;
}(SpeakeasyBase));
export { FcmdataProjectsAndroidAppsDeliveryDataListQueryParams };
var FcmdataProjectsAndroidAppsDeliveryDataListSecurity = /** @class */ (function (_super) {
    __extends(FcmdataProjectsAndroidAppsDeliveryDataListSecurity, _super);
    function FcmdataProjectsAndroidAppsDeliveryDataListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FcmdataProjectsAndroidAppsDeliveryDataListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FcmdataProjectsAndroidAppsDeliveryDataListSecurity.prototype, "oauth2c", void 0);
    return FcmdataProjectsAndroidAppsDeliveryDataListSecurity;
}(SpeakeasyBase));
export { FcmdataProjectsAndroidAppsDeliveryDataListSecurity };
var FcmdataProjectsAndroidAppsDeliveryDataListRequest = /** @class */ (function (_super) {
    __extends(FcmdataProjectsAndroidAppsDeliveryDataListRequest, _super);
    function FcmdataProjectsAndroidAppsDeliveryDataListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FcmdataProjectsAndroidAppsDeliveryDataListPathParams)
    ], FcmdataProjectsAndroidAppsDeliveryDataListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FcmdataProjectsAndroidAppsDeliveryDataListQueryParams)
    ], FcmdataProjectsAndroidAppsDeliveryDataListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FcmdataProjectsAndroidAppsDeliveryDataListSecurity)
    ], FcmdataProjectsAndroidAppsDeliveryDataListRequest.prototype, "security", void 0);
    return FcmdataProjectsAndroidAppsDeliveryDataListRequest;
}(SpeakeasyBase));
export { FcmdataProjectsAndroidAppsDeliveryDataListRequest };
var FcmdataProjectsAndroidAppsDeliveryDataListResponse = /** @class */ (function (_super) {
    __extends(FcmdataProjectsAndroidAppsDeliveryDataListResponse, _super);
    function FcmdataProjectsAndroidAppsDeliveryDataListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FcmdataProjectsAndroidAppsDeliveryDataListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse)
    ], FcmdataProjectsAndroidAppsDeliveryDataListResponse.prototype, "googleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FcmdataProjectsAndroidAppsDeliveryDataListResponse.prototype, "statusCode", void 0);
    return FcmdataProjectsAndroidAppsDeliveryDataListResponse;
}(SpeakeasyBase));
export { FcmdataProjectsAndroidAppsDeliveryDataListResponse };
