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
import { GoogleCloudDocumentaiV1beta2DocumentProvenanceParent } from "./googleclouddocumentaiv1beta2documentprovenanceparent";
export var GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum;
(function (GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum) {
    GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum["OperationTypeUnspecified"] = "OPERATION_TYPE_UNSPECIFIED";
    GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum["Add"] = "ADD";
    GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum["Remove"] = "REMOVE";
    GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum["Replace"] = "REPLACE";
    GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum["EvalRequested"] = "EVAL_REQUESTED";
    GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum["EvalApproved"] = "EVAL_APPROVED";
    GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum["EvalSkipped"] = "EVAL_SKIPPED";
})(GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum || (GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum = {}));
// GoogleCloudDocumentaiV1beta2DocumentProvenance
/**
 * Structure to identify provenance relationships between annotations in different revisions.
**/
var GoogleCloudDocumentaiV1beta2DocumentProvenance = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1beta2DocumentProvenance, _super);
    function GoogleCloudDocumentaiV1beta2DocumentProvenance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta2DocumentProvenance.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parents", elemType: GoogleCloudDocumentaiV1beta2DocumentProvenanceParent }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2DocumentProvenance.prototype, "parents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta2DocumentProvenance.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta2DocumentProvenance.prototype, "type", void 0);
    return GoogleCloudDocumentaiV1beta2DocumentProvenance;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1beta2DocumentProvenance };
