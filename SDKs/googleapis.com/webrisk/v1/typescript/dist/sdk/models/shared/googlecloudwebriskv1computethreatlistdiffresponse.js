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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudWebriskV1ThreatEntryAdditions } from "./googlecloudwebriskv1threatentryadditions";
import { GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum } from "./googlecloudwebriskv1computethreatlistdiffresponsechecksum";
import { GoogleCloudWebriskV1ThreatEntryRemovals } from "./googlecloudwebriskv1threatentryremovals";
export var GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum;
(function (GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum) {
    GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum["ResponseTypeUnspecified"] = "RESPONSE_TYPE_UNSPECIFIED";
    GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum["Diff"] = "DIFF";
    GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum["Reset"] = "RESET";
})(GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum || (GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum = {}));
var GoogleCloudWebriskV1ComputeThreatListDiffResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudWebriskV1ComputeThreatListDiffResponse, _super);
    function GoogleCloudWebriskV1ComputeThreatListDiffResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=additions" }),
        __metadata("design:type", GoogleCloudWebriskV1ThreatEntryAdditions)
    ], GoogleCloudWebriskV1ComputeThreatListDiffResponse.prototype, "additions", void 0);
    __decorate([
        Metadata({ data: "json, name=checksum" }),
        __metadata("design:type", GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum)
    ], GoogleCloudWebriskV1ComputeThreatListDiffResponse.prototype, "checksum", void 0);
    __decorate([
        Metadata({ data: "json, name=newVersionToken" }),
        __metadata("design:type", String)
    ], GoogleCloudWebriskV1ComputeThreatListDiffResponse.prototype, "newVersionToken", void 0);
    __decorate([
        Metadata({ data: "json, name=recommendedNextDiff" }),
        __metadata("design:type", String)
    ], GoogleCloudWebriskV1ComputeThreatListDiffResponse.prototype, "recommendedNextDiff", void 0);
    __decorate([
        Metadata({ data: "json, name=removals" }),
        __metadata("design:type", GoogleCloudWebriskV1ThreatEntryRemovals)
    ], GoogleCloudWebriskV1ComputeThreatListDiffResponse.prototype, "removals", void 0);
    __decorate([
        Metadata({ data: "json, name=responseType" }),
        __metadata("design:type", String)
    ], GoogleCloudWebriskV1ComputeThreatListDiffResponse.prototype, "responseType", void 0);
    return GoogleCloudWebriskV1ComputeThreatListDiffResponse;
}(SpeakeasyBase));
export { GoogleCloudWebriskV1ComputeThreatListDiffResponse };
