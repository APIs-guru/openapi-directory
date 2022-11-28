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
var GetAmendmentsPathParams = /** @class */ (function (_super) {
    __extends(GetAmendmentsPathParams, _super);
    function GetAmendmentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" }),
        __metadata("design:type", Number)
    ], GetAmendmentsPathParams.prototype, "billId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billStageId" }),
        __metadata("design:type", Number)
    ], GetAmendmentsPathParams.prototype, "billStageId", void 0);
    return GetAmendmentsPathParams;
}(SpeakeasyBase));
export { GetAmendmentsPathParams };
var GetAmendmentsQueryParams = /** @class */ (function (_super) {
    __extends(GetAmendmentsQueryParams, _super);
    function GetAmendmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Decision" }),
        __metadata("design:type", String)
    ], GetAmendmentsQueryParams.prototype, "decision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MemberId" }),
        __metadata("design:type", Number)
    ], GetAmendmentsQueryParams.prototype, "memberId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SearchTerm" }),
        __metadata("design:type", String)
    ], GetAmendmentsQueryParams.prototype, "searchTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Skip" }),
        __metadata("design:type", Number)
    ], GetAmendmentsQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Take" }),
        __metadata("design:type", Number)
    ], GetAmendmentsQueryParams.prototype, "take", void 0);
    return GetAmendmentsQueryParams;
}(SpeakeasyBase));
export { GetAmendmentsQueryParams };
var GetAmendmentsRequest = /** @class */ (function (_super) {
    __extends(GetAmendmentsRequest, _super);
    function GetAmendmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAmendmentsPathParams)
    ], GetAmendmentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAmendmentsQueryParams)
    ], GetAmendmentsRequest.prototype, "queryParams", void 0);
    return GetAmendmentsRequest;
}(SpeakeasyBase));
export { GetAmendmentsRequest };
var GetAmendmentsResponse = /** @class */ (function (_super) {
    __extends(GetAmendmentsResponse, _super);
    function GetAmendmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AmendmentSearchItemSearchResult)
    ], GetAmendmentsResponse.prototype, "amendmentSearchItemSearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAmendmentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAmendmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAmendmentsResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAmendmentsResponse.prototype, "statusCode", void 0);
    return GetAmendmentsResponse;
}(SpeakeasyBase));
export { GetAmendmentsResponse };
