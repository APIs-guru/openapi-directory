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
var GenomicsWorkersCheckInPathParams = /** @class */ (function (_super) {
    __extends(GenomicsWorkersCheckInPathParams, _super);
    function GenomicsWorkersCheckInPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GenomicsWorkersCheckInPathParams.prototype, "id", void 0);
    return GenomicsWorkersCheckInPathParams;
}(SpeakeasyBase));
export { GenomicsWorkersCheckInPathParams };
var GenomicsWorkersCheckInQueryParams = /** @class */ (function (_super) {
    __extends(GenomicsWorkersCheckInQueryParams, _super);
    function GenomicsWorkersCheckInQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GenomicsWorkersCheckInQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GenomicsWorkersCheckInQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GenomicsWorkersCheckInQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GenomicsWorkersCheckInQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GenomicsWorkersCheckInQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GenomicsWorkersCheckInQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GenomicsWorkersCheckInQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GenomicsWorkersCheckInQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GenomicsWorkersCheckInQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GenomicsWorkersCheckInQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GenomicsWorkersCheckInQueryParams.prototype, "uploadProtocol", void 0);
    return GenomicsWorkersCheckInQueryParams;
}(SpeakeasyBase));
export { GenomicsWorkersCheckInQueryParams };
var GenomicsWorkersCheckInSecurityOption1 = /** @class */ (function (_super) {
    __extends(GenomicsWorkersCheckInSecurityOption1, _super);
    function GenomicsWorkersCheckInSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GenomicsWorkersCheckInSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GenomicsWorkersCheckInSecurityOption1.prototype, "oauth2c", void 0);
    return GenomicsWorkersCheckInSecurityOption1;
}(SpeakeasyBase));
export { GenomicsWorkersCheckInSecurityOption1 };
var GenomicsWorkersCheckInSecurityOption2 = /** @class */ (function (_super) {
    __extends(GenomicsWorkersCheckInSecurityOption2, _super);
    function GenomicsWorkersCheckInSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GenomicsWorkersCheckInSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GenomicsWorkersCheckInSecurityOption2.prototype, "oauth2c", void 0);
    return GenomicsWorkersCheckInSecurityOption2;
}(SpeakeasyBase));
export { GenomicsWorkersCheckInSecurityOption2 };
var GenomicsWorkersCheckInSecurity = /** @class */ (function (_super) {
    __extends(GenomicsWorkersCheckInSecurity, _super);
    function GenomicsWorkersCheckInSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GenomicsWorkersCheckInSecurityOption1)
    ], GenomicsWorkersCheckInSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GenomicsWorkersCheckInSecurityOption2)
    ], GenomicsWorkersCheckInSecurity.prototype, "option2", void 0);
    return GenomicsWorkersCheckInSecurity;
}(SpeakeasyBase));
export { GenomicsWorkersCheckInSecurity };
var GenomicsWorkersCheckInRequest = /** @class */ (function (_super) {
    __extends(GenomicsWorkersCheckInRequest, _super);
    function GenomicsWorkersCheckInRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenomicsWorkersCheckInPathParams)
    ], GenomicsWorkersCheckInRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenomicsWorkersCheckInQueryParams)
    ], GenomicsWorkersCheckInRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CheckInRequest)
    ], GenomicsWorkersCheckInRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenomicsWorkersCheckInSecurity)
    ], GenomicsWorkersCheckInRequest.prototype, "security", void 0);
    return GenomicsWorkersCheckInRequest;
}(SpeakeasyBase));
export { GenomicsWorkersCheckInRequest };
var GenomicsWorkersCheckInResponse = /** @class */ (function (_super) {
    __extends(GenomicsWorkersCheckInResponse, _super);
    function GenomicsWorkersCheckInResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CheckInResponse)
    ], GenomicsWorkersCheckInResponse.prototype, "checkInResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GenomicsWorkersCheckInResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GenomicsWorkersCheckInResponse.prototype, "statusCode", void 0);
    return GenomicsWorkersCheckInResponse;
}(SpeakeasyBase));
export { GenomicsWorkersCheckInResponse };
