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
import { KeySet } from "./keyset";
import { RequestOptions } from "./requestoptions";
import { TransactionSelector } from "./transactionselector";
// ReadRequest
/**
 * The request for Read and StreamingRead.
**/
var ReadRequest = /** @class */ (function (_super) {
    __extends(ReadRequest, _super);
    function ReadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columns" }),
        __metadata("design:type", Array)
    ], ReadRequest.prototype, "columns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", String)
    ], ReadRequest.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keySet" }),
        __metadata("design:type", KeySet)
    ], ReadRequest.prototype, "keySet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", String)
    ], ReadRequest.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partitionToken" }),
        __metadata("design:type", String)
    ], ReadRequest.prototype, "partitionToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestOptions" }),
        __metadata("design:type", RequestOptions)
    ], ReadRequest.prototype, "requestOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resumeToken" }),
        __metadata("design:type", String)
    ], ReadRequest.prototype, "resumeToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=table" }),
        __metadata("design:type", String)
    ], ReadRequest.prototype, "table", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction" }),
        __metadata("design:type", TransactionSelector)
    ], ReadRequest.prototype, "transaction", void 0);
    return ReadRequest;
}(SpeakeasyBase));
export { ReadRequest };
