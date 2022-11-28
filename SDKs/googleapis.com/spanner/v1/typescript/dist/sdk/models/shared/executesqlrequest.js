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
import { Type } from "./type";
import { QueryOptions } from "./queryoptions";
import { RequestOptions } from "./requestoptions";
import { TransactionSelector } from "./transactionselector";
export var ExecuteSqlRequestQueryModeEnum;
(function (ExecuteSqlRequestQueryModeEnum) {
    ExecuteSqlRequestQueryModeEnum["Normal"] = "NORMAL";
    ExecuteSqlRequestQueryModeEnum["Plan"] = "PLAN";
    ExecuteSqlRequestQueryModeEnum["Profile"] = "PROFILE";
})(ExecuteSqlRequestQueryModeEnum || (ExecuteSqlRequestQueryModeEnum = {}));
// ExecuteSqlRequest
/**
 * The request for ExecuteSql and ExecuteStreamingSql.
**/
var ExecuteSqlRequest = /** @class */ (function (_super) {
    __extends(ExecuteSqlRequest, _super);
    function ExecuteSqlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paramTypes", elemType: Type }),
        __metadata("design:type", Map)
    ], ExecuteSqlRequest.prototype, "paramTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=params" }),
        __metadata("design:type", Map)
    ], ExecuteSqlRequest.prototype, "params", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partitionToken" }),
        __metadata("design:type", String)
    ], ExecuteSqlRequest.prototype, "partitionToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryMode" }),
        __metadata("design:type", String)
    ], ExecuteSqlRequest.prototype, "queryMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryOptions" }),
        __metadata("design:type", QueryOptions)
    ], ExecuteSqlRequest.prototype, "queryOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestOptions" }),
        __metadata("design:type", RequestOptions)
    ], ExecuteSqlRequest.prototype, "requestOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resumeToken" }),
        __metadata("design:type", String)
    ], ExecuteSqlRequest.prototype, "resumeToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seqno" }),
        __metadata("design:type", String)
    ], ExecuteSqlRequest.prototype, "seqno", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sql" }),
        __metadata("design:type", String)
    ], ExecuteSqlRequest.prototype, "sql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction" }),
        __metadata("design:type", TransactionSelector)
    ], ExecuteSqlRequest.prototype, "transaction", void 0);
    return ExecuteSqlRequest;
}(SpeakeasyBase));
export { ExecuteSqlRequest };
