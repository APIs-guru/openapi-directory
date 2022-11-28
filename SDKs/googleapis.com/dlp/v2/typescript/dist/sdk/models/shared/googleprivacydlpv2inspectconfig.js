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
import { GooglePrivacyDlpV2CustomInfoType } from "./googleprivacydlpv2custominfotype";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2FindingLimits } from "./googleprivacydlpv2findinglimits";
import { GooglePrivacyDlpV2InspectionRuleSet } from "./googleprivacydlpv2inspectionruleset";
export var GooglePrivacyDlpV2InspectConfigContentOptionsEnum;
(function (GooglePrivacyDlpV2InspectConfigContentOptionsEnum) {
    GooglePrivacyDlpV2InspectConfigContentOptionsEnum["ContentUnspecified"] = "CONTENT_UNSPECIFIED";
    GooglePrivacyDlpV2InspectConfigContentOptionsEnum["ContentText"] = "CONTENT_TEXT";
    GooglePrivacyDlpV2InspectConfigContentOptionsEnum["ContentImage"] = "CONTENT_IMAGE";
})(GooglePrivacyDlpV2InspectConfigContentOptionsEnum || (GooglePrivacyDlpV2InspectConfigContentOptionsEnum = {}));
export var GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum;
(function (GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum) {
    GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum["LikelihoodUnspecified"] = "LIKELIHOOD_UNSPECIFIED";
    GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum["Unlikely"] = "UNLIKELY";
    GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum["Possible"] = "POSSIBLE";
    GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum["Likely"] = "LIKELY";
    GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum || (GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum = {}));
// GooglePrivacyDlpV2InspectConfig
/**
 * Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.
**/
var GooglePrivacyDlpV2InspectConfig = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2InspectConfig, _super);
    function GooglePrivacyDlpV2InspectConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentOptions" }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2InspectConfig.prototype, "contentOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customInfoTypes", elemType: GooglePrivacyDlpV2CustomInfoType }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2InspectConfig.prototype, "customInfoTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeInfoTypes" }),
        __metadata("design:type", Boolean)
    ], GooglePrivacyDlpV2InspectConfig.prototype, "excludeInfoTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeQuote" }),
        __metadata("design:type", Boolean)
    ], GooglePrivacyDlpV2InspectConfig.prototype, "includeQuote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infoTypes", elemType: GooglePrivacyDlpV2InfoType }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2InspectConfig.prototype, "infoTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limits" }),
        __metadata("design:type", GooglePrivacyDlpV2FindingLimits)
    ], GooglePrivacyDlpV2InspectConfig.prototype, "limits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minLikelihood" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2InspectConfig.prototype, "minLikelihood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleSet", elemType: GooglePrivacyDlpV2InspectionRuleSet }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2InspectConfig.prototype, "ruleSet", void 0);
    return GooglePrivacyDlpV2InspectConfig;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2InspectConfig };
