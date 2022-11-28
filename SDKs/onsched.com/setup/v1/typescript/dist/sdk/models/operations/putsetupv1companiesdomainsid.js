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
var PutSetupV1CompaniesDomainsIdPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1CompaniesDomainsIdPathParams, _super);
    function PutSetupV1CompaniesDomainsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1CompaniesDomainsIdPathParams.prototype, "id", void 0);
    return PutSetupV1CompaniesDomainsIdPathParams;
}(SpeakeasyBase));
export { PutSetupV1CompaniesDomainsIdPathParams };
var PutSetupV1CompaniesDomainsIdRequests = /** @class */ (function (_super) {
    __extends(PutSetupV1CompaniesDomainsIdRequests, _super);
    function PutSetupV1CompaniesDomainsIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CompanyDomainUpdateModel)
    ], PutSetupV1CompaniesDomainsIdRequests.prototype, "companyDomainUpdateModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CompanyDomainUpdateModel)
    ], PutSetupV1CompaniesDomainsIdRequests.prototype, "companyDomainUpdateModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.CompanyDomainUpdateModel)
    ], PutSetupV1CompaniesDomainsIdRequests.prototype, "companyDomainUpdateModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CompanyDomainUpdateModel)
    ], PutSetupV1CompaniesDomainsIdRequests.prototype, "companyDomainUpdateModel3", void 0);
    return PutSetupV1CompaniesDomainsIdRequests;
}(SpeakeasyBase));
export { PutSetupV1CompaniesDomainsIdRequests };
var PutSetupV1CompaniesDomainsIdRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1CompaniesDomainsIdRequest, _super);
    function PutSetupV1CompaniesDomainsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1CompaniesDomainsIdPathParams)
    ], PutSetupV1CompaniesDomainsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1CompaniesDomainsIdRequests)
    ], PutSetupV1CompaniesDomainsIdRequest.prototype, "request", void 0);
    return PutSetupV1CompaniesDomainsIdRequest;
}(SpeakeasyBase));
export { PutSetupV1CompaniesDomainsIdRequest };
var PutSetupV1CompaniesDomainsIdResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1CompaniesDomainsIdResponse, _super);
    function PutSetupV1CompaniesDomainsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CompanyDomainViewModel)
    ], PutSetupV1CompaniesDomainsIdResponse.prototype, "companyDomainViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1CompaniesDomainsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1CompaniesDomainsIdResponse.prototype, "statusCode", void 0);
    return PutSetupV1CompaniesDomainsIdResponse;
}(SpeakeasyBase));
export { PutSetupV1CompaniesDomainsIdResponse };
