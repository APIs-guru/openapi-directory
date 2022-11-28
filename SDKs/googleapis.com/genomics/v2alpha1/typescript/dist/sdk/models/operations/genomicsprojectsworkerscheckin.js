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
var GenomicsProjectsWorkersCheckInPathParams = /** @class */ (function (_super) {
    __extends(GenomicsProjectsWorkersCheckInPathParams, _super);
    function GenomicsProjectsWorkersCheckInPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GenomicsProjectsWorkersCheckInPathParams.prototype, "id", void 0);
    return GenomicsProjectsWorkersCheckInPathParams;
}(SpeakeasyBase));
export { GenomicsProjectsWorkersCheckInPathParams };
var GenomicsProjectsWorkersCheckInQueryParams = /** @class */ (function (_super) {
    __extends(GenomicsProjectsWorkersCheckInQueryParams, _super);
    function GenomicsProjectsWorkersCheckInQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GenomicsProjectsWorkersCheckInQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GenomicsProjectsWorkersCheckInQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GenomicsProjectsWorkersCheckInQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GenomicsProjectsWorkersCheckInQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GenomicsProjectsWorkersCheckInQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GenomicsProjectsWorkersCheckInQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GenomicsProjectsWorkersCheckInQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GenomicsProjectsWorkersCheckInQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GenomicsProjectsWorkersCheckInQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GenomicsProjectsWorkersCheckInQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GenomicsProjectsWorkersCheckInQueryParams.prototype, "uploadProtocol", void 0);
    return GenomicsProjectsWorkersCheckInQueryParams;
}(SpeakeasyBase));
export { GenomicsProjectsWorkersCheckInQueryParams };
var GenomicsProjectsWorkersCheckInSecurityOption1 = /** @class */ (function (_super) {
    __extends(GenomicsProjectsWorkersCheckInSecurityOption1, _super);
    function GenomicsProjectsWorkersCheckInSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GenomicsProjectsWorkersCheckInSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GenomicsProjectsWorkersCheckInSecurityOption1.prototype, "oauth2c", void 0);
    return GenomicsProjectsWorkersCheckInSecurityOption1;
}(SpeakeasyBase));
export { GenomicsProjectsWorkersCheckInSecurityOption1 };
var GenomicsProjectsWorkersCheckInSecurityOption2 = /** @class */ (function (_super) {
    __extends(GenomicsProjectsWorkersCheckInSecurityOption2, _super);
    function GenomicsProjectsWorkersCheckInSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GenomicsProjectsWorkersCheckInSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GenomicsProjectsWorkersCheckInSecurityOption2.prototype, "oauth2c", void 0);
    return GenomicsProjectsWorkersCheckInSecurityOption2;
}(SpeakeasyBase));
export { GenomicsProjectsWorkersCheckInSecurityOption2 };
var GenomicsProjectsWorkersCheckInSecurity = /** @class */ (function (_super) {
    __extends(GenomicsProjectsWorkersCheckInSecurity, _super);
    function GenomicsProjectsWorkersCheckInSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GenomicsProjectsWorkersCheckInSecurityOption1)
    ], GenomicsProjectsWorkersCheckInSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GenomicsProjectsWorkersCheckInSecurityOption2)
    ], GenomicsProjectsWorkersCheckInSecurity.prototype, "option2", void 0);
    return GenomicsProjectsWorkersCheckInSecurity;
}(SpeakeasyBase));
export { GenomicsProjectsWorkersCheckInSecurity };
var GenomicsProjectsWorkersCheckInRequest = /** @class */ (function (_super) {
    __extends(GenomicsProjectsWorkersCheckInRequest, _super);
    function GenomicsProjectsWorkersCheckInRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenomicsProjectsWorkersCheckInPathParams)
    ], GenomicsProjectsWorkersCheckInRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenomicsProjectsWorkersCheckInQueryParams)
    ], GenomicsProjectsWorkersCheckInRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CheckInRequest)
    ], GenomicsProjectsWorkersCheckInRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenomicsProjectsWorkersCheckInSecurity)
    ], GenomicsProjectsWorkersCheckInRequest.prototype, "security", void 0);
    return GenomicsProjectsWorkersCheckInRequest;
}(SpeakeasyBase));
export { GenomicsProjectsWorkersCheckInRequest };
var GenomicsProjectsWorkersCheckInResponse = /** @class */ (function (_super) {
    __extends(GenomicsProjectsWorkersCheckInResponse, _super);
    function GenomicsProjectsWorkersCheckInResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CheckInResponse)
    ], GenomicsProjectsWorkersCheckInResponse.prototype, "checkInResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GenomicsProjectsWorkersCheckInResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GenomicsProjectsWorkersCheckInResponse.prototype, "statusCode", void 0);
    return GenomicsProjectsWorkersCheckInResponse;
}(SpeakeasyBase));
export { GenomicsProjectsWorkersCheckInResponse };
