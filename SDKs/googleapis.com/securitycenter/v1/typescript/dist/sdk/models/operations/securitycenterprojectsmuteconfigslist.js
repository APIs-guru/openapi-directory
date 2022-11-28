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
var SecuritycenterProjectsMuteConfigsListPathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsMuteConfigsListPathParams, _super);
    function SecuritycenterProjectsMuteConfigsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsListPathParams.prototype, "parent", void 0);
    return SecuritycenterProjectsMuteConfigsListPathParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsMuteConfigsListPathParams };
var SecuritycenterProjectsMuteConfigsListQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsMuteConfigsListQueryParams, _super);
    function SecuritycenterProjectsMuteConfigsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SecuritycenterProjectsMuteConfigsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterProjectsMuteConfigsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsListQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterProjectsMuteConfigsListQueryParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsMuteConfigsListQueryParams };
var SecuritycenterProjectsMuteConfigsListSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsMuteConfigsListSecurity, _super);
    function SecuritycenterProjectsMuteConfigsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterProjectsMuteConfigsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterProjectsMuteConfigsListSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterProjectsMuteConfigsListSecurity;
}(SpeakeasyBase));
export { SecuritycenterProjectsMuteConfigsListSecurity };
var SecuritycenterProjectsMuteConfigsListRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsMuteConfigsListRequest, _super);
    function SecuritycenterProjectsMuteConfigsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsMuteConfigsListPathParams)
    ], SecuritycenterProjectsMuteConfigsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsMuteConfigsListQueryParams)
    ], SecuritycenterProjectsMuteConfigsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsMuteConfigsListSecurity)
    ], SecuritycenterProjectsMuteConfigsListRequest.prototype, "security", void 0);
    return SecuritycenterProjectsMuteConfigsListRequest;
}(SpeakeasyBase));
export { SecuritycenterProjectsMuteConfigsListRequest };
var SecuritycenterProjectsMuteConfigsListResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsMuteConfigsListResponse, _super);
    function SecuritycenterProjectsMuteConfigsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListMuteConfigsResponse)
    ], SecuritycenterProjectsMuteConfigsListResponse.prototype, "listMuteConfigsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecuritycenterProjectsMuteConfigsListResponse.prototype, "statusCode", void 0);
    return SecuritycenterProjectsMuteConfigsListResponse;
}(SpeakeasyBase));
export { SecuritycenterProjectsMuteConfigsListResponse };
