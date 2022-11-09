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
var VaultMattersExportsListPathParams = /** @class */ (function (_super) {
    __extends(VaultMattersExportsListPathParams, _super);
    function VaultMattersExportsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=matterId" }),
        __metadata("design:type", String)
    ], VaultMattersExportsListPathParams.prototype, "matterId", void 0);
    return VaultMattersExportsListPathParams;
}(SpeakeasyBase));
export { VaultMattersExportsListPathParams };
var VaultMattersExportsListQueryParams = /** @class */ (function (_super) {
    __extends(VaultMattersExportsListQueryParams, _super);
    function VaultMattersExportsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VaultMattersExportsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VaultMattersExportsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VaultMattersExportsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VaultMattersExportsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VaultMattersExportsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VaultMattersExportsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VaultMattersExportsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], VaultMattersExportsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], VaultMattersExportsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VaultMattersExportsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VaultMattersExportsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VaultMattersExportsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VaultMattersExportsListQueryParams.prototype, "uploadProtocol", void 0);
    return VaultMattersExportsListQueryParams;
}(SpeakeasyBase));
export { VaultMattersExportsListQueryParams };
var VaultMattersExportsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(VaultMattersExportsListSecurityOption1, _super);
    function VaultMattersExportsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersExportsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersExportsListSecurityOption1.prototype, "oauth2c", void 0);
    return VaultMattersExportsListSecurityOption1;
}(SpeakeasyBase));
export { VaultMattersExportsListSecurityOption1 };
var VaultMattersExportsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(VaultMattersExportsListSecurityOption2, _super);
    function VaultMattersExportsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersExportsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersExportsListSecurityOption2.prototype, "oauth2c", void 0);
    return VaultMattersExportsListSecurityOption2;
}(SpeakeasyBase));
export { VaultMattersExportsListSecurityOption2 };
var VaultMattersExportsListSecurity = /** @class */ (function (_super) {
    __extends(VaultMattersExportsListSecurity, _super);
    function VaultMattersExportsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersExportsListSecurityOption1)
    ], VaultMattersExportsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersExportsListSecurityOption2)
    ], VaultMattersExportsListSecurity.prototype, "option2", void 0);
    return VaultMattersExportsListSecurity;
}(SpeakeasyBase));
export { VaultMattersExportsListSecurity };
var VaultMattersExportsListRequest = /** @class */ (function (_super) {
    __extends(VaultMattersExportsListRequest, _super);
    function VaultMattersExportsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", VaultMattersExportsListPathParams)
    ], VaultMattersExportsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VaultMattersExportsListQueryParams)
    ], VaultMattersExportsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VaultMattersExportsListSecurity)
    ], VaultMattersExportsListRequest.prototype, "security", void 0);
    return VaultMattersExportsListRequest;
}(SpeakeasyBase));
export { VaultMattersExportsListRequest };
var VaultMattersExportsListResponse = /** @class */ (function (_super) {
    __extends(VaultMattersExportsListResponse, _super);
    function VaultMattersExportsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], VaultMattersExportsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListExportsResponse)
    ], VaultMattersExportsListResponse.prototype, "listExportsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], VaultMattersExportsListResponse.prototype, "statusCode", void 0);
    return VaultMattersExportsListResponse;
}(SpeakeasyBase));
export { VaultMattersExportsListResponse };
