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
import { Addressable } from "./addressable";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { TrafficTargetInput } from "./traffictarget";
import { TrafficTarget } from "./traffictarget";
// ServiceStatusInput
/**
 * The current state of the Service. Output only.
**/
var ServiceStatusInput = /** @class */ (function (_super) {
    __extends(ServiceStatusInput, _super);
    function ServiceStatusInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", Addressable)
    ], ServiceStatusInput.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV1Condition }),
        __metadata("design:type", Array)
    ], ServiceStatusInput.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestCreatedRevisionName" }),
        __metadata("design:type", String)
    ], ServiceStatusInput.prototype, "latestCreatedRevisionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestReadyRevisionName" }),
        __metadata("design:type", String)
    ], ServiceStatusInput.prototype, "latestReadyRevisionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=observedGeneration" }),
        __metadata("design:type", Number)
    ], ServiceStatusInput.prototype, "observedGeneration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=traffic", elemType: TrafficTargetInput }),
        __metadata("design:type", Array)
    ], ServiceStatusInput.prototype, "traffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ServiceStatusInput.prototype, "url", void 0);
    return ServiceStatusInput;
}(SpeakeasyBase));
export { ServiceStatusInput };
// ServiceStatus
/**
 * The current state of the Service. Output only.
**/
var ServiceStatus = /** @class */ (function (_super) {
    __extends(ServiceStatus, _super);
    function ServiceStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", Addressable)
    ], ServiceStatus.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV1Condition }),
        __metadata("design:type", Array)
    ], ServiceStatus.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestCreatedRevisionName" }),
        __metadata("design:type", String)
    ], ServiceStatus.prototype, "latestCreatedRevisionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestReadyRevisionName" }),
        __metadata("design:type", String)
    ], ServiceStatus.prototype, "latestReadyRevisionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=observedGeneration" }),
        __metadata("design:type", Number)
    ], ServiceStatus.prototype, "observedGeneration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=traffic", elemType: TrafficTarget }),
        __metadata("design:type", Array)
    ], ServiceStatus.prototype, "traffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ServiceStatus.prototype, "url", void 0);
    return ServiceStatus;
}(SpeakeasyBase));
export { ServiceStatus };
