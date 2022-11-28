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
var BillsSearchBillsGetQueryParams = /** @class */ (function (_super) {
    __extends(BillsSearchBillsGetQueryParams, _super);
    function BillsSearchBillsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action_since" }),
        __metadata("design:type", String)
    ], BillsSearchBillsGetQueryParams.prototype, "actionSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apikey" }),
        __metadata("design:type", String)
    ], BillsSearchBillsGetQueryParams.prototype, "apikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=chamber" }),
        __metadata("design:type", String)
    ], BillsSearchBillsGetQueryParams.prototype, "chamber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classification" }),
        __metadata("design:type", String)
    ], BillsSearchBillsGetQueryParams.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_since" }),
        __metadata("design:type", String)
    ], BillsSearchBillsGetQueryParams.prototype, "createdSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", Array)
    ], BillsSearchBillsGetQueryParams.prototype, "include", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" }),
        __metadata("design:type", String)
    ], BillsSearchBillsGetQueryParams.prototype, "jurisdiction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], BillsSearchBillsGetQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], BillsSearchBillsGetQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], BillsSearchBillsGetQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=session" }),
        __metadata("design:type", String)
    ], BillsSearchBillsGetQueryParams.prototype, "session", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], BillsSearchBillsGetQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sponsor" }),
        __metadata("design:type", String)
    ], BillsSearchBillsGetQueryParams.prototype, "sponsor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sponsor_classification" }),
        __metadata("design:type", String)
    ], BillsSearchBillsGetQueryParams.prototype, "sponsorClassification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject" }),
        __metadata("design:type", Array)
    ], BillsSearchBillsGetQueryParams.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_since" }),
        __metadata("design:type", String)
    ], BillsSearchBillsGetQueryParams.prototype, "updatedSince", void 0);
    return BillsSearchBillsGetQueryParams;
}(SpeakeasyBase));
export { BillsSearchBillsGetQueryParams };
var BillsSearchBillsGetHeaders = /** @class */ (function (_super) {
    __extends(BillsSearchBillsGetHeaders, _super);
    function BillsSearchBillsGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], BillsSearchBillsGetHeaders.prototype, "xApiKey", void 0);
    return BillsSearchBillsGetHeaders;
}(SpeakeasyBase));
export { BillsSearchBillsGetHeaders };
var BillsSearchBillsGetRequest = /** @class */ (function (_super) {
    __extends(BillsSearchBillsGetRequest, _super);
    function BillsSearchBillsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillsSearchBillsGetQueryParams)
    ], BillsSearchBillsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillsSearchBillsGetHeaders)
    ], BillsSearchBillsGetRequest.prototype, "headers", void 0);
    return BillsSearchBillsGetRequest;
}(SpeakeasyBase));
export { BillsSearchBillsGetRequest };
var BillsSearchBillsGetResponse = /** @class */ (function (_super) {
    __extends(BillsSearchBillsGetResponse, _super);
    function BillsSearchBillsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BillList)
    ], BillsSearchBillsGetResponse.prototype, "billList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BillsSearchBillsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], BillsSearchBillsGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BillsSearchBillsGetResponse.prototype, "statusCode", void 0);
    return BillsSearchBillsGetResponse;
}(SpeakeasyBase));
export { BillsSearchBillsGetResponse };
