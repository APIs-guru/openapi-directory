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
var ResellerResellernotifyGetwatchdetailsQueryParams = /** @class */ (function (_super) {
    __extends(ResellerResellernotifyGetwatchdetailsQueryParams, _super);
    function ResellerResellernotifyGetwatchdetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyGetwatchdetailsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyGetwatchdetailsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyGetwatchdetailsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyGetwatchdetailsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyGetwatchdetailsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyGetwatchdetailsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyGetwatchdetailsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ResellerResellernotifyGetwatchdetailsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyGetwatchdetailsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyGetwatchdetailsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ResellerResellernotifyGetwatchdetailsQueryParams.prototype, "uploadProtocol", void 0);
    return ResellerResellernotifyGetwatchdetailsQueryParams;
}(SpeakeasyBase));
export { ResellerResellernotifyGetwatchdetailsQueryParams };
var ResellerResellernotifyGetwatchdetailsSecurityOption1 = /** @class */ (function (_super) {
    __extends(ResellerResellernotifyGetwatchdetailsSecurityOption1, _super);
    function ResellerResellernotifyGetwatchdetailsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResellerResellernotifyGetwatchdetailsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResellerResellernotifyGetwatchdetailsSecurityOption1.prototype, "oauth2c", void 0);
    return ResellerResellernotifyGetwatchdetailsSecurityOption1;
}(SpeakeasyBase));
export { ResellerResellernotifyGetwatchdetailsSecurityOption1 };
var ResellerResellernotifyGetwatchdetailsSecurityOption2 = /** @class */ (function (_super) {
    __extends(ResellerResellernotifyGetwatchdetailsSecurityOption2, _super);
    function ResellerResellernotifyGetwatchdetailsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResellerResellernotifyGetwatchdetailsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResellerResellernotifyGetwatchdetailsSecurityOption2.prototype, "oauth2c", void 0);
    return ResellerResellernotifyGetwatchdetailsSecurityOption2;
}(SpeakeasyBase));
export { ResellerResellernotifyGetwatchdetailsSecurityOption2 };
var ResellerResellernotifyGetwatchdetailsSecurity = /** @class */ (function (_super) {
    __extends(ResellerResellernotifyGetwatchdetailsSecurity, _super);
    function ResellerResellernotifyGetwatchdetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ResellerResellernotifyGetwatchdetailsSecurityOption1)
    ], ResellerResellernotifyGetwatchdetailsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ResellerResellernotifyGetwatchdetailsSecurityOption2)
    ], ResellerResellernotifyGetwatchdetailsSecurity.prototype, "option2", void 0);
    return ResellerResellernotifyGetwatchdetailsSecurity;
}(SpeakeasyBase));
export { ResellerResellernotifyGetwatchdetailsSecurity };
var ResellerResellernotifyGetwatchdetailsRequest = /** @class */ (function (_super) {
    __extends(ResellerResellernotifyGetwatchdetailsRequest, _super);
    function ResellerResellernotifyGetwatchdetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerResellernotifyGetwatchdetailsQueryParams)
    ], ResellerResellernotifyGetwatchdetailsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerResellernotifyGetwatchdetailsSecurity)
    ], ResellerResellernotifyGetwatchdetailsRequest.prototype, "security", void 0);
    return ResellerResellernotifyGetwatchdetailsRequest;
}(SpeakeasyBase));
export { ResellerResellernotifyGetwatchdetailsRequest };
var ResellerResellernotifyGetwatchdetailsResponse = /** @class */ (function (_super) {
    __extends(ResellerResellernotifyGetwatchdetailsResponse, _super);
    function ResellerResellernotifyGetwatchdetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ResellerResellernotifyGetwatchdetailsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ResellernotifyGetwatchdetailsResponse)
    ], ResellerResellernotifyGetwatchdetailsResponse.prototype, "resellernotifyGetwatchdetailsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ResellerResellernotifyGetwatchdetailsResponse.prototype, "statusCode", void 0);
    return ResellerResellernotifyGetwatchdetailsResponse;
}(SpeakeasyBase));
export { ResellerResellernotifyGetwatchdetailsResponse };
