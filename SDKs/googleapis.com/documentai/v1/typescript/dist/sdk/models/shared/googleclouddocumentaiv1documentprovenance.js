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
import { GoogleCloudDocumentaiV1DocumentProvenanceParent } from "./googleclouddocumentaiv1documentprovenanceparent";
export var GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum;
(function (GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum) {
    GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum["OperationTypeUnspecified"] = "OPERATION_TYPE_UNSPECIFIED";
    GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum["Add"] = "ADD";
    GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum["Remove"] = "REMOVE";
    GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum["Replace"] = "REPLACE";
    GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum["EvalRequested"] = "EVAL_REQUESTED";
    GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum["EvalApproved"] = "EVAL_APPROVED";
    GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum["EvalSkipped"] = "EVAL_SKIPPED";
})(GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum || (GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum = {}));
// GoogleCloudDocumentaiV1DocumentProvenance
/**
 * Structure to identify provenance relationships between annotations in different revisions.
**/
var GoogleCloudDocumentaiV1DocumentProvenance = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1DocumentProvenance, _super);
    function GoogleCloudDocumentaiV1DocumentProvenance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1DocumentProvenance.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parents", elemType: GoogleCloudDocumentaiV1DocumentProvenanceParent }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentProvenance.prototype, "parents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1DocumentProvenance.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1DocumentProvenance.prototype, "type", void 0);
    return GoogleCloudDocumentaiV1DocumentProvenance;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1DocumentProvenance };
