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
var GetBillsQueryParams = /** @class */ (function (_super) {
    __extends(GetBillsQueryParams, _super);
    function GetBillsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BillIds" }),
        __metadata("design:type", Array)
    ], GetBillsQueryParams.prototype, "billIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BillStage" }),
        __metadata("design:type", Array)
    ], GetBillsQueryParams.prototype, "billStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BillStagesExcluded" }),
        __metadata("design:type", Array)
    ], GetBillsQueryParams.prototype, "billStagesExcluded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BillType" }),
        __metadata("design:type", Array)
    ], GetBillsQueryParams.prototype, "billType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CurrentHouse" }),
        __metadata("design:type", String)
    ], GetBillsQueryParams.prototype, "currentHouse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DepartmentId" }),
        __metadata("design:type", Number)
    ], GetBillsQueryParams.prototype, "departmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IsDefeated" }),
        __metadata("design:type", Boolean)
    ], GetBillsQueryParams.prototype, "isDefeated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IsWithdrawn" }),
        __metadata("design:type", Boolean)
    ], GetBillsQueryParams.prototype, "isWithdrawn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MemberId" }),
        __metadata("design:type", Number)
    ], GetBillsQueryParams.prototype, "memberId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OriginatingHouse" }),
        __metadata("design:type", String)
    ], GetBillsQueryParams.prototype, "originatingHouse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SearchTerm" }),
        __metadata("design:type", String)
    ], GetBillsQueryParams.prototype, "searchTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Session" }),
        __metadata("design:type", Number)
    ], GetBillsQueryParams.prototype, "session", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Skip" }),
        __metadata("design:type", Number)
    ], GetBillsQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SortOrder" }),
        __metadata("design:type", String)
    ], GetBillsQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Take" }),
        __metadata("design:type", Number)
    ], GetBillsQueryParams.prototype, "take", void 0);
    return GetBillsQueryParams;
}(SpeakeasyBase));
export { GetBillsQueryParams };
var GetBillsRequest = /** @class */ (function (_super) {
    __extends(GetBillsRequest, _super);
    function GetBillsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBillsQueryParams)
    ], GetBillsRequest.prototype, "queryParams", void 0);
    return GetBillsRequest;
}(SpeakeasyBase));
export { GetBillsRequest };
var GetBillsResponse = /** @class */ (function (_super) {
    __extends(GetBillsResponse, _super);
    function GetBillsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BillSummarySearchResult)
    ], GetBillsResponse.prototype, "billSummarySearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetBillsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBillsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetBillsResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBillsResponse.prototype, "statusCode", void 0);
    return GetBillsResponse;
}(SpeakeasyBase));
export { GetBillsResponse };
