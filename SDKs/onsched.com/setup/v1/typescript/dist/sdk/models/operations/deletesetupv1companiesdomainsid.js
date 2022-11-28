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
var DeleteSetupV1CompaniesDomainsIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteSetupV1CompaniesDomainsIdPathParams, _super);
    function DeleteSetupV1CompaniesDomainsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteSetupV1CompaniesDomainsIdPathParams.prototype, "id", void 0);
    return DeleteSetupV1CompaniesDomainsIdPathParams;
}(SpeakeasyBase));
export { DeleteSetupV1CompaniesDomainsIdPathParams };
var DeleteSetupV1CompaniesDomainsIdRequest = /** @class */ (function (_super) {
    __extends(DeleteSetupV1CompaniesDomainsIdRequest, _super);
    function DeleteSetupV1CompaniesDomainsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSetupV1CompaniesDomainsIdPathParams)
    ], DeleteSetupV1CompaniesDomainsIdRequest.prototype, "pathParams", void 0);
    return DeleteSetupV1CompaniesDomainsIdRequest;
}(SpeakeasyBase));
export { DeleteSetupV1CompaniesDomainsIdRequest };
var DeleteSetupV1CompaniesDomainsIdResponse = /** @class */ (function (_super) {
    __extends(DeleteSetupV1CompaniesDomainsIdResponse, _super);
    function DeleteSetupV1CompaniesDomainsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CompanyDomainViewModel)
    ], DeleteSetupV1CompaniesDomainsIdResponse.prototype, "companyDomainViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSetupV1CompaniesDomainsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSetupV1CompaniesDomainsIdResponse.prototype, "statusCode", void 0);
    return DeleteSetupV1CompaniesDomainsIdResponse;
}(SpeakeasyBase));
export { DeleteSetupV1CompaniesDomainsIdResponse };
