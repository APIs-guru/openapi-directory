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
import { FilterPair } from "./filterpair";
import { Options } from "./options";
export var ParametersTypeEnum;
(function (ParametersTypeEnum) {
    ParametersTypeEnum["ReportTypeUnspecified"] = "REPORT_TYPE_UNSPECIFIED";
    ParametersTypeEnum["Standard"] = "STANDARD";
    ParametersTypeEnum["InventoryAvailability"] = "INVENTORY_AVAILABILITY";
    ParametersTypeEnum["AudienceComposition"] = "AUDIENCE_COMPOSITION";
    ParametersTypeEnum["Floodlight"] = "FLOODLIGHT";
    ParametersTypeEnum["Youtube"] = "YOUTUBE";
    ParametersTypeEnum["Grp"] = "GRP";
    ParametersTypeEnum["YoutubeProgrammaticGuaranteed"] = "YOUTUBE_PROGRAMMATIC_GUARANTEED";
    ParametersTypeEnum["Reach"] = "REACH";
    ParametersTypeEnum["UniqueReachAudience"] = "UNIQUE_REACH_AUDIENCE";
    ParametersTypeEnum["FullPath"] = "FULL_PATH";
    ParametersTypeEnum["PathAttribution"] = "PATH_ATTRIBUTION";
})(ParametersTypeEnum || (ParametersTypeEnum = {}));
// Parameters
/**
 * Parameters of a query or report.
**/
var Parameters = /** @class */ (function (_super) {
    __extends(Parameters, _super);
    function Parameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters", elemType: FilterPair }),
        __metadata("design:type", Array)
    ], Parameters.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupBys" }),
        __metadata("design:type", Array)
    ], Parameters.prototype, "groupBys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", Array)
    ], Parameters.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Options)
    ], Parameters.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Parameters.prototype, "type", void 0);
    return Parameters;
}(SpeakeasyBase));
export { Parameters };
