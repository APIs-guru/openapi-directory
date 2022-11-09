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
var GetTransactionInfoResponseVinPreviousOutput = /** @class */ (function (_super) {
    __extends(GetTransactionInfoResponseVinPreviousOutput, _super);
    function GetTransactionInfoResponseVinPreviousOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=addresses" }),
        __metadata("design:type", Array)
    ], GetTransactionInfoResponseVinPreviousOutput.prototype, "addresses", void 0);
    __decorate([
        Metadata({ data: "json, name=asm" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVinPreviousOutput.prototype, "asm", void 0);
    __decorate([
        Metadata({ data: "json, name=hex" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVinPreviousOutput.prototype, "hex", void 0);
    __decorate([
        Metadata({ data: "json, name=reqSigs" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponseVinPreviousOutput.prototype, "reqSigs", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVinPreviousOutput.prototype, "type", void 0);
    return GetTransactionInfoResponseVinPreviousOutput;
}(SpeakeasyBase));
export { GetTransactionInfoResponseVinPreviousOutput };
var GetTransactionInfoResponseVinScriptSig = /** @class */ (function (_super) {
    __extends(GetTransactionInfoResponseVinScriptSig, _super);
    function GetTransactionInfoResponseVinScriptSig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=asm" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVinScriptSig.prototype, "asm", void 0);
    __decorate([
        Metadata({ data: "json, name=hex" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVinScriptSig.prototype, "hex", void 0);
    return GetTransactionInfoResponseVinScriptSig;
}(SpeakeasyBase));
export { GetTransactionInfoResponseVinScriptSig };
var GetTransactionInfoResponseVinTokens = /** @class */ (function (_super) {
    __extends(GetTransactionInfoResponseVinTokens, _super);
    function GetTransactionInfoResponseVinTokens() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=aggregationPolicy" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVinTokens.prototype, "aggregationPolicy", void 0);
    __decorate([
        Metadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponseVinTokens.prototype, "amount", void 0);
    __decorate([
        Metadata({ data: "json, name=divisibility" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponseVinTokens.prototype, "divisibility", void 0);
    __decorate([
        Metadata({ data: "json, name=issueTxid" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVinTokens.prototype, "issueTxid", void 0);
    __decorate([
        Metadata({ data: "json, name=lockStatus" }),
        __metadata("design:type", Boolean)
    ], GetTransactionInfoResponseVinTokens.prototype, "lockStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=tokenId" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVinTokens.prototype, "tokenId", void 0);
    return GetTransactionInfoResponseVinTokens;
}(SpeakeasyBase));
export { GetTransactionInfoResponseVinTokens };
var GetTransactionInfoResponseVin = /** @class */ (function (_super) {
    __extends(GetTransactionInfoResponseVin, _super);
    function GetTransactionInfoResponseVin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=previousOutput" }),
        __metadata("design:type", GetTransactionInfoResponseVinPreviousOutput)
    ], GetTransactionInfoResponseVin.prototype, "previousOutput", void 0);
    __decorate([
        Metadata({ data: "json, name=scriptSig" }),
        __metadata("design:type", GetTransactionInfoResponseVinScriptSig)
    ], GetTransactionInfoResponseVin.prototype, "scriptSig", void 0);
    __decorate([
        Metadata({ data: "json, name=sequence" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponseVin.prototype, "sequence", void 0);
    __decorate([
        Metadata({ data: "json, name=tokens", elemType: shared.GetTransactionInfoResponseVinTokens }),
        __metadata("design:type", Array)
    ], GetTransactionInfoResponseVin.prototype, "tokens", void 0);
    __decorate([
        Metadata({ data: "json, name=txid" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVin.prototype, "txid", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponseVin.prototype, "value", void 0);
    __decorate([
        Metadata({ data: "json, name=vout" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponseVin.prototype, "vout", void 0);
    return GetTransactionInfoResponseVin;
}(SpeakeasyBase));
export { GetTransactionInfoResponseVin };
var GetTransactionInfoResponseVoutScriptPubKey = /** @class */ (function (_super) {
    __extends(GetTransactionInfoResponseVoutScriptPubKey, _super);
    function GetTransactionInfoResponseVoutScriptPubKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=addresses" }),
        __metadata("design:type", Array)
    ], GetTransactionInfoResponseVoutScriptPubKey.prototype, "addresses", void 0);
    __decorate([
        Metadata({ data: "json, name=asm" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVoutScriptPubKey.prototype, "asm", void 0);
    __decorate([
        Metadata({ data: "json, name=hex" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVoutScriptPubKey.prototype, "hex", void 0);
    __decorate([
        Metadata({ data: "json, name=reqSigs" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponseVoutScriptPubKey.prototype, "reqSigs", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVoutScriptPubKey.prototype, "type", void 0);
    return GetTransactionInfoResponseVoutScriptPubKey;
}(SpeakeasyBase));
export { GetTransactionInfoResponseVoutScriptPubKey };
var GetTransactionInfoResponseVoutTokens = /** @class */ (function (_super) {
    __extends(GetTransactionInfoResponseVoutTokens, _super);
    function GetTransactionInfoResponseVoutTokens() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=aggregationPolicy" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVoutTokens.prototype, "aggregationPolicy", void 0);
    __decorate([
        Metadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponseVoutTokens.prototype, "amount", void 0);
    __decorate([
        Metadata({ data: "json, name=divisibility" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponseVoutTokens.prototype, "divisibility", void 0);
    __decorate([
        Metadata({ data: "json, name=issueTxid" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVoutTokens.prototype, "issueTxid", void 0);
    __decorate([
        Metadata({ data: "json, name=lockStatus" }),
        __metadata("design:type", Boolean)
    ], GetTransactionInfoResponseVoutTokens.prototype, "lockStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=tokenId" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVoutTokens.prototype, "tokenId", void 0);
    return GetTransactionInfoResponseVoutTokens;
}(SpeakeasyBase));
export { GetTransactionInfoResponseVoutTokens };
var GetTransactionInfoResponseVout = /** @class */ (function (_super) {
    __extends(GetTransactionInfoResponseVout, _super);
    function GetTransactionInfoResponseVout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=blockheight" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponseVout.prototype, "blockheight", void 0);
    __decorate([
        Metadata({ data: "json, name=n" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponseVout.prototype, "n", void 0);
    __decorate([
        Metadata({ data: "json, name=scriptPubKey" }),
        __metadata("design:type", GetTransactionInfoResponseVoutScriptPubKey)
    ], GetTransactionInfoResponseVout.prototype, "scriptPubKey", void 0);
    __decorate([
        Metadata({ data: "json, name=tokens", elemType: shared.GetTransactionInfoResponseVoutTokens }),
        __metadata("design:type", Array)
    ], GetTransactionInfoResponseVout.prototype, "tokens", void 0);
    __decorate([
        Metadata({ data: "json, name=used" }),
        __metadata("design:type", Boolean)
    ], GetTransactionInfoResponseVout.prototype, "used", void 0);
    __decorate([
        Metadata({ data: "json, name=usedBlockheight" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponseVout.prototype, "usedBlockheight", void 0);
    __decorate([
        Metadata({ data: "json, name=usedTxid" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponseVout.prototype, "usedTxid", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponseVout.prototype, "value", void 0);
    return GetTransactionInfoResponseVout;
}(SpeakeasyBase));
export { GetTransactionInfoResponseVout };
var GetTransactionInfoResponse = /** @class */ (function (_super) {
    __extends(GetTransactionInfoResponse, _super);
    function GetTransactionInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=blockhash" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponse.prototype, "blockhash", void 0);
    __decorate([
        Metadata({ data: "json, name=blockheight" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponse.prototype, "blockheight", void 0);
    __decorate([
        Metadata({ data: "json, name=blocktime" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponse.prototype, "blocktime", void 0);
    __decorate([
        Metadata({ data: "json, name=confirmations" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponse.prototype, "confirmations", void 0);
    __decorate([
        Metadata({ data: "json, name=fee" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponse.prototype, "fee", void 0);
    __decorate([
        Metadata({ data: "json, name=hex" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponse.prototype, "hex", void 0);
    __decorate([
        Metadata({ data: "json, name=locktime" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponse.prototype, "locktime", void 0);
    __decorate([
        Metadata({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponse.prototype, "time", void 0);
    __decorate([
        Metadata({ data: "json, name=totalsent" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponse.prototype, "totalsent", void 0);
    __decorate([
        Metadata({ data: "json, name=txid" }),
        __metadata("design:type", String)
    ], GetTransactionInfoResponse.prototype, "txid", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], GetTransactionInfoResponse.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "json, name=vin", elemType: shared.GetTransactionInfoResponseVin }),
        __metadata("design:type", Array)
    ], GetTransactionInfoResponse.prototype, "vin", void 0);
    __decorate([
        Metadata({ data: "json, name=vout", elemType: shared.GetTransactionInfoResponseVout }),
        __metadata("design:type", Array)
    ], GetTransactionInfoResponse.prototype, "vout", void 0);
    return GetTransactionInfoResponse;
}(SpeakeasyBase));
export { GetTransactionInfoResponse };
