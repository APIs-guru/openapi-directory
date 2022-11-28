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
import { PatchInstanceFilter } from "./patchinstancefilter";
import { PatchConfig } from "./patchconfig";
import { PatchRollout } from "./patchrollout";
// ExecutePatchJobRequest
/**
 * A request message to initiate patching across Compute Engine instances.
**/
var ExecutePatchJobRequest = /** @class */ (function (_super) {
    __extends(ExecutePatchJobRequest, _super);
    function ExecutePatchJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ExecutePatchJobRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ExecutePatchJobRequest.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dryRun" }),
        __metadata("design:type", Boolean)
    ], ExecutePatchJobRequest.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], ExecutePatchJobRequest.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceFilter" }),
        __metadata("design:type", PatchInstanceFilter)
    ], ExecutePatchJobRequest.prototype, "instanceFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patchConfig" }),
        __metadata("design:type", PatchConfig)
    ], ExecutePatchJobRequest.prototype, "patchConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollout" }),
        __metadata("design:type", PatchRollout)
    ], ExecutePatchJobRequest.prototype, "rollout", void 0);
    return ExecutePatchJobRequest;
}(SpeakeasyBase));
export { ExecutePatchJobRequest };
