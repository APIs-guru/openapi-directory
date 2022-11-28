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
import { EdgeLocation } from "./edgelocation";
import { EndpointInfo } from "./endpointinfo";
import { Status } from "./status";
import { LatencyDistribution } from "./latencydistribution";
export var ProbingDetailsAbortCauseEnum;
(function (ProbingDetailsAbortCauseEnum) {
    ProbingDetailsAbortCauseEnum["ProbingAbortCauseUnspecified"] = "PROBING_ABORT_CAUSE_UNSPECIFIED";
    ProbingDetailsAbortCauseEnum["PermissionDenied"] = "PERMISSION_DENIED";
    ProbingDetailsAbortCauseEnum["NoSourceLocation"] = "NO_SOURCE_LOCATION";
})(ProbingDetailsAbortCauseEnum || (ProbingDetailsAbortCauseEnum = {}));
export var ProbingDetailsResultEnum;
(function (ProbingDetailsResultEnum) {
    ProbingDetailsResultEnum["ProbingResultUnspecified"] = "PROBING_RESULT_UNSPECIFIED";
    ProbingDetailsResultEnum["Reachable"] = "REACHABLE";
    ProbingDetailsResultEnum["Unreachable"] = "UNREACHABLE";
    ProbingDetailsResultEnum["ReachabilityInconsistent"] = "REACHABILITY_INCONSISTENT";
    ProbingDetailsResultEnum["Undetermined"] = "UNDETERMINED";
})(ProbingDetailsResultEnum || (ProbingDetailsResultEnum = {}));
// ProbingDetails
/**
 * Results of active probing from the last run of the test.
**/
var ProbingDetails = /** @class */ (function (_super) {
    __extends(ProbingDetails, _super);
    function ProbingDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abortCause" }),
        __metadata("design:type", String)
    ], ProbingDetails.prototype, "abortCause", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationEgressLocation" }),
        __metadata("design:type", EdgeLocation)
    ], ProbingDetails.prototype, "destinationEgressLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointInfo" }),
        __metadata("design:type", EndpointInfo)
    ], ProbingDetails.prototype, "endpointInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], ProbingDetails.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=probingLatency" }),
        __metadata("design:type", LatencyDistribution)
    ], ProbingDetails.prototype, "probingLatency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ProbingDetails.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sentProbeCount" }),
        __metadata("design:type", Number)
    ], ProbingDetails.prototype, "sentProbeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=successfulProbeCount" }),
        __metadata("design:type", Number)
    ], ProbingDetails.prototype, "successfulProbeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verifyTime" }),
        __metadata("design:type", String)
    ], ProbingDetails.prototype, "verifyTime", void 0);
    return ProbingDetails;
}(SpeakeasyBase));
export { ProbingDetails };
