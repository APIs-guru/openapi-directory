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
import { GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness } from "./grafeasv1slsaprovenancezerotwoslsacompleteness";
// GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata
/**
 * Other properties of the build.
**/
var GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata = /** @class */ (function (_super) {
    __extends(GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata, _super);
    function GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildFinishedOn" }),
        __metadata("design:type", String)
    ], GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata.prototype, "buildFinishedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildInvocationId" }),
        __metadata("design:type", String)
    ], GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata.prototype, "buildInvocationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildStartedOn" }),
        __metadata("design:type", String)
    ], GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata.prototype, "buildStartedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completeness" }),
        __metadata("design:type", GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness)
    ], GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata.prototype, "completeness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reproducible" }),
        __metadata("design:type", Boolean)
    ], GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata.prototype, "reproducible", void 0);
    return GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata;
}(SpeakeasyBase));
export { GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata };
