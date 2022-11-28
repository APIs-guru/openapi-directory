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
var IapProjectsBrandsIdentityAwareProxyClientsListPathParams = /** @class */ (function (_super) {
    __extends(IapProjectsBrandsIdentityAwareProxyClientsListPathParams, _super);
    function IapProjectsBrandsIdentityAwareProxyClientsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsListPathParams.prototype, "parent", void 0);
    return IapProjectsBrandsIdentityAwareProxyClientsListPathParams;
}(SpeakeasyBase));
export { IapProjectsBrandsIdentityAwareProxyClientsListPathParams };
var IapProjectsBrandsIdentityAwareProxyClientsListQueryParams = /** @class */ (function (_super) {
    __extends(IapProjectsBrandsIdentityAwareProxyClientsListQueryParams, _super);
    function IapProjectsBrandsIdentityAwareProxyClientsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], IapProjectsBrandsIdentityAwareProxyClientsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IapProjectsBrandsIdentityAwareProxyClientsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsListQueryParams.prototype, "uploadProtocol", void 0);
    return IapProjectsBrandsIdentityAwareProxyClientsListQueryParams;
}(SpeakeasyBase));
export { IapProjectsBrandsIdentityAwareProxyClientsListQueryParams };
var IapProjectsBrandsIdentityAwareProxyClientsListSecurity = /** @class */ (function (_super) {
    __extends(IapProjectsBrandsIdentityAwareProxyClientsListSecurity, _super);
    function IapProjectsBrandsIdentityAwareProxyClientsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IapProjectsBrandsIdentityAwareProxyClientsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IapProjectsBrandsIdentityAwareProxyClientsListSecurity.prototype, "oauth2c", void 0);
    return IapProjectsBrandsIdentityAwareProxyClientsListSecurity;
}(SpeakeasyBase));
export { IapProjectsBrandsIdentityAwareProxyClientsListSecurity };
var IapProjectsBrandsIdentityAwareProxyClientsListRequest = /** @class */ (function (_super) {
    __extends(IapProjectsBrandsIdentityAwareProxyClientsListRequest, _super);
    function IapProjectsBrandsIdentityAwareProxyClientsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IapProjectsBrandsIdentityAwareProxyClientsListPathParams)
    ], IapProjectsBrandsIdentityAwareProxyClientsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IapProjectsBrandsIdentityAwareProxyClientsListQueryParams)
    ], IapProjectsBrandsIdentityAwareProxyClientsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IapProjectsBrandsIdentityAwareProxyClientsListSecurity)
    ], IapProjectsBrandsIdentityAwareProxyClientsListRequest.prototype, "security", void 0);
    return IapProjectsBrandsIdentityAwareProxyClientsListRequest;
}(SpeakeasyBase));
export { IapProjectsBrandsIdentityAwareProxyClientsListRequest };
var IapProjectsBrandsIdentityAwareProxyClientsListResponse = /** @class */ (function (_super) {
    __extends(IapProjectsBrandsIdentityAwareProxyClientsListResponse, _super);
    function IapProjectsBrandsIdentityAwareProxyClientsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListIdentityAwareProxyClientsResponse)
    ], IapProjectsBrandsIdentityAwareProxyClientsListResponse.prototype, "listIdentityAwareProxyClientsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IapProjectsBrandsIdentityAwareProxyClientsListResponse.prototype, "statusCode", void 0);
    return IapProjectsBrandsIdentityAwareProxyClientsListResponse;
}(SpeakeasyBase));
export { IapProjectsBrandsIdentityAwareProxyClientsListResponse };
