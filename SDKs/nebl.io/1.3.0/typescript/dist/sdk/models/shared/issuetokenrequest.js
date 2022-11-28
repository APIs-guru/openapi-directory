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
// IssueTokenRequestFlags
/**
 * Object representing flags that potentialy modify this transaction
**/
var IssueTokenRequestFlags = /** @class */ (function (_super) {
    __extends(IssueTokenRequestFlags, _super);
    function IssueTokenRequestFlags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=splitChange" }),
        __metadata("design:type", Boolean)
    ], IssueTokenRequestFlags.prototype, "splitChange", void 0);
    return IssueTokenRequestFlags;
}(SpeakeasyBase));
export { IssueTokenRequestFlags };
var IssueTokenRequestMetadataEncryptions = /** @class */ (function (_super) {
    __extends(IssueTokenRequestMetadataEncryptions, _super);
    function IssueTokenRequestMetadataEncryptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadataEncryptions.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadataEncryptions.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pubkey" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadataEncryptions.prototype, "pubkey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadataEncryptions.prototype, "type", void 0);
    return IssueTokenRequestMetadataEncryptions;
}(SpeakeasyBase));
export { IssueTokenRequestMetadataEncryptions };
// IssueTokenRequestMetadataRulesExpiration
/**
 * Object describing expiration rules of the token
**/
var IssueTokenRequestMetadataRulesExpiration = /** @class */ (function (_super) {
    __extends(IssueTokenRequestMetadataRulesExpiration, _super);
    function IssueTokenRequestMetadataRulesExpiration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], IssueTokenRequestMetadataRulesExpiration.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validUntil" }),
        __metadata("design:type", Number)
    ], IssueTokenRequestMetadataRulesExpiration.prototype, "validUntil", void 0);
    return IssueTokenRequestMetadataRulesExpiration;
}(SpeakeasyBase));
export { IssueTokenRequestMetadataRulesExpiration };
var IssueTokenRequestMetadataRulesFeesItems = /** @class */ (function (_super) {
    __extends(IssueTokenRequestMetadataRulesFeesItems, _super);
    function IssueTokenRequestMetadataRulesFeesItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadataRulesFeesItems.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokenId" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadataRulesFeesItems.prototype, "tokenId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadataRulesFeesItems.prototype, "value", void 0);
    return IssueTokenRequestMetadataRulesFeesItems;
}(SpeakeasyBase));
export { IssueTokenRequestMetadataRulesFeesItems };
var IssueTokenRequestMetadataRulesFees = /** @class */ (function (_super) {
    __extends(IssueTokenRequestMetadataRulesFees, _super);
    function IssueTokenRequestMetadataRulesFees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: IssueTokenRequestMetadataRulesFeesItems }),
        __metadata("design:type", Array)
    ], IssueTokenRequestMetadataRulesFees.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], IssueTokenRequestMetadataRulesFees.prototype, "locked", void 0);
    return IssueTokenRequestMetadataRulesFees;
}(SpeakeasyBase));
export { IssueTokenRequestMetadataRulesFees };
var IssueTokenRequestMetadataRulesHolders = /** @class */ (function (_super) {
    __extends(IssueTokenRequestMetadataRulesHolders, _super);
    function IssueTokenRequestMetadataRulesHolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadataRulesHolders.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], IssueTokenRequestMetadataRulesHolders.prototype, "locked", void 0);
    return IssueTokenRequestMetadataRulesHolders;
}(SpeakeasyBase));
export { IssueTokenRequestMetadataRulesHolders };
// IssueTokenRequestMetadataRules
/**
 * Object describing token rules
**/
var IssueTokenRequestMetadataRules = /** @class */ (function (_super) {
    __extends(IssueTokenRequestMetadataRules, _super);
    function IssueTokenRequestMetadataRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration" }),
        __metadata("design:type", IssueTokenRequestMetadataRulesExpiration)
    ], IssueTokenRequestMetadataRules.prototype, "expiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fees" }),
        __metadata("design:type", IssueTokenRequestMetadataRulesFees)
    ], IssueTokenRequestMetadataRules.prototype, "fees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=holders", elemType: IssueTokenRequestMetadataRulesHolders }),
        __metadata("design:type", Array)
    ], IssueTokenRequestMetadataRules.prototype, "holders", void 0);
    return IssueTokenRequestMetadataRules;
}(SpeakeasyBase));
export { IssueTokenRequestMetadataRules };
var IssueTokenRequestMetadataUrls = /** @class */ (function (_super) {
    __extends(IssueTokenRequestMetadataUrls, _super);
    function IssueTokenRequestMetadataUrls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataHash" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadataUrls.prototype, "dataHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadataUrls.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadataUrls.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadataUrls.prototype, "url", void 0);
    return IssueTokenRequestMetadataUrls;
}(SpeakeasyBase));
export { IssueTokenRequestMetadataUrls };
var IssueTokenRequestMetadataUserDataMeta = /** @class */ (function (_super) {
    __extends(IssueTokenRequestMetadataUserDataMeta, _super);
    function IssueTokenRequestMetadataUserDataMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadataUserDataMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadataUserDataMeta.prototype, "value", void 0);
    return IssueTokenRequestMetadataUserDataMeta;
}(SpeakeasyBase));
export { IssueTokenRequestMetadataUserDataMeta };
// IssueTokenRequestMetadataUserData
/**
 * Metadata set by user on token
**/
var IssueTokenRequestMetadataUserData = /** @class */ (function (_super) {
    __extends(IssueTokenRequestMetadataUserData, _super);
    function IssueTokenRequestMetadataUserData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta", elemType: IssueTokenRequestMetadataUserDataMeta }),
        __metadata("design:type", Array)
    ], IssueTokenRequestMetadataUserData.prototype, "meta", void 0);
    return IssueTokenRequestMetadataUserData;
}(SpeakeasyBase));
export { IssueTokenRequestMetadataUserData };
// IssueTokenRequestMetadata
/**
 * Object representing all metadata at token issuance
**/
var IssueTokenRequestMetadata = /** @class */ (function (_super) {
    __extends(IssueTokenRequestMetadata, _super);
    function IssueTokenRequestMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadata.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptions", elemType: IssueTokenRequestMetadataEncryptions }),
        __metadata("design:type", Array)
    ], IssueTokenRequestMetadata.prototype, "encryptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadata.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules" }),
        __metadata("design:type", IssueTokenRequestMetadataRules)
    ], IssueTokenRequestMetadata.prototype, "rules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokenName" }),
        __metadata("design:type", String)
    ], IssueTokenRequestMetadata.prototype, "tokenName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urls", elemType: IssueTokenRequestMetadataUrls }),
        __metadata("design:type", Array)
    ], IssueTokenRequestMetadata.prototype, "urls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userData" }),
        __metadata("design:type", IssueTokenRequestMetadataUserData)
    ], IssueTokenRequestMetadata.prototype, "userData", void 0);
    return IssueTokenRequestMetadata;
}(SpeakeasyBase));
export { IssueTokenRequestMetadata };
var IssueTokenRequestTransfer = /** @class */ (function (_super) {
    __extends(IssueTokenRequestTransfer, _super);
    function IssueTokenRequestTransfer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], IssueTokenRequestTransfer.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], IssueTokenRequestTransfer.prototype, "amount", void 0);
    return IssueTokenRequestTransfer;
}(SpeakeasyBase));
export { IssueTokenRequestTransfer };
var IssueTokenRequest = /** @class */ (function (_super) {
    __extends(IssueTokenRequest, _super);
    function IssueTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], IssueTokenRequest.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=divisibility" }),
        __metadata("design:type", Number)
    ], IssueTokenRequest.prototype, "divisibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fee" }),
        __metadata("design:type", Number)
    ], IssueTokenRequest.prototype, "fee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flags" }),
        __metadata("design:type", IssueTokenRequestFlags)
    ], IssueTokenRequest.prototype, "flags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issueAddress" }),
        __metadata("design:type", String)
    ], IssueTokenRequest.prototype, "issueAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", IssueTokenRequestMetadata)
    ], IssueTokenRequest.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reissuable" }),
        __metadata("design:type", Boolean)
    ], IssueTokenRequest.prototype, "reissuable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfer", elemType: IssueTokenRequestTransfer }),
        __metadata("design:type", Array)
    ], IssueTokenRequest.prototype, "transfer", void 0);
    return IssueTokenRequest;
}(SpeakeasyBase));
export { IssueTokenRequest };
