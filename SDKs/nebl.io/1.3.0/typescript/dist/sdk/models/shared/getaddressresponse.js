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
var GetAddressResponse = /** @class */ (function (_super) {
    __extends(GetAddressResponse, _super);
    function GetAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=addrStr" }),
        __metadata("design:type", String)
    ], GetAddressResponse.prototype, "addrStr", void 0);
    __decorate([
        Metadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], GetAddressResponse.prototype, "balance", void 0);
    __decorate([
        Metadata({ data: "json, name=balanceSat" }),
        __metadata("design:type", Number)
    ], GetAddressResponse.prototype, "balanceSat", void 0);
    __decorate([
        Metadata({ data: "json, name=totalReceived" }),
        __metadata("design:type", Number)
    ], GetAddressResponse.prototype, "totalReceived", void 0);
    __decorate([
        Metadata({ data: "json, name=totalReceivedSat" }),
        __metadata("design:type", Number)
    ], GetAddressResponse.prototype, "totalReceivedSat", void 0);
    __decorate([
        Metadata({ data: "json, name=totalSent" }),
        __metadata("design:type", Number)
    ], GetAddressResponse.prototype, "totalSent", void 0);
    __decorate([
        Metadata({ data: "json, name=totalSentSat" }),
        __metadata("design:type", Number)
    ], GetAddressResponse.prototype, "totalSentSat", void 0);
    __decorate([
        Metadata({ data: "json, name=transactions" }),
        __metadata("design:type", Array)
    ], GetAddressResponse.prototype, "transactions", void 0);
    __decorate([
        Metadata({ data: "json, name=txAppearances" }),
        __metadata("design:type", Number)
    ], GetAddressResponse.prototype, "txAppearances", void 0);
    __decorate([
        Metadata({ data: "json, name=unconfirmedBalance" }),
        __metadata("design:type", Number)
    ], GetAddressResponse.prototype, "unconfirmedBalance", void 0);
    __decorate([
        Metadata({ data: "json, name=unconfirmedBalanceSat" }),
        __metadata("design:type", Number)
    ], GetAddressResponse.prototype, "unconfirmedBalanceSat", void 0);
    __decorate([
        Metadata({ data: "json, name=unconfirmedTxAppearances" }),
        __metadata("design:type", Number)
    ], GetAddressResponse.prototype, "unconfirmedTxAppearances", void 0);
    return GetAddressResponse;
}(SpeakeasyBase));
export { GetAddressResponse };
