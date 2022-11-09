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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var TestnetGetTxsQueryParams = /** @class */ (function (_super) {
    __extends(TestnetGetTxsQueryParams, _super);
    function TestnetGetTxsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=address" }),
        __metadata("design:type", String)
    ], TestnetGetTxsQueryParams.prototype, "address", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=block" }),
        __metadata("design:type", String)
    ], TestnetGetTxsQueryParams.prototype, "block", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageNum" }),
        __metadata("design:type", Number)
    ], TestnetGetTxsQueryParams.prototype, "pageNum", void 0);
    return TestnetGetTxsQueryParams;
}(SpeakeasyBase));
export { TestnetGetTxsQueryParams };
var TestnetGetTxsRequest = /** @class */ (function (_super) {
    __extends(TestnetGetTxsRequest, _super);
    function TestnetGetTxsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TestnetGetTxsQueryParams)
    ], TestnetGetTxsRequest.prototype, "queryParams", void 0);
    return TestnetGetTxsRequest;
}(SpeakeasyBase));
export { TestnetGetTxsRequest };
var TestnetGetTxsResponse = /** @class */ (function (_super) {
    __extends(TestnetGetTxsResponse, _super);
    function TestnetGetTxsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TestnetGetTxsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TestnetGetTxsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetTxsResponse)
    ], TestnetGetTxsResponse.prototype, "getTxsResponse", void 0);
    return TestnetGetTxsResponse;
}(SpeakeasyBase));
export { TestnetGetTxsResponse };
