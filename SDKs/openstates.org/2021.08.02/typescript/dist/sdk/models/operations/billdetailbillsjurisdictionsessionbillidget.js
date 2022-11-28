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
var BillDetailBillsJurisdictionSessionBillIdGetPathParams = /** @class */ (function (_super) {
    __extends(BillDetailBillsJurisdictionSessionBillIdGetPathParams, _super);
    function BillDetailBillsJurisdictionSessionBillIdGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bill_id" }),
        __metadata("design:type", String)
    ], BillDetailBillsJurisdictionSessionBillIdGetPathParams.prototype, "billId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jurisdiction" }),
        __metadata("design:type", String)
    ], BillDetailBillsJurisdictionSessionBillIdGetPathParams.prototype, "jurisdiction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session" }),
        __metadata("design:type", String)
    ], BillDetailBillsJurisdictionSessionBillIdGetPathParams.prototype, "session", void 0);
    return BillDetailBillsJurisdictionSessionBillIdGetPathParams;
}(SpeakeasyBase));
export { BillDetailBillsJurisdictionSessionBillIdGetPathParams };
var BillDetailBillsJurisdictionSessionBillIdGetQueryParams = /** @class */ (function (_super) {
    __extends(BillDetailBillsJurisdictionSessionBillIdGetQueryParams, _super);
    function BillDetailBillsJurisdictionSessionBillIdGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apikey" }),
        __metadata("design:type", String)
    ], BillDetailBillsJurisdictionSessionBillIdGetQueryParams.prototype, "apikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", Array)
    ], BillDetailBillsJurisdictionSessionBillIdGetQueryParams.prototype, "include", void 0);
    return BillDetailBillsJurisdictionSessionBillIdGetQueryParams;
}(SpeakeasyBase));
export { BillDetailBillsJurisdictionSessionBillIdGetQueryParams };
var BillDetailBillsJurisdictionSessionBillIdGetHeaders = /** @class */ (function (_super) {
    __extends(BillDetailBillsJurisdictionSessionBillIdGetHeaders, _super);
    function BillDetailBillsJurisdictionSessionBillIdGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], BillDetailBillsJurisdictionSessionBillIdGetHeaders.prototype, "xApiKey", void 0);
    return BillDetailBillsJurisdictionSessionBillIdGetHeaders;
}(SpeakeasyBase));
export { BillDetailBillsJurisdictionSessionBillIdGetHeaders };
var BillDetailBillsJurisdictionSessionBillIdGetRequest = /** @class */ (function (_super) {
    __extends(BillDetailBillsJurisdictionSessionBillIdGetRequest, _super);
    function BillDetailBillsJurisdictionSessionBillIdGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillDetailBillsJurisdictionSessionBillIdGetPathParams)
    ], BillDetailBillsJurisdictionSessionBillIdGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillDetailBillsJurisdictionSessionBillIdGetQueryParams)
    ], BillDetailBillsJurisdictionSessionBillIdGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillDetailBillsJurisdictionSessionBillIdGetHeaders)
    ], BillDetailBillsJurisdictionSessionBillIdGetRequest.prototype, "headers", void 0);
    return BillDetailBillsJurisdictionSessionBillIdGetRequest;
}(SpeakeasyBase));
export { BillDetailBillsJurisdictionSessionBillIdGetRequest };
var BillDetailBillsJurisdictionSessionBillIdGetResponse = /** @class */ (function (_super) {
    __extends(BillDetailBillsJurisdictionSessionBillIdGetResponse, _super);
    function BillDetailBillsJurisdictionSessionBillIdGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Bill)
    ], BillDetailBillsJurisdictionSessionBillIdGetResponse.prototype, "bill", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BillDetailBillsJurisdictionSessionBillIdGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], BillDetailBillsJurisdictionSessionBillIdGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BillDetailBillsJurisdictionSessionBillIdGetResponse.prototype, "statusCode", void 0);
    return BillDetailBillsJurisdictionSessionBillIdGetResponse;
}(SpeakeasyBase));
export { BillDetailBillsJurisdictionSessionBillIdGetResponse };
