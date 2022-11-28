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
export var GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum;
(function (GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum) {
    GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum["ThreatSourceTypeUnspecified"] = "THREAT_SOURCE_TYPE_UNSPECIFIED";
    GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum["MatchingUrl"] = "MATCHING_URL";
    GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum["TabUrl"] = "TAB_URL";
    GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum["TabRedirect"] = "TAB_REDIRECT";
    GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum["TabResource"] = "TAB_RESOURCE";
})(GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum || (GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum = {}));
// GoogleSecuritySafebrowsingV4ThreatHitThreatSource
/**
 * A single resource related to a threat hit.
**/
var GoogleSecuritySafebrowsingV4ThreatHitThreatSource = /** @class */ (function (_super) {
    __extends(GoogleSecuritySafebrowsingV4ThreatHitThreatSource, _super);
    function GoogleSecuritySafebrowsingV4ThreatHitThreatSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referrer" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4ThreatHitThreatSource.prototype, "referrer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteIp" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4ThreatHitThreatSource.prototype, "remoteIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4ThreatHitThreatSource.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GoogleSecuritySafebrowsingV4ThreatHitThreatSource.prototype, "url", void 0);
    return GoogleSecuritySafebrowsingV4ThreatHitThreatSource;
}(SpeakeasyBase));
export { GoogleSecuritySafebrowsingV4ThreatHitThreatSource };
