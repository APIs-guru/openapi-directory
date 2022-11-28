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
import { HrefType } from "./hreftype";
import { AccountReference16Ch } from "./accountreference16ch";
import { Balance } from "./balance";
import { AccountReport } from "./accountreport";
// TransactionsResponse200Json
/**
 * Body of the JSON response for a successful read transaction list request.
 * This account report contains transactions resulting from the query parameters.
 *
**/
var TransactionsResponse200Json = /** @class */ (function (_super) {
    __extends(TransactionsResponse200Json, _super);
    function TransactionsResponse200Json() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType }),
        __metadata("design:type", Map)
    ], TransactionsResponse200Json.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", AccountReference16Ch)
    ], TransactionsResponse200Json.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balances", elemType: Balance }),
        __metadata("design:type", Array)
    ], TransactionsResponse200Json.prototype, "balances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactions" }),
        __metadata("design:type", AccountReport)
    ], TransactionsResponse200Json.prototype, "transactions", void 0);
    return TransactionsResponse200Json;
}(SpeakeasyBase));
export { TransactionsResponse200Json };
