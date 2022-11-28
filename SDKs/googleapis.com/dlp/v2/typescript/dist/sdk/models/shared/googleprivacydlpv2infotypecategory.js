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
export var GooglePrivacyDlpV2InfoTypeCategoryIndustryCategoryEnum;
(function (GooglePrivacyDlpV2InfoTypeCategoryIndustryCategoryEnum) {
    GooglePrivacyDlpV2InfoTypeCategoryIndustryCategoryEnum["IndustryUnspecified"] = "INDUSTRY_UNSPECIFIED";
    GooglePrivacyDlpV2InfoTypeCategoryIndustryCategoryEnum["Finance"] = "FINANCE";
    GooglePrivacyDlpV2InfoTypeCategoryIndustryCategoryEnum["Health"] = "HEALTH";
    GooglePrivacyDlpV2InfoTypeCategoryIndustryCategoryEnum["Telecommunications"] = "TELECOMMUNICATIONS";
})(GooglePrivacyDlpV2InfoTypeCategoryIndustryCategoryEnum || (GooglePrivacyDlpV2InfoTypeCategoryIndustryCategoryEnum = {}));
export var GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum;
(function (GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum) {
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["LocationUnspecified"] = "LOCATION_UNSPECIFIED";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Global"] = "GLOBAL";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Argentina"] = "ARGENTINA";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Australia"] = "AUSTRALIA";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Belgium"] = "BELGIUM";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Brazil"] = "BRAZIL";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Canada"] = "CANADA";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Chile"] = "CHILE";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["China"] = "CHINA";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Colombia"] = "COLOMBIA";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Denmark"] = "DENMARK";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["France"] = "FRANCE";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Finland"] = "FINLAND";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Germany"] = "GERMANY";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["HongKong"] = "HONG_KONG";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["India"] = "INDIA";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Indonesia"] = "INDONESIA";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Ireland"] = "IRELAND";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Israel"] = "ISRAEL";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Italy"] = "ITALY";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Japan"] = "JAPAN";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Korea"] = "KOREA";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Mexico"] = "MEXICO";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["TheNetherlands"] = "THE_NETHERLANDS";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Norway"] = "NORWAY";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Paraguay"] = "PARAGUAY";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Peru"] = "PERU";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Poland"] = "POLAND";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Portugal"] = "PORTUGAL";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Singapore"] = "SINGAPORE";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["SouthAfrica"] = "SOUTH_AFRICA";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Spain"] = "SPAIN";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Sweden"] = "SWEDEN";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Taiwan"] = "TAIWAN";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Thailand"] = "THAILAND";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Turkey"] = "TURKEY";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["UnitedKingdom"] = "UNITED_KINGDOM";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["UnitedStates"] = "UNITED_STATES";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Uruguay"] = "URUGUAY";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Venezuela"] = "VENEZUELA";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["Internal"] = "INTERNAL";
    GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum["NewZealand"] = "NEW_ZEALAND";
})(GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum || (GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum = {}));
export var GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum;
(function (GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum) {
    GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum["Pii"] = "PII";
    GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum["Spii"] = "SPII";
    GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum["Demographic"] = "DEMOGRAPHIC";
    GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum["Credential"] = "CREDENTIAL";
    GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum["GovernmentId"] = "GOVERNMENT_ID";
    GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum["Document"] = "DOCUMENT";
    GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum["ContextualInformation"] = "CONTEXTUAL_INFORMATION";
})(GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum || (GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum = {}));
// GooglePrivacyDlpV2InfoTypeCategory
/**
 * Classification of infoTypes to organize them according to geographic location, industry, and data type.
**/
var GooglePrivacyDlpV2InfoTypeCategory = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2InfoTypeCategory, _super);
    function GooglePrivacyDlpV2InfoTypeCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=industryCategory" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2InfoTypeCategory.prototype, "industryCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationCategory" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2InfoTypeCategory.prototype, "locationCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=typeCategory" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2InfoTypeCategory.prototype, "typeCategory", void 0);
    return GooglePrivacyDlpV2InfoTypeCategory;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2InfoTypeCategory };
