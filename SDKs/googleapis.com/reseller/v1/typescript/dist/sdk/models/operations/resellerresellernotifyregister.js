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
var ResellerResellernotifyRegisterQueryParams = /** @class */ (function (_super) {
    __extends(ResellerResellernotifyRegisterQueryParams, _super);
    function ResellerResellernotifyRegisterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyRegisterQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyRegisterQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyRegisterQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyRegisterQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyRegisterQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyRegisterQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyRegisterQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ResellerResellernotifyRegisterQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyRegisterQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceAccountEmailAddress" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyRegisterQueryParams.prototype, "serviceAccountEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyRegisterQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyRegisterQueryParams.prototype, "uploadProtocol", void 0);
    return ResellerResellernotifyRegisterQueryParams;
}(SpeakeasyBase));
export { ResellerResellernotifyRegisterQueryParams };
var ResellerResellernotifyRegisterSecurity = /** @class */ (function (_super) {
    __extends(ResellerResellernotifyRegisterSecurity, _super);
    function ResellerResellernotifyRegisterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResellerResellernotifyRegisterSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResellerResellernotifyRegisterSecurity.prototype, "oauth2c", void 0);
    return ResellerResellernotifyRegisterSecurity;
}(SpeakeasyBase));
export { ResellerResellernotifyRegisterSecurity };
var ResellerResellernotifyRegisterRequest = /** @class */ (function (_super) {
    __extends(ResellerResellernotifyRegisterRequest, _super);
    function ResellerResellernotifyRegisterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResellerResellernotifyRegisterQueryParams)
    ], ResellerResellernotifyRegisterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResellerResellernotifyRegisterSecurity)
    ], ResellerResellernotifyRegisterRequest.prototype, "security", void 0);
    return ResellerResellernotifyRegisterRequest;
}(SpeakeasyBase));
export { ResellerResellernotifyRegisterRequest };
var ResellerResellernotifyRegisterResponse = /** @class */ (function (_super) {
    __extends(ResellerResellernotifyRegisterResponse, _super);
    function ResellerResellernotifyRegisterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResellerResellernotifyRegisterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResellernotifyResource)
    ], ResellerResellernotifyRegisterResponse.prototype, "resellernotifyResource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResellerResellernotifyRegisterResponse.prototype, "statusCode", void 0);
    return ResellerResellernotifyRegisterResponse;
}(SpeakeasyBase));
export { ResellerResellernotifyRegisterResponse };
