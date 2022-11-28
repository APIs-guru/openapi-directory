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
// GkeWorkload
/**
 * A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
**/
var GkeWorkload = /** @class */ (function (_super) {
    __extends(GkeWorkload, _super);
    function GkeWorkload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], GkeWorkload.prototype, "clusterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GkeWorkload.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespaceName" }),
        __metadata("design:type", String)
    ], GkeWorkload.prototype, "namespaceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], GkeWorkload.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topLevelControllerName" }),
        __metadata("design:type", String)
    ], GkeWorkload.prototype, "topLevelControllerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topLevelControllerType" }),
        __metadata("design:type", String)
    ], GkeWorkload.prototype, "topLevelControllerType", void 0);
    return GkeWorkload;
}(SpeakeasyBase));
export { GkeWorkload };
// GkeWorkloadInput
/**
 * A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
**/
var GkeWorkloadInput = /** @class */ (function (_super) {
    __extends(GkeWorkloadInput, _super);
    function GkeWorkloadInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], GkeWorkloadInput.prototype, "clusterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GkeWorkloadInput.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespaceName" }),
        __metadata("design:type", String)
    ], GkeWorkloadInput.prototype, "namespaceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topLevelControllerName" }),
        __metadata("design:type", String)
    ], GkeWorkloadInput.prototype, "topLevelControllerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topLevelControllerType" }),
        __metadata("design:type", String)
    ], GkeWorkloadInput.prototype, "topLevelControllerType", void 0);
    return GkeWorkloadInput;
}(SpeakeasyBase));
export { GkeWorkloadInput };
