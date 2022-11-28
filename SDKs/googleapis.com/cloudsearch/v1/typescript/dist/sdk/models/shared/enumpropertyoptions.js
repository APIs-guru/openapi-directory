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
import { EnumOperatorOptions } from "./enumoperatoroptions";
import { EnumValuePair } from "./enumvaluepair";
export var EnumPropertyOptionsOrderedRankingEnum;
(function (EnumPropertyOptionsOrderedRankingEnum) {
    EnumPropertyOptionsOrderedRankingEnum["NoOrder"] = "NO_ORDER";
    EnumPropertyOptionsOrderedRankingEnum["Ascending"] = "ASCENDING";
    EnumPropertyOptionsOrderedRankingEnum["Descending"] = "DESCENDING";
})(EnumPropertyOptionsOrderedRankingEnum || (EnumPropertyOptionsOrderedRankingEnum = {}));
// EnumPropertyOptions
/**
 * The options for enum properties, which allow you to define a restricted set of strings to match user queries, set rankings for those string values, and define an operator name to be paired with those strings so that users can narrow results to only items with a specific value. For example, for items in a request tracking system with priority information, you could define *p0* as an allowable enum value and tie this enum to the operator name *priority* so that search users could add *priority:p0* to their query to restrict the set of results to only those items indexed with the value *p0*.
**/
var EnumPropertyOptions = /** @class */ (function (_super) {
    __extends(EnumPropertyOptions, _super);
    function EnumPropertyOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operatorOptions" }),
        __metadata("design:type", EnumOperatorOptions)
    ], EnumPropertyOptions.prototype, "operatorOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderedRanking" }),
        __metadata("design:type", String)
    ], EnumPropertyOptions.prototype, "orderedRanking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=possibleValues", elemType: EnumValuePair }),
        __metadata("design:type", Array)
    ], EnumPropertyOptions.prototype, "possibleValues", void 0);
    return EnumPropertyOptions;
}(SpeakeasyBase));
export { EnumPropertyOptions };
