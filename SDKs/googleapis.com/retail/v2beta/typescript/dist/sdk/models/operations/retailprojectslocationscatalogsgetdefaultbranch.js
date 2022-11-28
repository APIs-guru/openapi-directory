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
var RetailProjectsLocationsCatalogsGetDefaultBranchPathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsGetDefaultBranchPathParams, _super);
    function RetailProjectsLocationsCatalogsGetDefaultBranchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=catalog" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchPathParams.prototype, "catalog", void 0);
    return RetailProjectsLocationsCatalogsGetDefaultBranchPathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsGetDefaultBranchPathParams };
var RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams, _super);
    function RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams };
var RetailProjectsLocationsCatalogsGetDefaultBranchSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsGetDefaultBranchSecurity, _super);
    function RetailProjectsLocationsCatalogsGetDefaultBranchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsGetDefaultBranchSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsGetDefaultBranchSecurity };
var RetailProjectsLocationsCatalogsGetDefaultBranchRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsGetDefaultBranchRequest, _super);
    function RetailProjectsLocationsCatalogsGetDefaultBranchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsGetDefaultBranchPathParams)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsGetDefaultBranchSecurity)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsGetDefaultBranchRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsGetDefaultBranchRequest };
var RetailProjectsLocationsCatalogsGetDefaultBranchResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsGetDefaultBranchResponse, _super);
    function RetailProjectsLocationsCatalogsGetDefaultBranchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRetailV2betaGetDefaultBranchResponse)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchResponse.prototype, "googleCloudRetailV2betaGetDefaultBranchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsGetDefaultBranchResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsGetDefaultBranchResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsGetDefaultBranchResponse };
