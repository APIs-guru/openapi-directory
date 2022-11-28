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
import { HistogramResults } from "./histogramresults";
import { Location } from "./location";
import { MatchingJob } from "./matchingjob";
import { ResponseMetadata } from "./responsemetadata";
import { SpellingCorrection } from "./spellingcorrection";
// SearchJobsResponse
/**
 * Output only. Response for SearchJob method.
**/
var SearchJobsResponse = /** @class */ (function (_super) {
    __extends(SearchJobsResponse, _super);
    function SearchJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=broadenedQueryJobsCount" }),
        __metadata("design:type", Number)
    ], SearchJobsResponse.prototype, "broadenedQueryJobsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimatedTotalSize" }),
        __metadata("design:type", Number)
    ], SearchJobsResponse.prototype, "estimatedTotalSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=histogramResults" }),
        __metadata("design:type", HistogramResults)
    ], SearchJobsResponse.prototype, "histogramResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationFilters", elemType: Location }),
        __metadata("design:type", Array)
    ], SearchJobsResponse.prototype, "locationFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchingJobs", elemType: MatchingJob }),
        __metadata("design:type", Array)
    ], SearchJobsResponse.prototype, "matchingJobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", ResponseMetadata)
    ], SearchJobsResponse.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextPageToken" }),
        __metadata("design:type", String)
    ], SearchJobsResponse.prototype, "nextPageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spellCorrection" }),
        __metadata("design:type", SpellingCorrection)
    ], SearchJobsResponse.prototype, "spellCorrection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalSize" }),
        __metadata("design:type", Number)
    ], SearchJobsResponse.prototype, "totalSize", void 0);
    return SearchJobsResponse;
}(SpeakeasyBase));
export { SearchJobsResponse };
