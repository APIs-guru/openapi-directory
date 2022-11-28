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
var GetTxResponseVinScriptSig = /** @class */ (function (_super) {
    __extends(GetTxResponseVinScriptSig, _super);
    function GetTxResponseVinScriptSig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asm" }),
        __metadata("design:type", String)
    ], GetTxResponseVinScriptSig.prototype, "asm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hex" }),
        __metadata("design:type", String)
    ], GetTxResponseVinScriptSig.prototype, "hex", void 0);
    return GetTxResponseVinScriptSig;
}(SpeakeasyBase));
export { GetTxResponseVinScriptSig };
var GetTxResponseVin = /** @class */ (function (_super) {
    __extends(GetTxResponseVin, _super);
    function GetTxResponseVin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=n" }),
        __metadata("design:type", Number)
    ], GetTxResponseVin.prototype, "n", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scriptSig" }),
        __metadata("design:type", GetTxResponseVinScriptSig)
    ], GetTxResponseVin.prototype, "scriptSig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sequence" }),
        __metadata("design:type", Number)
    ], GetTxResponseVin.prototype, "sequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txid" }),
        __metadata("design:type", String)
    ], GetTxResponseVin.prototype, "txid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], GetTxResponseVin.prototype, "value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueSat" }),
        __metadata("design:type", Number)
    ], GetTxResponseVin.prototype, "valueSat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vout" }),
        __metadata("design:type", Number)
    ], GetTxResponseVin.prototype, "vout", void 0);
    return GetTxResponseVin;
}(SpeakeasyBase));
export { GetTxResponseVin };
var GetTxResponseVoutScriptPubKey = /** @class */ (function (_super) {
    __extends(GetTxResponseVoutScriptPubKey, _super);
    function GetTxResponseVoutScriptPubKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses" }),
        __metadata("design:type", Array)
    ], GetTxResponseVoutScriptPubKey.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asm" }),
        __metadata("design:type", String)
    ], GetTxResponseVoutScriptPubKey.prototype, "asm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hex" }),
        __metadata("design:type", String)
    ], GetTxResponseVoutScriptPubKey.prototype, "hex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reqSigs" }),
        __metadata("design:type", Number)
    ], GetTxResponseVoutScriptPubKey.prototype, "reqSigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetTxResponseVoutScriptPubKey.prototype, "type", void 0);
    return GetTxResponseVoutScriptPubKey;
}(SpeakeasyBase));
export { GetTxResponseVoutScriptPubKey };
var GetTxResponseVout = /** @class */ (function (_super) {
    __extends(GetTxResponseVout, _super);
    function GetTxResponseVout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockheight" }),
        __metadata("design:type", Number)
    ], GetTxResponseVout.prototype, "blockheight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=n" }),
        __metadata("design:type", Number)
    ], GetTxResponseVout.prototype, "n", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scriptPubKey" }),
        __metadata("design:type", GetTxResponseVoutScriptPubKey)
    ], GetTxResponseVout.prototype, "scriptPubKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Boolean)
    ], GetTxResponseVout.prototype, "used", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usedBlockheight" }),
        __metadata("design:type", Number)
    ], GetTxResponseVout.prototype, "usedBlockheight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usedTxid" }),
        __metadata("design:type", String)
    ], GetTxResponseVout.prototype, "usedTxid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], GetTxResponseVout.prototype, "value", void 0);
    return GetTxResponseVout;
}(SpeakeasyBase));
export { GetTxResponseVout };
var GetTxResponse = /** @class */ (function (_super) {
    __extends(GetTxResponse, _super);
    function GetTxResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockhash" }),
        __metadata("design:type", String)
    ], GetTxResponse.prototype, "blockhash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockheight" }),
        __metadata("design:type", Number)
    ], GetTxResponse.prototype, "blockheight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocktime" }),
        __metadata("design:type", Number)
    ], GetTxResponse.prototype, "blocktime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confirmations" }),
        __metadata("design:type", Number)
    ], GetTxResponse.prototype, "confirmations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fee" }),
        __metadata("design:type", Number)
    ], GetTxResponse.prototype, "fee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fees" }),
        __metadata("design:type", Number)
    ], GetTxResponse.prototype, "fees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locktime" }),
        __metadata("design:type", Number)
    ], GetTxResponse.prototype, "locktime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], GetTxResponse.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], GetTxResponse.prototype, "time", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalsent" }),
        __metadata("design:type", Number)
    ], GetTxResponse.prototype, "totalsent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txid" }),
        __metadata("design:type", String)
    ], GetTxResponse.prototype, "txid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueIn" }),
        __metadata("design:type", Number)
    ], GetTxResponse.prototype, "valueIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueOut" }),
        __metadata("design:type", Number)
    ], GetTxResponse.prototype, "valueOut", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], GetTxResponse.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vin", elemType: GetTxResponseVin }),
        __metadata("design:type", Array)
    ], GetTxResponse.prototype, "vin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vout", elemType: GetTxResponseVout }),
        __metadata("design:type", Array)
    ], GetTxResponse.prototype, "vout", void 0);
    return GetTxResponse;
}(SpeakeasyBase));
export { GetTxResponse };
