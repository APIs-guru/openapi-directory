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
// GoogleCloudWebriskV1RawHashes
/**
 * The uncompressed threat entries in hash format. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URI. Used for sending ThreatEntryAdditons to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.
**/
var GoogleCloudWebriskV1RawHashes = /** @class */ (function (_super) {
    __extends(GoogleCloudWebriskV1RawHashes, _super);
    function GoogleCloudWebriskV1RawHashes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefixSize" }),
        __metadata("design:type", Number)
    ], GoogleCloudWebriskV1RawHashes.prototype, "prefixSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rawHashes" }),
        __metadata("design:type", String)
    ], GoogleCloudWebriskV1RawHashes.prototype, "rawHashes", void 0);
    return GoogleCloudWebriskV1RawHashes;
}(SpeakeasyBase));
export { GoogleCloudWebriskV1RawHashes };
