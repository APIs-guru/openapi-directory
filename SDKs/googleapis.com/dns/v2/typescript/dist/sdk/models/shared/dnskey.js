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
import { DnsKeyDigest } from "./dnskeydigest";
export var DnsKeyAlgorithmEnum;
(function (DnsKeyAlgorithmEnum) {
    DnsKeyAlgorithmEnum["Rsasha1"] = "RSASHA1";
    DnsKeyAlgorithmEnum["Rsasha256"] = "RSASHA256";
    DnsKeyAlgorithmEnum["Rsasha512"] = "RSASHA512";
    DnsKeyAlgorithmEnum["Ecdsap256Sha256"] = "ECDSAP256SHA256";
    DnsKeyAlgorithmEnum["Ecdsap384Sha384"] = "ECDSAP384SHA384";
})(DnsKeyAlgorithmEnum || (DnsKeyAlgorithmEnum = {}));
export var DnsKeyTypeEnum;
(function (DnsKeyTypeEnum) {
    DnsKeyTypeEnum["KeySigning"] = "KEY_SIGNING";
    DnsKeyTypeEnum["ZoneSigning"] = "ZONE_SIGNING";
})(DnsKeyTypeEnum || (DnsKeyTypeEnum = {}));
// DnsKey
/**
 * A DNSSEC key pair.
**/
var DnsKey = /** @class */ (function (_super) {
    __extends(DnsKey, _super);
    function DnsKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], DnsKey.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], DnsKey.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DnsKey.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=digests", elemType: DnsKeyDigest }),
        __metadata("design:type", Array)
    ], DnsKey.prototype, "digests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DnsKey.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isActive" }),
        __metadata("design:type", Boolean)
    ], DnsKey.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyLength" }),
        __metadata("design:type", Number)
    ], DnsKey.prototype, "keyLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyTag" }),
        __metadata("design:type", Number)
    ], DnsKey.prototype, "keyTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], DnsKey.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicKey" }),
        __metadata("design:type", String)
    ], DnsKey.prototype, "publicKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DnsKey.prototype, "type", void 0);
    return DnsKey;
}(SpeakeasyBase));
export { DnsKey };
