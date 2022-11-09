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
var BurnTokenRequestBurn = /** @class */ (function (_super) {
    __extends(BurnTokenRequestBurn, _super);
    function BurnTokenRequestBurn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], BurnTokenRequestBurn.prototype, "amount", void 0);
    __decorate([
        Metadata({ data: "json, name=tokenId" }),
        __metadata("design:type", String)
    ], BurnTokenRequestBurn.prototype, "tokenId", void 0);
    return BurnTokenRequestBurn;
}(SpeakeasyBase));
export { BurnTokenRequestBurn };
var BurnTokenRequestTransfer = /** @class */ (function (_super) {
    __extends(BurnTokenRequestTransfer, _super);
    function BurnTokenRequestTransfer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], BurnTokenRequestTransfer.prototype, "address", void 0);
    __decorate([
        Metadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], BurnTokenRequestTransfer.prototype, "amount", void 0);
    __decorate([
        Metadata({ data: "json, name=tokenId" }),
        __metadata("design:type", String)
    ], BurnTokenRequestTransfer.prototype, "tokenId", void 0);
    return BurnTokenRequestTransfer;
}(SpeakeasyBase));
export { BurnTokenRequestTransfer };
var BurnTokenRequest = /** @class */ (function (_super) {
    __extends(BurnTokenRequest, _super);
    function BurnTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=burn", elemType: shared.BurnTokenRequestBurn }),
        __metadata("design:type", Array)
    ], BurnTokenRequest.prototype, "burn", void 0);
    __decorate([
        Metadata({ data: "json, name=fee" }),
        __metadata("design:type", Number)
    ], BurnTokenRequest.prototype, "fee", void 0);
    __decorate([
        Metadata({ data: "json, name=from" }),
        __metadata("design:type", Array)
    ], BurnTokenRequest.prototype, "from", void 0);
    __decorate([
        Metadata({ data: "json, name=transfer", elemType: shared.BurnTokenRequestTransfer }),
        __metadata("design:type", Array)
    ], BurnTokenRequest.prototype, "transfer", void 0);
    return BurnTokenRequest;
}(SpeakeasyBase));
export { BurnTokenRequest };
