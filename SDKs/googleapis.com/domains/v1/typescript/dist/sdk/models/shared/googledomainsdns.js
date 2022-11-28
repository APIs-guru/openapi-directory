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
import { DsRecord } from "./dsrecord";
export var GoogleDomainsDnsDsStateEnum;
(function (GoogleDomainsDnsDsStateEnum) {
    GoogleDomainsDnsDsStateEnum["DsStateUnspecified"] = "DS_STATE_UNSPECIFIED";
    GoogleDomainsDnsDsStateEnum["DsRecordsUnpublished"] = "DS_RECORDS_UNPUBLISHED";
    GoogleDomainsDnsDsStateEnum["DsRecordsPublished"] = "DS_RECORDS_PUBLISHED";
})(GoogleDomainsDnsDsStateEnum || (GoogleDomainsDnsDsStateEnum = {}));
// GoogleDomainsDns
/**
 * Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).
**/
var GoogleDomainsDns = /** @class */ (function (_super) {
    __extends(GoogleDomainsDns, _super);
    function GoogleDomainsDns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dsRecords", elemType: DsRecord }),
        __metadata("design:type", Array)
    ], GoogleDomainsDns.prototype, "dsRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dsState" }),
        __metadata("design:type", String)
    ], GoogleDomainsDns.prototype, "dsState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameServers" }),
        __metadata("design:type", Array)
    ], GoogleDomainsDns.prototype, "nameServers", void 0);
    return GoogleDomainsDns;
}(SpeakeasyBase));
export { GoogleDomainsDns };
// GoogleDomainsDnsInput
/**
 * Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).
**/
var GoogleDomainsDnsInput = /** @class */ (function (_super) {
    __extends(GoogleDomainsDnsInput, _super);
    function GoogleDomainsDnsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dsState" }),
        __metadata("design:type", String)
    ], GoogleDomainsDnsInput.prototype, "dsState", void 0);
    return GoogleDomainsDnsInput;
}(SpeakeasyBase));
export { GoogleDomainsDnsInput };
