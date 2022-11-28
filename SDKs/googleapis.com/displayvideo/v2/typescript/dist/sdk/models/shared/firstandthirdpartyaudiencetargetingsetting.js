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
export var FirstAndThirdPartyAudienceTargetingSettingRecencyEnum;
(function (FirstAndThirdPartyAudienceTargetingSettingRecencyEnum) {
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["RecencyNoLimit"] = "RECENCY_NO_LIMIT";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency1Minute"] = "RECENCY_1_MINUTE";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency5Minutes"] = "RECENCY_5_MINUTES";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency10Minutes"] = "RECENCY_10_MINUTES";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency15Minutes"] = "RECENCY_15_MINUTES";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency30Minutes"] = "RECENCY_30_MINUTES";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency1Hour"] = "RECENCY_1_HOUR";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency2Hours"] = "RECENCY_2_HOURS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency3Hours"] = "RECENCY_3_HOURS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency6Hours"] = "RECENCY_6_HOURS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency12Hours"] = "RECENCY_12_HOURS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency1Day"] = "RECENCY_1_DAY";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency2Days"] = "RECENCY_2_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency3Days"] = "RECENCY_3_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency5Days"] = "RECENCY_5_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency7Days"] = "RECENCY_7_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency10Days"] = "RECENCY_10_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency14Days"] = "RECENCY_14_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency15Days"] = "RECENCY_15_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency21Days"] = "RECENCY_21_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency28Days"] = "RECENCY_28_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency30Days"] = "RECENCY_30_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency40Days"] = "RECENCY_40_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency45Days"] = "RECENCY_45_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency60Days"] = "RECENCY_60_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency90Days"] = "RECENCY_90_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency120Days"] = "RECENCY_120_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency180Days"] = "RECENCY_180_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency270Days"] = "RECENCY_270_DAYS";
    FirstAndThirdPartyAudienceTargetingSettingRecencyEnum["Recency365Days"] = "RECENCY_365_DAYS";
})(FirstAndThirdPartyAudienceTargetingSettingRecencyEnum || (FirstAndThirdPartyAudienceTargetingSettingRecencyEnum = {}));
// FirstAndThirdPartyAudienceTargetingSetting
/**
 * Details of first and third party audience targeting setting.
**/
var FirstAndThirdPartyAudienceTargetingSetting = /** @class */ (function (_super) {
    __extends(FirstAndThirdPartyAudienceTargetingSetting, _super);
    function FirstAndThirdPartyAudienceTargetingSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstAndThirdPartyAudienceId" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudienceTargetingSetting.prototype, "firstAndThirdPartyAudienceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recency" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudienceTargetingSetting.prototype, "recency", void 0);
    return FirstAndThirdPartyAudienceTargetingSetting;
}(SpeakeasyBase));
export { FirstAndThirdPartyAudienceTargetingSetting };
