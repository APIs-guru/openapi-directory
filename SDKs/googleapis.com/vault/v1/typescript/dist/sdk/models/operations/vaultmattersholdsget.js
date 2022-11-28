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
var VaultMattersHoldsGetPathParams = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsGetPathParams, _super);
    function VaultMattersHoldsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=holdId" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsGetPathParams.prototype, "holdId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=matterId" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsGetPathParams.prototype, "matterId", void 0);
    return VaultMattersHoldsGetPathParams;
}(SpeakeasyBase));
export { VaultMattersHoldsGetPathParams };
export var VaultMattersHoldsGetViewEnum;
(function (VaultMattersHoldsGetViewEnum) {
    VaultMattersHoldsGetViewEnum["HoldViewUnspecified"] = "HOLD_VIEW_UNSPECIFIED";
    VaultMattersHoldsGetViewEnum["BasicHold"] = "BASIC_HOLD";
    VaultMattersHoldsGetViewEnum["FullHold"] = "FULL_HOLD";
})(VaultMattersHoldsGetViewEnum || (VaultMattersHoldsGetViewEnum = {}));
var VaultMattersHoldsGetQueryParams = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsGetQueryParams, _super);
    function VaultMattersHoldsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VaultMattersHoldsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsGetQueryParams.prototype, "view", void 0);
    return VaultMattersHoldsGetQueryParams;
}(SpeakeasyBase));
export { VaultMattersHoldsGetQueryParams };
var VaultMattersHoldsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsGetSecurityOption1, _super);
    function VaultMattersHoldsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersHoldsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersHoldsGetSecurityOption1.prototype, "oauth2c", void 0);
    return VaultMattersHoldsGetSecurityOption1;
}(SpeakeasyBase));
export { VaultMattersHoldsGetSecurityOption1 };
var VaultMattersHoldsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsGetSecurityOption2, _super);
    function VaultMattersHoldsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersHoldsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersHoldsGetSecurityOption2.prototype, "oauth2c", void 0);
    return VaultMattersHoldsGetSecurityOption2;
}(SpeakeasyBase));
export { VaultMattersHoldsGetSecurityOption2 };
var VaultMattersHoldsGetSecurity = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsGetSecurity, _super);
    function VaultMattersHoldsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersHoldsGetSecurityOption1)
    ], VaultMattersHoldsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersHoldsGetSecurityOption2)
    ], VaultMattersHoldsGetSecurity.prototype, "option2", void 0);
    return VaultMattersHoldsGetSecurity;
}(SpeakeasyBase));
export { VaultMattersHoldsGetSecurity };
var VaultMattersHoldsGetRequest = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsGetRequest, _super);
    function VaultMattersHoldsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersHoldsGetPathParams)
    ], VaultMattersHoldsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersHoldsGetQueryParams)
    ], VaultMattersHoldsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersHoldsGetSecurity)
    ], VaultMattersHoldsGetRequest.prototype, "security", void 0);
    return VaultMattersHoldsGetRequest;
}(SpeakeasyBase));
export { VaultMattersHoldsGetRequest };
var VaultMattersHoldsGetResponse = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsGetResponse, _super);
    function VaultMattersHoldsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VaultMattersHoldsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Hold)
    ], VaultMattersHoldsGetResponse.prototype, "hold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VaultMattersHoldsGetResponse.prototype, "statusCode", void 0);
    return VaultMattersHoldsGetResponse;
}(SpeakeasyBase));
export { VaultMattersHoldsGetResponse };
