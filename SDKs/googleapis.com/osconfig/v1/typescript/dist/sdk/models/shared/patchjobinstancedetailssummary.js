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
// PatchJobInstanceDetailsSummary
/**
 * A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance.
**/
var PatchJobInstanceDetailsSummary = /** @class */ (function (_super) {
    __extends(PatchJobInstanceDetailsSummary, _super);
    function PatchJobInstanceDetailsSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ackedInstanceCount" }),
        __metadata("design:type", String)
    ], PatchJobInstanceDetailsSummary.prototype, "ackedInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applyingPatchesInstanceCount" }),
        __metadata("design:type", String)
    ], PatchJobInstanceDetailsSummary.prototype, "applyingPatchesInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloadingPatchesInstanceCount" }),
        __metadata("design:type", String)
    ], PatchJobInstanceDetailsSummary.prototype, "downloadingPatchesInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failedInstanceCount" }),
        __metadata("design:type", String)
    ], PatchJobInstanceDetailsSummary.prototype, "failedInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inactiveInstanceCount" }),
        __metadata("design:type", String)
    ], PatchJobInstanceDetailsSummary.prototype, "inactiveInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noAgentDetectedInstanceCount" }),
        __metadata("design:type", String)
    ], PatchJobInstanceDetailsSummary.prototype, "noAgentDetectedInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifiedInstanceCount" }),
        __metadata("design:type", String)
    ], PatchJobInstanceDetailsSummary.prototype, "notifiedInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pendingInstanceCount" }),
        __metadata("design:type", String)
    ], PatchJobInstanceDetailsSummary.prototype, "pendingInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postPatchStepInstanceCount" }),
        __metadata("design:type", String)
    ], PatchJobInstanceDetailsSummary.prototype, "postPatchStepInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prePatchStepInstanceCount" }),
        __metadata("design:type", String)
    ], PatchJobInstanceDetailsSummary.prototype, "prePatchStepInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rebootingInstanceCount" }),
        __metadata("design:type", String)
    ], PatchJobInstanceDetailsSummary.prototype, "rebootingInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startedInstanceCount" }),
        __metadata("design:type", String)
    ], PatchJobInstanceDetailsSummary.prototype, "startedInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=succeededInstanceCount" }),
        __metadata("design:type", String)
    ], PatchJobInstanceDetailsSummary.prototype, "succeededInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=succeededRebootRequiredInstanceCount" }),
        __metadata("design:type", String)
    ], PatchJobInstanceDetailsSummary.prototype, "succeededRebootRequiredInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timedOutInstanceCount" }),
        __metadata("design:type", String)
    ], PatchJobInstanceDetailsSummary.prototype, "timedOutInstanceCount", void 0);
    return PatchJobInstanceDetailsSummary;
}(SpeakeasyBase));
export { PatchJobInstanceDetailsSummary };
