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
var GetParagraphSearchResultsPathParams = /** @class */ (function (_super) {
    __extends(GetParagraphSearchResultsPathParams, _super);
    function GetParagraphSearchResultsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=searchTerm" }),
        __metadata("design:type", String)
    ], GetParagraphSearchResultsPathParams.prototype, "searchTerm", void 0);
    return GetParagraphSearchResultsPathParams;
}(SpeakeasyBase));
export { GetParagraphSearchResultsPathParams };
var GetParagraphSearchResultsQueryParams = /** @class */ (function (_super) {
    __extends(GetParagraphSearchResultsQueryParams, _super);
    function GetParagraphSearchResultsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], GetParagraphSearchResultsQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" }),
        __metadata("design:type", Number)
    ], GetParagraphSearchResultsQueryParams.prototype, "take", void 0);
    return GetParagraphSearchResultsQueryParams;
}(SpeakeasyBase));
export { GetParagraphSearchResultsQueryParams };
var GetParagraphSearchResultsRequest = /** @class */ (function (_super) {
    __extends(GetParagraphSearchResultsRequest, _super);
    function GetParagraphSearchResultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetParagraphSearchResultsPathParams)
    ], GetParagraphSearchResultsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetParagraphSearchResultsQueryParams)
    ], GetParagraphSearchResultsRequest.prototype, "queryParams", void 0);
    return GetParagraphSearchResultsRequest;
}(SpeakeasyBase));
export { GetParagraphSearchResultsRequest };
var GetParagraphSearchResultsResponse = /** @class */ (function (_super) {
    __extends(GetParagraphSearchResultsResponse, _super);
    function GetParagraphSearchResultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetParagraphSearchResultsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetParagraphSearchResultsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErskineMaySearchErskineMayParagraphSearchResult)
    ], GetParagraphSearchResultsResponse.prototype, "erskineMaySearchErskineMayParagraphSearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetParagraphSearchResultsResponse.prototype, "statusCode", void 0);
    return GetParagraphSearchResultsResponse;
}(SpeakeasyBase));
export { GetParagraphSearchResultsResponse };
