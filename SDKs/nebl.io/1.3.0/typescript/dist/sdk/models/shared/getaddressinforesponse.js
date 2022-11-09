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
var GetAddressInfoResponseUtxosTokens = /** @class */ (function (_super) {
    __extends(GetAddressInfoResponseUtxosTokens, _super);
    function GetAddressInfoResponseUtxosTokens() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=aggregationPolicy" }),
        __metadata("design:type", String)
    ], GetAddressInfoResponseUtxosTokens.prototype, "aggregationPolicy", void 0);
    __decorate([
        Metadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], GetAddressInfoResponseUtxosTokens.prototype, "amount", void 0);
    __decorate([
        Metadata({ data: "json, name=divisibility" }),
        __metadata("design:type", Number)
    ], GetAddressInfoResponseUtxosTokens.prototype, "divisibility", void 0);
    __decorate([
        Metadata({ data: "json, name=issueTxid" }),
        __metadata("design:type", String)
    ], GetAddressInfoResponseUtxosTokens.prototype, "issueTxid", void 0);
    __decorate([
        Metadata({ data: "json, name=lockStatus" }),
        __metadata("design:type", Boolean)
    ], GetAddressInfoResponseUtxosTokens.prototype, "lockStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=tokenId" }),
        __metadata("design:type", String)
    ], GetAddressInfoResponseUtxosTokens.prototype, "tokenId", void 0);
    return GetAddressInfoResponseUtxosTokens;
}(SpeakeasyBase));
export { GetAddressInfoResponseUtxosTokens };
var GetAddressInfoResponseUtxos = /** @class */ (function (_super) {
    __extends(GetAddressInfoResponseUtxos, _super);
    function GetAddressInfoResponseUtxos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=blockheight" }),
        __metadata("design:type", Number)
    ], GetAddressInfoResponseUtxos.prototype, "blockheight", void 0);
    __decorate([
        Metadata({ data: "json, name=blocktime" }),
        __metadata("design:type", Number)
    ], GetAddressInfoResponseUtxos.prototype, "blocktime", void 0);
    __decorate([
        Metadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], GetAddressInfoResponseUtxos.prototype, "index", void 0);
    __decorate([
        Metadata({ data: "json, name=scriptPubKey" }),
        __metadata("design:type", Map)
    ], GetAddressInfoResponseUtxos.prototype, "scriptPubKey", void 0);
    __decorate([
        Metadata({ data: "json, name=tokens", elemType: shared.GetAddressInfoResponseUtxosTokens }),
        __metadata("design:type", Array)
    ], GetAddressInfoResponseUtxos.prototype, "tokens", void 0);
    __decorate([
        Metadata({ data: "json, name=txid" }),
        __metadata("design:type", String)
    ], GetAddressInfoResponseUtxos.prototype, "txid", void 0);
    __decorate([
        Metadata({ data: "json, name=used" }),
        __metadata("design:type", Boolean)
    ], GetAddressInfoResponseUtxos.prototype, "used", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], GetAddressInfoResponseUtxos.prototype, "value", void 0);
    return GetAddressInfoResponseUtxos;
}(SpeakeasyBase));
export { GetAddressInfoResponseUtxos };
var GetAddressInfoResponse = /** @class */ (function (_super) {
    __extends(GetAddressInfoResponse, _super);
    function GetAddressInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], GetAddressInfoResponse.prototype, "address", void 0);
    __decorate([
        Metadata({ data: "json, name=utxos", elemType: shared.GetAddressInfoResponseUtxos }),
        __metadata("design:type", Array)
    ], GetAddressInfoResponse.prototype, "utxos", void 0);
    return GetAddressInfoResponse;
}(SpeakeasyBase));
export { GetAddressInfoResponse };
