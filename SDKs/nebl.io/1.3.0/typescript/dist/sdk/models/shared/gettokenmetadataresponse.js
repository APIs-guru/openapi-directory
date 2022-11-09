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
var GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta = /** @class */ (function (_super) {
    __extends(GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta, _super);
    function GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta.prototype, "value", void 0);
    return GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta;
}(SpeakeasyBase));
export { GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta };
// GetTokenMetadataResponseMetadataOfIssuanceDataUserData
/**
 * Metadata set by user on token
**/
var GetTokenMetadataResponseMetadataOfIssuanceDataUserData = /** @class */ (function (_super) {
    __extends(GetTokenMetadataResponseMetadataOfIssuanceDataUserData, _super);
    function GetTokenMetadataResponseMetadataOfIssuanceDataUserData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta", elemType: shared.GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta }),
        __metadata("design:type", Array)
    ], GetTokenMetadataResponseMetadataOfIssuanceDataUserData.prototype, "meta", void 0);
    return GetTokenMetadataResponseMetadataOfIssuanceDataUserData;
}(SpeakeasyBase));
export { GetTokenMetadataResponseMetadataOfIssuanceDataUserData };
var GetTokenMetadataResponseMetadataOfIssuanceData = /** @class */ (function (_super) {
    __extends(GetTokenMetadataResponseMetadataOfIssuanceData, _super);
    function GetTokenMetadataResponseMetadataOfIssuanceData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetTokenMetadataResponseMetadataOfIssuanceData.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], GetTokenMetadataResponseMetadataOfIssuanceData.prototype, "issuer", void 0);
    __decorate([
        Metadata({ data: "json, name=tokenName" }),
        __metadata("design:type", String)
    ], GetTokenMetadataResponseMetadataOfIssuanceData.prototype, "tokenName", void 0);
    __decorate([
        Metadata({ data: "json, name=userData" }),
        __metadata("design:type", GetTokenMetadataResponseMetadataOfIssuanceDataUserData)
    ], GetTokenMetadataResponseMetadataOfIssuanceData.prototype, "userData", void 0);
    return GetTokenMetadataResponseMetadataOfIssuanceData;
}(SpeakeasyBase));
export { GetTokenMetadataResponseMetadataOfIssuanceData };
// GetTokenMetadataResponseMetadataOfIssuance
/**
 * Metadata set at issuance
**/
var GetTokenMetadataResponseMetadataOfIssuance = /** @class */ (function (_super) {
    __extends(GetTokenMetadataResponseMetadataOfIssuance, _super);
    function GetTokenMetadataResponseMetadataOfIssuance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=data" }),
        __metadata("design:type", GetTokenMetadataResponseMetadataOfIssuanceData)
    ], GetTokenMetadataResponseMetadataOfIssuance.prototype, "data", void 0);
    return GetTokenMetadataResponseMetadataOfIssuance;
}(SpeakeasyBase));
export { GetTokenMetadataResponseMetadataOfIssuance };
// GetTokenMetadataResponseMetadataOfUtxoUserData
/**
 * Metadata set by user on token for UTXO
**/
var GetTokenMetadataResponseMetadataOfUtxoUserData = /** @class */ (function (_super) {
    __extends(GetTokenMetadataResponseMetadataOfUtxoUserData, _super);
    function GetTokenMetadataResponseMetadataOfUtxoUserData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", Array)
    ], GetTokenMetadataResponseMetadataOfUtxoUserData.prototype, "meta", void 0);
    return GetTokenMetadataResponseMetadataOfUtxoUserData;
}(SpeakeasyBase));
export { GetTokenMetadataResponseMetadataOfUtxoUserData };
// GetTokenMetadataResponseMetadataOfUtxo
/**
 * Metadata set for UTXO
**/
var GetTokenMetadataResponseMetadataOfUtxo = /** @class */ (function (_super) {
    __extends(GetTokenMetadataResponseMetadataOfUtxo, _super);
    function GetTokenMetadataResponseMetadataOfUtxo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=userData" }),
        __metadata("design:type", GetTokenMetadataResponseMetadataOfUtxoUserData)
    ], GetTokenMetadataResponseMetadataOfUtxo.prototype, "userData", void 0);
    return GetTokenMetadataResponseMetadataOfUtxo;
}(SpeakeasyBase));
export { GetTokenMetadataResponseMetadataOfUtxo };
var GetTokenMetadataResponse = /** @class */ (function (_super) {
    __extends(GetTokenMetadataResponse, _super);
    function GetTokenMetadataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=aggregationPolicy" }),
        __metadata("design:type", String)
    ], GetTokenMetadataResponse.prototype, "aggregationPolicy", void 0);
    __decorate([
        Metadata({ data: "json, name=divisibility" }),
        __metadata("design:type", Number)
    ], GetTokenMetadataResponse.prototype, "divisibility", void 0);
    __decorate([
        Metadata({ data: "json, name=firstBlock" }),
        __metadata("design:type", Number)
    ], GetTokenMetadataResponse.prototype, "firstBlock", void 0);
    __decorate([
        Metadata({ data: "json, name=initialIssuanceAmount" }),
        __metadata("design:type", Number)
    ], GetTokenMetadataResponse.prototype, "initialIssuanceAmount", void 0);
    __decorate([
        Metadata({ data: "json, name=issuanceTxid" }),
        __metadata("design:type", String)
    ], GetTokenMetadataResponse.prototype, "issuanceTxid", void 0);
    __decorate([
        Metadata({ data: "json, name=issueAddress" }),
        __metadata("design:type", String)
    ], GetTokenMetadataResponse.prototype, "issueAddress", void 0);
    __decorate([
        Metadata({ data: "json, name=lockStatus" }),
        __metadata("design:type", Boolean)
    ], GetTokenMetadataResponse.prototype, "lockStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=metadataOfIssuance" }),
        __metadata("design:type", GetTokenMetadataResponseMetadataOfIssuance)
    ], GetTokenMetadataResponse.prototype, "metadataOfIssuance", void 0);
    __decorate([
        Metadata({ data: "json, name=metadataOfUtxo" }),
        __metadata("design:type", GetTokenMetadataResponseMetadataOfUtxo)
    ], GetTokenMetadataResponse.prototype, "metadataOfUtxo", void 0);
    __decorate([
        Metadata({ data: "json, name=numOfBurns" }),
        __metadata("design:type", Number)
    ], GetTokenMetadataResponse.prototype, "numOfBurns", void 0);
    __decorate([
        Metadata({ data: "json, name=numOfHolders" }),
        __metadata("design:type", Number)
    ], GetTokenMetadataResponse.prototype, "numOfHolders", void 0);
    __decorate([
        Metadata({ data: "json, name=numOfIssuance" }),
        __metadata("design:type", Number)
    ], GetTokenMetadataResponse.prototype, "numOfIssuance", void 0);
    __decorate([
        Metadata({ data: "json, name=numOfTransfers" }),
        __metadata("design:type", Number)
    ], GetTokenMetadataResponse.prototype, "numOfTransfers", void 0);
    __decorate([
        Metadata({ data: "json, name=someUtxo" }),
        __metadata("design:type", String)
    ], GetTokenMetadataResponse.prototype, "someUtxo", void 0);
    __decorate([
        Metadata({ data: "json, name=tokenId" }),
        __metadata("design:type", String)
    ], GetTokenMetadataResponse.prototype, "tokenId", void 0);
    __decorate([
        Metadata({ data: "json, name=totalSupply" }),
        __metadata("design:type", Number)
    ], GetTokenMetadataResponse.prototype, "totalSupply", void 0);
    return GetTokenMetadataResponse;
}(SpeakeasyBase));
export { GetTokenMetadataResponse };
