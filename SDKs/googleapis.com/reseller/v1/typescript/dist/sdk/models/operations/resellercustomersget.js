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
var ResellerCustomersGetPathParams = /** @class */ (function (_super) {
    __extends(ResellerCustomersGetPathParams, _super);
    function ResellerCustomersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], ResellerCustomersGetPathParams.prototype, "customerId", void 0);
    return ResellerCustomersGetPathParams;
}(SpeakeasyBase));
export { ResellerCustomersGetPathParams };
var ResellerCustomersGetQueryParams = /** @class */ (function (_super) {
    __extends(ResellerCustomersGetQueryParams, _super);
    function ResellerCustomersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ResellerCustomersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ResellerCustomersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ResellerCustomersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ResellerCustomersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ResellerCustomersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ResellerCustomersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ResellerCustomersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ResellerCustomersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ResellerCustomersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ResellerCustomersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ResellerCustomersGetQueryParams.prototype, "uploadProtocol", void 0);
    return ResellerCustomersGetQueryParams;
}(SpeakeasyBase));
export { ResellerCustomersGetQueryParams };
var ResellerCustomersGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ResellerCustomersGetSecurityOption1, _super);
    function ResellerCustomersGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResellerCustomersGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResellerCustomersGetSecurityOption1.prototype, "oauth2c", void 0);
    return ResellerCustomersGetSecurityOption1;
}(SpeakeasyBase));
export { ResellerCustomersGetSecurityOption1 };
var ResellerCustomersGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ResellerCustomersGetSecurityOption2, _super);
    function ResellerCustomersGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResellerCustomersGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResellerCustomersGetSecurityOption2.prototype, "oauth2c", void 0);
    return ResellerCustomersGetSecurityOption2;
}(SpeakeasyBase));
export { ResellerCustomersGetSecurityOption2 };
var ResellerCustomersGetSecurity = /** @class */ (function (_super) {
    __extends(ResellerCustomersGetSecurity, _super);
    function ResellerCustomersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ResellerCustomersGetSecurityOption1)
    ], ResellerCustomersGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ResellerCustomersGetSecurityOption2)
    ], ResellerCustomersGetSecurity.prototype, "option2", void 0);
    return ResellerCustomersGetSecurity;
}(SpeakeasyBase));
export { ResellerCustomersGetSecurity };
var ResellerCustomersGetRequest = /** @class */ (function (_super) {
    __extends(ResellerCustomersGetRequest, _super);
    function ResellerCustomersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResellerCustomersGetPathParams)
    ], ResellerCustomersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResellerCustomersGetQueryParams)
    ], ResellerCustomersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResellerCustomersGetSecurity)
    ], ResellerCustomersGetRequest.prototype, "security", void 0);
    return ResellerCustomersGetRequest;
}(SpeakeasyBase));
export { ResellerCustomersGetRequest };
var ResellerCustomersGetResponse = /** @class */ (function (_super) {
    __extends(ResellerCustomersGetResponse, _super);
    function ResellerCustomersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResellerCustomersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Customer)
    ], ResellerCustomersGetResponse.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResellerCustomersGetResponse.prototype, "statusCode", void 0);
    return ResellerCustomersGetResponse;
}(SpeakeasyBase));
export { ResellerCustomersGetResponse };
