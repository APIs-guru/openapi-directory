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
export var BlueGreenInfoPhaseEnum;
(function (BlueGreenInfoPhaseEnum) {
    BlueGreenInfoPhaseEnum["PhaseUnspecified"] = "PHASE_UNSPECIFIED";
    BlueGreenInfoPhaseEnum["UpdateStarted"] = "UPDATE_STARTED";
    BlueGreenInfoPhaseEnum["CreatingGreenPool"] = "CREATING_GREEN_POOL";
    BlueGreenInfoPhaseEnum["CordoningBluePool"] = "CORDONING_BLUE_POOL";
    BlueGreenInfoPhaseEnum["DrainingBluePool"] = "DRAINING_BLUE_POOL";
    BlueGreenInfoPhaseEnum["NodePoolSoaking"] = "NODE_POOL_SOAKING";
    BlueGreenInfoPhaseEnum["DeletingBluePool"] = "DELETING_BLUE_POOL";
    BlueGreenInfoPhaseEnum["RollbackStarted"] = "ROLLBACK_STARTED";
})(BlueGreenInfoPhaseEnum || (BlueGreenInfoPhaseEnum = {}));
// BlueGreenInfo
/**
 * Information relevant to blue-green upgrade.
**/
var BlueGreenInfo = /** @class */ (function (_super) {
    __extends(BlueGreenInfo, _super);
    function BlueGreenInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blueInstanceGroupUrls" }),
        __metadata("design:type", Array)
    ], BlueGreenInfo.prototype, "blueInstanceGroupUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bluePoolDeletionStartTime" }),
        __metadata("design:type", String)
    ], BlueGreenInfo.prototype, "bluePoolDeletionStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=greenInstanceGroupUrls" }),
        __metadata("design:type", Array)
    ], BlueGreenInfo.prototype, "greenInstanceGroupUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=greenPoolVersion" }),
        __metadata("design:type", String)
    ], BlueGreenInfo.prototype, "greenPoolVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phase" }),
        __metadata("design:type", String)
    ], BlueGreenInfo.prototype, "phase", void 0);
    return BlueGreenInfo;
}(SpeakeasyBase));
export { BlueGreenInfo };
