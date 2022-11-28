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
import { GoogleSecuritySafebrowsingV4RawHashes } from "./googlesecuritysafebrowsingv4rawhashes";
import { GoogleSecuritySafebrowsingV4RawIndices } from "./googlesecuritysafebrowsingv4rawindices";
import { GoogleSecuritySafebrowsingV4RiceDeltaEncoding } from "./googlesecuritysafebrowsingv4ricedeltaencoding";
export var GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum;
(function (GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum) {
    GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum["CompressionTypeUnspecified"] = "COMPRESSION_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum["Raw"] = "RAW";
    GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum["Rice"] = "RICE";
})(GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum || (GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum = {}));
// GoogleSecuritySafebrowsingV4ThreatEntrySet
/**
 * A set of threats that should be added or removed from a client's local database.
**/
var GoogleSecuritySafebrowsingV4ThreatEntrySet = /** @class */ (function (_super) {
    __extends(GoogleSecuritySafebrowsingV4ThreatEntrySet, _super);
    function GoogleSecuritySafebrowsingV4ThreatEntrySet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compressionType" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4ThreatEntrySet.prototype, "compressionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rawHashes" }),
        __metadata("design:type", GoogleSecuritySafebrowsingV4RawHashes)
    ], GoogleSecuritySafebrowsingV4ThreatEntrySet.prototype, "rawHashes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rawIndices" }),
        __metadata("design:type", GoogleSecuritySafebrowsingV4RawIndices)
    ], GoogleSecuritySafebrowsingV4ThreatEntrySet.prototype, "rawIndices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=riceHashes" }),
        __metadata("design:type", GoogleSecuritySafebrowsingV4RiceDeltaEncoding)
    ], GoogleSecuritySafebrowsingV4ThreatEntrySet.prototype, "riceHashes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=riceIndices" }),
        __metadata("design:type", GoogleSecuritySafebrowsingV4RiceDeltaEncoding)
    ], GoogleSecuritySafebrowsingV4ThreatEntrySet.prototype, "riceIndices", void 0);
    return GoogleSecuritySafebrowsingV4ThreatEntrySet;
}(SpeakeasyBase));
export { GoogleSecuritySafebrowsingV4ThreatEntrySet };
