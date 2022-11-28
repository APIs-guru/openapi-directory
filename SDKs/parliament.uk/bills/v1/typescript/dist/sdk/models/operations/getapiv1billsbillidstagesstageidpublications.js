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
var GetApiV1BillsBillIdStagesStageIdPublicationsPathParams = /** @class */ (function (_super) {
    __extends(GetApiV1BillsBillIdStagesStageIdPublicationsPathParams, _super);
    function GetApiV1BillsBillIdStagesStageIdPublicationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" }),
        __metadata("design:type", Number)
    ], GetApiV1BillsBillIdStagesStageIdPublicationsPathParams.prototype, "billId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stageId" }),
        __metadata("design:type", Number)
    ], GetApiV1BillsBillIdStagesStageIdPublicationsPathParams.prototype, "stageId", void 0);
    return GetApiV1BillsBillIdStagesStageIdPublicationsPathParams;
}(SpeakeasyBase));
export { GetApiV1BillsBillIdStagesStageIdPublicationsPathParams };
var GetApiV1BillsBillIdStagesStageIdPublicationsRequest = /** @class */ (function (_super) {
    __extends(GetApiV1BillsBillIdStagesStageIdPublicationsRequest, _super);
    function GetApiV1BillsBillIdStagesStageIdPublicationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1BillsBillIdStagesStageIdPublicationsPathParams)
    ], GetApiV1BillsBillIdStagesStageIdPublicationsRequest.prototype, "pathParams", void 0);
    return GetApiV1BillsBillIdStagesStageIdPublicationsRequest;
}(SpeakeasyBase));
export { GetApiV1BillsBillIdStagesStageIdPublicationsRequest };
var GetApiV1BillsBillIdStagesStageIdPublicationsResponse = /** @class */ (function (_super) {
    __extends(GetApiV1BillsBillIdStagesStageIdPublicationsResponse, _super);
    function GetApiV1BillsBillIdStagesStageIdPublicationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BillStagePublicationList)
    ], GetApiV1BillsBillIdStagesStageIdPublicationsResponse.prototype, "billStagePublicationList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiV1BillsBillIdStagesStageIdPublicationsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV1BillsBillIdStagesStageIdPublicationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiV1BillsBillIdStagesStageIdPublicationsResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV1BillsBillIdStagesStageIdPublicationsResponse.prototype, "statusCode", void 0);
    return GetApiV1BillsBillIdStagesStageIdPublicationsResponse;
}(SpeakeasyBase));
export { GetApiV1BillsBillIdStagesStageIdPublicationsResponse };
