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
export var OnPremClusterClusterTypeEnum;
(function (OnPremClusterClusterTypeEnum) {
    OnPremClusterClusterTypeEnum["ClustertypeUnspecified"] = "CLUSTERTYPE_UNSPECIFIED";
    OnPremClusterClusterTypeEnum["Bootstrap"] = "BOOTSTRAP";
    OnPremClusterClusterTypeEnum["Hybrid"] = "HYBRID";
    OnPremClusterClusterTypeEnum["Standalone"] = "STANDALONE";
    OnPremClusterClusterTypeEnum["User"] = "USER";
})(OnPremClusterClusterTypeEnum || (OnPremClusterClusterTypeEnum = {}));
// OnPremCluster
/**
 * OnPremCluster contains information specific to GKE On-Prem clusters.
**/
var OnPremCluster = /** @class */ (function (_super) {
    __extends(OnPremCluster, _super);
    function OnPremCluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminCluster" }),
        __metadata("design:type", Boolean)
    ], OnPremCluster.prototype, "adminCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterMissing" }),
        __metadata("design:type", Boolean)
    ], OnPremCluster.prototype, "clusterMissing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterType" }),
        __metadata("design:type", String)
    ], OnPremCluster.prototype, "clusterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceLink" }),
        __metadata("design:type", String)
    ], OnPremCluster.prototype, "resourceLink", void 0);
    return OnPremCluster;
}(SpeakeasyBase));
export { OnPremCluster };
// OnPremClusterInput
/**
 * OnPremCluster contains information specific to GKE On-Prem clusters.
**/
var OnPremClusterInput = /** @class */ (function (_super) {
    __extends(OnPremClusterInput, _super);
    function OnPremClusterInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminCluster" }),
        __metadata("design:type", Boolean)
    ], OnPremClusterInput.prototype, "adminCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterType" }),
        __metadata("design:type", String)
    ], OnPremClusterInput.prototype, "clusterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceLink" }),
        __metadata("design:type", String)
    ], OnPremClusterInput.prototype, "resourceLink", void 0);
    return OnPremClusterInput;
}(SpeakeasyBase));
export { OnPremClusterInput };
