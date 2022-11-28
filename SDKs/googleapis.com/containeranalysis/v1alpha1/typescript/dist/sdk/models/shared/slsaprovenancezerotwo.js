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
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsabuilder";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsainvocation";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsamaterial";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsametadata";
// SlsaProvenanceZeroTwo
/**
 * SlsaProvenanceZeroTwo is the slsa provenance as defined by the slsa spec. See full explanation of fields at slsa.dev/provenance/v0.2.
**/
var SlsaProvenanceZeroTwo = /** @class */ (function (_super) {
    __extends(SlsaProvenanceZeroTwo, _super);
    function SlsaProvenanceZeroTwo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildConfig" }),
        __metadata("design:type", Map)
    ], SlsaProvenanceZeroTwo.prototype, "buildConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildType" }),
        __metadata("design:type", String)
    ], SlsaProvenanceZeroTwo.prototype, "buildType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=builder" }),
        __metadata("design:type", GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder)
    ], SlsaProvenanceZeroTwo.prototype, "builder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invocation" }),
        __metadata("design:type", GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation)
    ], SlsaProvenanceZeroTwo.prototype, "invocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=materials", elemType: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial }),
        __metadata("design:type", Array)
    ], SlsaProvenanceZeroTwo.prototype, "materials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata)
    ], SlsaProvenanceZeroTwo.prototype, "metadata", void 0);
    return SlsaProvenanceZeroTwo;
}(SpeakeasyBase));
export { SlsaProvenanceZeroTwo };
