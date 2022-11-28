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
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2Location } from "./googleprivacydlpv2location";
import { GooglePrivacyDlpV2QuoteInfo } from "./googleprivacydlpv2quoteinfo";
export var GooglePrivacyDlpV2FindingLikelihoodEnum;
(function (GooglePrivacyDlpV2FindingLikelihoodEnum) {
    GooglePrivacyDlpV2FindingLikelihoodEnum["LikelihoodUnspecified"] = "LIKELIHOOD_UNSPECIFIED";
    GooglePrivacyDlpV2FindingLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    GooglePrivacyDlpV2FindingLikelihoodEnum["Unlikely"] = "UNLIKELY";
    GooglePrivacyDlpV2FindingLikelihoodEnum["Possible"] = "POSSIBLE";
    GooglePrivacyDlpV2FindingLikelihoodEnum["Likely"] = "LIKELY";
    GooglePrivacyDlpV2FindingLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(GooglePrivacyDlpV2FindingLikelihoodEnum || (GooglePrivacyDlpV2FindingLikelihoodEnum = {}));
// GooglePrivacyDlpV2Finding
/**
 * Represents a piece of potentially sensitive content.
**/
var GooglePrivacyDlpV2Finding = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2Finding, _super);
    function GooglePrivacyDlpV2Finding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2Finding.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=findingId" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2Finding.prototype, "findingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infoType" }),
        __metadata("design:type", GooglePrivacyDlpV2InfoType)
    ], GooglePrivacyDlpV2Finding.prototype, "infoType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobCreateTime" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2Finding.prototype, "jobCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobName" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2Finding.prototype, "jobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GooglePrivacyDlpV2Finding.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=likelihood" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2Finding.prototype, "likelihood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", GooglePrivacyDlpV2Location)
    ], GooglePrivacyDlpV2Finding.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2Finding.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quote" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2Finding.prototype, "quote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quoteInfo" }),
        __metadata("design:type", GooglePrivacyDlpV2QuoteInfo)
    ], GooglePrivacyDlpV2Finding.prototype, "quoteInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2Finding.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerName" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2Finding.prototype, "triggerName", void 0);
    return GooglePrivacyDlpV2Finding;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2Finding };
