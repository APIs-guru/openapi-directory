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
var PostTransactionsTransactionIdPathParams = /** @class */ (function (_super) {
    __extends(PostTransactionsTransactionIdPathParams, _super);
    function PostTransactionsTransactionIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transactionId" }),
        __metadata("design:type", String)
    ], PostTransactionsTransactionIdPathParams.prototype, "transactionId", void 0);
    return PostTransactionsTransactionIdPathParams;
}(SpeakeasyBase));
export { PostTransactionsTransactionIdPathParams };
var PostTransactionsTransactionIdQueryParams = /** @class */ (function (_super) {
    __extends(PostTransactionsTransactionIdQueryParams, _super);
    function PostTransactionsTransactionIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" }),
        __metadata("design:type", String)
    ], PostTransactionsTransactionIdQueryParams.prototype, "customData", void 0);
    return PostTransactionsTransactionIdQueryParams;
}(SpeakeasyBase));
export { PostTransactionsTransactionIdQueryParams };
var PostTransactionsTransactionIdRequest = /** @class */ (function (_super) {
    __extends(PostTransactionsTransactionIdRequest, _super);
    function PostTransactionsTransactionIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTransactionsTransactionIdPathParams)
    ], PostTransactionsTransactionIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTransactionsTransactionIdQueryParams)
    ], PostTransactionsTransactionIdRequest.prototype, "queryParams", void 0);
    return PostTransactionsTransactionIdRequest;
}(SpeakeasyBase));
export { PostTransactionsTransactionIdRequest };
var PostTransactionsTransactionIdResponse = /** @class */ (function (_super) {
    __extends(PostTransactionsTransactionIdResponse, _super);
    function PostTransactionsTransactionIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostTransactionsTransactionIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTransactionsTransactionIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTransactionsTransactionIdResponse.prototype, "statusCode", void 0);
    return PostTransactionsTransactionIdResponse;
}(SpeakeasyBase));
export { PostTransactionsTransactionIdResponse };
