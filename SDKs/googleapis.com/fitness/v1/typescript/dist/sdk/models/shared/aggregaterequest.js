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
import { AggregateBy } from "./aggregateby";
import { BucketByActivity } from "./bucketbyactivity";
import { BucketBySession } from "./bucketbysession";
import { BucketByTime } from "./bucketbytime";
export var AggregateRequestFilteredDataQualityStandardEnum;
(function (AggregateRequestFilteredDataQualityStandardEnum) {
    AggregateRequestFilteredDataQualityStandardEnum["DataQualityUnknown"] = "dataQualityUnknown";
    AggregateRequestFilteredDataQualityStandardEnum["DataQualityBloodPressureEsh2002"] = "dataQualityBloodPressureEsh2002";
    AggregateRequestFilteredDataQualityStandardEnum["DataQualityBloodPressureEsh2010"] = "dataQualityBloodPressureEsh2010";
    AggregateRequestFilteredDataQualityStandardEnum["DataQualityBloodPressureAami"] = "dataQualityBloodPressureAami";
    AggregateRequestFilteredDataQualityStandardEnum["DataQualityBloodPressureBhsAa"] = "dataQualityBloodPressureBhsAA";
    AggregateRequestFilteredDataQualityStandardEnum["DataQualityBloodPressureBhsAb"] = "dataQualityBloodPressureBhsAB";
    AggregateRequestFilteredDataQualityStandardEnum["DataQualityBloodPressureBhsBa"] = "dataQualityBloodPressureBhsBA";
    AggregateRequestFilteredDataQualityStandardEnum["DataQualityBloodPressureBhsBb"] = "dataQualityBloodPressureBhsBB";
    AggregateRequestFilteredDataQualityStandardEnum["DataQualityBloodGlucoseIso151972003"] = "dataQualityBloodGlucoseIso151972003";
    AggregateRequestFilteredDataQualityStandardEnum["DataQualityBloodGlucoseIso151972013"] = "dataQualityBloodGlucoseIso151972013";
})(AggregateRequestFilteredDataQualityStandardEnum || (AggregateRequestFilteredDataQualityStandardEnum = {}));
// AggregateRequest
/**
 * Next id: 10
**/
var AggregateRequest = /** @class */ (function (_super) {
    __extends(AggregateRequest, _super);
    function AggregateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregateBy", elemType: AggregateBy }),
        __metadata("design:type", Array)
    ], AggregateRequest.prototype, "aggregateBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketByActivitySegment" }),
        __metadata("design:type", BucketByActivity)
    ], AggregateRequest.prototype, "bucketByActivitySegment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketByActivityType" }),
        __metadata("design:type", BucketByActivity)
    ], AggregateRequest.prototype, "bucketByActivityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketBySession" }),
        __metadata("design:type", BucketBySession)
    ], AggregateRequest.prototype, "bucketBySession", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketByTime" }),
        __metadata("design:type", BucketByTime)
    ], AggregateRequest.prototype, "bucketByTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTimeMillis" }),
        __metadata("design:type", String)
    ], AggregateRequest.prototype, "endTimeMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filteredDataQualityStandard" }),
        __metadata("design:type", Array)
    ], AggregateRequest.prototype, "filteredDataQualityStandard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTimeMillis" }),
        __metadata("design:type", String)
    ], AggregateRequest.prototype, "startTimeMillis", void 0);
    return AggregateRequest;
}(SpeakeasyBase));
export { AggregateRequest };
