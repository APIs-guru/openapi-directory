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
import { CompensationHistogramRequest } from "./compensationhistogramrequest";
import { CustomAttributeHistogramRequest } from "./customattributehistogramrequest";
export var HistogramFacetsSimpleHistogramFacetsEnum;
(function (HistogramFacetsSimpleHistogramFacetsEnum) {
    HistogramFacetsSimpleHistogramFacetsEnum["SearchTypeUnspecified"] = "SEARCH_TYPE_UNSPECIFIED";
    HistogramFacetsSimpleHistogramFacetsEnum["CompanyId"] = "COMPANY_ID";
    HistogramFacetsSimpleHistogramFacetsEnum["EmploymentType"] = "EMPLOYMENT_TYPE";
    HistogramFacetsSimpleHistogramFacetsEnum["CompanySize"] = "COMPANY_SIZE";
    HistogramFacetsSimpleHistogramFacetsEnum["DatePublished"] = "DATE_PUBLISHED";
    HistogramFacetsSimpleHistogramFacetsEnum["EducationLevel"] = "EDUCATION_LEVEL";
    HistogramFacetsSimpleHistogramFacetsEnum["ExperienceLevel"] = "EXPERIENCE_LEVEL";
    HistogramFacetsSimpleHistogramFacetsEnum["Admin1"] = "ADMIN_1";
    HistogramFacetsSimpleHistogramFacetsEnum["Country"] = "COUNTRY";
    HistogramFacetsSimpleHistogramFacetsEnum["City"] = "CITY";
    HistogramFacetsSimpleHistogramFacetsEnum["Locale"] = "LOCALE";
    HistogramFacetsSimpleHistogramFacetsEnum["Language"] = "LANGUAGE";
    HistogramFacetsSimpleHistogramFacetsEnum["Category"] = "CATEGORY";
    HistogramFacetsSimpleHistogramFacetsEnum["CityCoordinate"] = "CITY_COORDINATE";
    HistogramFacetsSimpleHistogramFacetsEnum["Admin1Country"] = "ADMIN_1_COUNTRY";
    HistogramFacetsSimpleHistogramFacetsEnum["CompanyDisplayName"] = "COMPANY_DISPLAY_NAME";
    HistogramFacetsSimpleHistogramFacetsEnum["BaseCompensationUnit"] = "BASE_COMPENSATION_UNIT";
})(HistogramFacetsSimpleHistogramFacetsEnum || (HistogramFacetsSimpleHistogramFacetsEnum = {}));
// HistogramFacets
/**
 * Input only. Histogram facets to be specified in SearchJobsRequest.
**/
var HistogramFacets = /** @class */ (function (_super) {
    __extends(HistogramFacets, _super);
    function HistogramFacets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compensationHistogramFacets", elemType: CompensationHistogramRequest }),
        __metadata("design:type", Array)
    ], HistogramFacets.prototype, "compensationHistogramFacets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customAttributeHistogramFacets", elemType: CustomAttributeHistogramRequest }),
        __metadata("design:type", Array)
    ], HistogramFacets.prototype, "customAttributeHistogramFacets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=simpleHistogramFacets" }),
        __metadata("design:type", Array)
    ], HistogramFacets.prototype, "simpleHistogramFacets", void 0);
    return HistogramFacets;
}(SpeakeasyBase));
export { HistogramFacets };
