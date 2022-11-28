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
var GetSetupV1CompaniesRegionsIdPathParams = /** @class */ (function (_super) {
    __extends(GetSetupV1CompaniesRegionsIdPathParams, _super);
    function GetSetupV1CompaniesRegionsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSetupV1CompaniesRegionsIdPathParams.prototype, "id", void 0);
    return GetSetupV1CompaniesRegionsIdPathParams;
}(SpeakeasyBase));
export { GetSetupV1CompaniesRegionsIdPathParams };
var GetSetupV1CompaniesRegionsIdRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1CompaniesRegionsIdRequest, _super);
    function GetSetupV1CompaniesRegionsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1CompaniesRegionsIdPathParams)
    ], GetSetupV1CompaniesRegionsIdRequest.prototype, "pathParams", void 0);
    return GetSetupV1CompaniesRegionsIdRequest;
}(SpeakeasyBase));
export { GetSetupV1CompaniesRegionsIdRequest };
var GetSetupV1CompaniesRegionsIdResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1CompaniesRegionsIdResponse, _super);
    function GetSetupV1CompaniesRegionsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetupV1CompaniesRegionsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RegionViewModel)
    ], GetSetupV1CompaniesRegionsIdResponse.prototype, "regionViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetupV1CompaniesRegionsIdResponse.prototype, "statusCode", void 0);
    return GetSetupV1CompaniesRegionsIdResponse;
}(SpeakeasyBase));
export { GetSetupV1CompaniesRegionsIdResponse };
