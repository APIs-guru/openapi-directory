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
export var HistogramResultSearchTypeEnum;
(function (HistogramResultSearchTypeEnum) {
    HistogramResultSearchTypeEnum["SearchTypeUnspecified"] = "SEARCH_TYPE_UNSPECIFIED";
    HistogramResultSearchTypeEnum["CompanyId"] = "COMPANY_ID";
    HistogramResultSearchTypeEnum["EmploymentType"] = "EMPLOYMENT_TYPE";
    HistogramResultSearchTypeEnum["CompanySize"] = "COMPANY_SIZE";
    HistogramResultSearchTypeEnum["DatePublished"] = "DATE_PUBLISHED";
    HistogramResultSearchTypeEnum["EducationLevel"] = "EDUCATION_LEVEL";
    HistogramResultSearchTypeEnum["ExperienceLevel"] = "EXPERIENCE_LEVEL";
    HistogramResultSearchTypeEnum["Admin1"] = "ADMIN_1";
    HistogramResultSearchTypeEnum["Country"] = "COUNTRY";
    HistogramResultSearchTypeEnum["City"] = "CITY";
    HistogramResultSearchTypeEnum["Locale"] = "LOCALE";
    HistogramResultSearchTypeEnum["Language"] = "LANGUAGE";
    HistogramResultSearchTypeEnum["Category"] = "CATEGORY";
    HistogramResultSearchTypeEnum["CityCoordinate"] = "CITY_COORDINATE";
    HistogramResultSearchTypeEnum["Admin1Country"] = "ADMIN_1_COUNTRY";
    HistogramResultSearchTypeEnum["CompanyDisplayName"] = "COMPANY_DISPLAY_NAME";
    HistogramResultSearchTypeEnum["BaseCompensationUnit"] = "BASE_COMPENSATION_UNIT";
})(HistogramResultSearchTypeEnum || (HistogramResultSearchTypeEnum = {}));
// HistogramResult
/**
 * Output only. Result of a histogram call. The response contains the histogram map for the search type specified by HistogramResult.field. The response is a map of each filter value to the corresponding count of jobs for that filter.
**/
var HistogramResult = /** @class */ (function (_super) {
    __extends(HistogramResult, _super);
    function HistogramResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchType" }),
        __metadata("design:type", String)
    ], HistogramResult.prototype, "searchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values" }),
        __metadata("design:type", Map)
    ], HistogramResult.prototype, "values", void 0);
    return HistogramResult;
}(SpeakeasyBase));
export { HistogramResult };
