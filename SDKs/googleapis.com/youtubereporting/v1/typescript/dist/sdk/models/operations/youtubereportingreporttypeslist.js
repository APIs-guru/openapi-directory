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
var YoutubereportingReportTypesListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubereportingReportTypesListQueryParams, _super);
    function YoutubereportingReportTypesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubereportingReportTypesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubereportingReportTypesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubereportingReportTypesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubereportingReportTypesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubereportingReportTypesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeSystemManaged" }),
        __metadata("design:type", Boolean)
    ], YoutubereportingReportTypesListQueryParams.prototype, "includeSystemManaged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubereportingReportTypesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubereportingReportTypesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubereportingReportTypesListQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], YoutubereportingReportTypesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], YoutubereportingReportTypesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubereportingReportTypesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubereportingReportTypesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubereportingReportTypesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubereportingReportTypesListQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubereportingReportTypesListQueryParams;
}(SpeakeasyBase));
export { YoutubereportingReportTypesListQueryParams };
var YoutubereportingReportTypesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubereportingReportTypesListSecurityOption1, _super);
    function YoutubereportingReportTypesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubereportingReportTypesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubereportingReportTypesListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubereportingReportTypesListSecurityOption1;
}(SpeakeasyBase));
export { YoutubereportingReportTypesListSecurityOption1 };
var YoutubereportingReportTypesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubereportingReportTypesListSecurityOption2, _super);
    function YoutubereportingReportTypesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubereportingReportTypesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubereportingReportTypesListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubereportingReportTypesListSecurityOption2;
}(SpeakeasyBase));
export { YoutubereportingReportTypesListSecurityOption2 };
var YoutubereportingReportTypesListSecurity = /** @class */ (function (_super) {
    __extends(YoutubereportingReportTypesListSecurity, _super);
    function YoutubereportingReportTypesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubereportingReportTypesListSecurityOption1)
    ], YoutubereportingReportTypesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubereportingReportTypesListSecurityOption2)
    ], YoutubereportingReportTypesListSecurity.prototype, "option2", void 0);
    return YoutubereportingReportTypesListSecurity;
}(SpeakeasyBase));
export { YoutubereportingReportTypesListSecurity };
var YoutubereportingReportTypesListRequest = /** @class */ (function (_super) {
    __extends(YoutubereportingReportTypesListRequest, _super);
    function YoutubereportingReportTypesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubereportingReportTypesListQueryParams)
    ], YoutubereportingReportTypesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubereportingReportTypesListSecurity)
    ], YoutubereportingReportTypesListRequest.prototype, "security", void 0);
    return YoutubereportingReportTypesListRequest;
}(SpeakeasyBase));
export { YoutubereportingReportTypesListRequest };
var YoutubereportingReportTypesListResponse = /** @class */ (function (_super) {
    __extends(YoutubereportingReportTypesListResponse, _super);
    function YoutubereportingReportTypesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubereportingReportTypesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListReportTypesResponse)
    ], YoutubereportingReportTypesListResponse.prototype, "listReportTypesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubereportingReportTypesListResponse.prototype, "statusCode", void 0);
    return YoutubereportingReportTypesListResponse;
}(SpeakeasyBase));
export { YoutubereportingReportTypesListResponse };
