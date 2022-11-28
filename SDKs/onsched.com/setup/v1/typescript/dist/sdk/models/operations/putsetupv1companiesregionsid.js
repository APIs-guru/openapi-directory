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
var PutSetupV1CompaniesRegionsIdPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1CompaniesRegionsIdPathParams, _super);
    function PutSetupV1CompaniesRegionsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1CompaniesRegionsIdPathParams.prototype, "id", void 0);
    return PutSetupV1CompaniesRegionsIdPathParams;
}(SpeakeasyBase));
export { PutSetupV1CompaniesRegionsIdPathParams };
var PutSetupV1CompaniesRegionsIdRequests = /** @class */ (function (_super) {
    __extends(PutSetupV1CompaniesRegionsIdRequests, _super);
    function PutSetupV1CompaniesRegionsIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.RegionUpdateModel)
    ], PutSetupV1CompaniesRegionsIdRequests.prototype, "regionUpdateModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RegionUpdateModel)
    ], PutSetupV1CompaniesRegionsIdRequests.prototype, "regionUpdateModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.RegionUpdateModel)
    ], PutSetupV1CompaniesRegionsIdRequests.prototype, "regionUpdateModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.RegionUpdateModel)
    ], PutSetupV1CompaniesRegionsIdRequests.prototype, "regionUpdateModel3", void 0);
    return PutSetupV1CompaniesRegionsIdRequests;
}(SpeakeasyBase));
export { PutSetupV1CompaniesRegionsIdRequests };
var PutSetupV1CompaniesRegionsIdRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1CompaniesRegionsIdRequest, _super);
    function PutSetupV1CompaniesRegionsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1CompaniesRegionsIdPathParams)
    ], PutSetupV1CompaniesRegionsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1CompaniesRegionsIdRequests)
    ], PutSetupV1CompaniesRegionsIdRequest.prototype, "request", void 0);
    return PutSetupV1CompaniesRegionsIdRequest;
}(SpeakeasyBase));
export { PutSetupV1CompaniesRegionsIdRequest };
var PutSetupV1CompaniesRegionsIdResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1CompaniesRegionsIdResponse, _super);
    function PutSetupV1CompaniesRegionsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1CompaniesRegionsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RegionViewModel)
    ], PutSetupV1CompaniesRegionsIdResponse.prototype, "regionViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1CompaniesRegionsIdResponse.prototype, "statusCode", void 0);
    return PutSetupV1CompaniesRegionsIdResponse;
}(SpeakeasyBase));
export { PutSetupV1CompaniesRegionsIdResponse };
