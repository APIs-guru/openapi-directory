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
var GetSectionSearchResultsPathParams = /** @class */ (function (_super) {
    __extends(GetSectionSearchResultsPathParams, _super);
    function GetSectionSearchResultsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=searchTerm" }),
        __metadata("design:type", String)
    ], GetSectionSearchResultsPathParams.prototype, "searchTerm", void 0);
    return GetSectionSearchResultsPathParams;
}(SpeakeasyBase));
export { GetSectionSearchResultsPathParams };
var GetSectionSearchResultsQueryParams = /** @class */ (function (_super) {
    __extends(GetSectionSearchResultsQueryParams, _super);
    function GetSectionSearchResultsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], GetSectionSearchResultsQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" }),
        __metadata("design:type", Number)
    ], GetSectionSearchResultsQueryParams.prototype, "take", void 0);
    return GetSectionSearchResultsQueryParams;
}(SpeakeasyBase));
export { GetSectionSearchResultsQueryParams };
var GetSectionSearchResultsRequest = /** @class */ (function (_super) {
    __extends(GetSectionSearchResultsRequest, _super);
    function GetSectionSearchResultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSectionSearchResultsPathParams)
    ], GetSectionSearchResultsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSectionSearchResultsQueryParams)
    ], GetSectionSearchResultsRequest.prototype, "queryParams", void 0);
    return GetSectionSearchResultsRequest;
}(SpeakeasyBase));
export { GetSectionSearchResultsRequest };
var GetSectionSearchResultsResponse = /** @class */ (function (_super) {
    __extends(GetSectionSearchResultsResponse, _super);
    function GetSectionSearchResultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSectionSearchResultsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSectionSearchResultsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErskineMaySearchErskineMaySectionSearchResult)
    ], GetSectionSearchResultsResponse.prototype, "erskineMaySearchErskineMaySectionSearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSectionSearchResultsResponse.prototype, "statusCode", void 0);
    return GetSectionSearchResultsResponse;
}(SpeakeasyBase));
export { GetSectionSearchResultsResponse };
