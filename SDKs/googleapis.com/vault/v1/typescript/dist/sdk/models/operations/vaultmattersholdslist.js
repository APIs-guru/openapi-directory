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
var VaultMattersHoldsListPathParams = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsListPathParams, _super);
    function VaultMattersHoldsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=matterId" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsListPathParams.prototype, "matterId", void 0);
    return VaultMattersHoldsListPathParams;
}(SpeakeasyBase));
export { VaultMattersHoldsListPathParams };
export var VaultMattersHoldsListViewEnum;
(function (VaultMattersHoldsListViewEnum) {
    VaultMattersHoldsListViewEnum["HoldViewUnspecified"] = "HOLD_VIEW_UNSPECIFIED";
    VaultMattersHoldsListViewEnum["BasicHold"] = "BASIC_HOLD";
    VaultMattersHoldsListViewEnum["FullHold"] = "FULL_HOLD";
})(VaultMattersHoldsListViewEnum || (VaultMattersHoldsListViewEnum = {}));
var VaultMattersHoldsListQueryParams = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsListQueryParams, _super);
    function VaultMattersHoldsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], VaultMattersHoldsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VaultMattersHoldsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsListQueryParams.prototype, "view", void 0);
    return VaultMattersHoldsListQueryParams;
}(SpeakeasyBase));
export { VaultMattersHoldsListQueryParams };
var VaultMattersHoldsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsListSecurityOption1, _super);
    function VaultMattersHoldsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersHoldsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersHoldsListSecurityOption1.prototype, "oauth2c", void 0);
    return VaultMattersHoldsListSecurityOption1;
}(SpeakeasyBase));
export { VaultMattersHoldsListSecurityOption1 };
var VaultMattersHoldsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsListSecurityOption2, _super);
    function VaultMattersHoldsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersHoldsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersHoldsListSecurityOption2.prototype, "oauth2c", void 0);
    return VaultMattersHoldsListSecurityOption2;
}(SpeakeasyBase));
export { VaultMattersHoldsListSecurityOption2 };
var VaultMattersHoldsListSecurity = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsListSecurity, _super);
    function VaultMattersHoldsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersHoldsListSecurityOption1)
    ], VaultMattersHoldsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersHoldsListSecurityOption2)
    ], VaultMattersHoldsListSecurity.prototype, "option2", void 0);
    return VaultMattersHoldsListSecurity;
}(SpeakeasyBase));
export { VaultMattersHoldsListSecurity };
var VaultMattersHoldsListRequest = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsListRequest, _super);
    function VaultMattersHoldsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersHoldsListPathParams)
    ], VaultMattersHoldsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersHoldsListQueryParams)
    ], VaultMattersHoldsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersHoldsListSecurity)
    ], VaultMattersHoldsListRequest.prototype, "security", void 0);
    return VaultMattersHoldsListRequest;
}(SpeakeasyBase));
export { VaultMattersHoldsListRequest };
var VaultMattersHoldsListResponse = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsListResponse, _super);
    function VaultMattersHoldsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VaultMattersHoldsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListHoldsResponse)
    ], VaultMattersHoldsListResponse.prototype, "listHoldsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VaultMattersHoldsListResponse.prototype, "statusCode", void 0);
    return VaultMattersHoldsListResponse;
}(SpeakeasyBase));
export { VaultMattersHoldsListResponse };
