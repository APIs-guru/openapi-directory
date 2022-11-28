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
import { GoogleCloudDatalabelingV1beta1CsvInstruction } from "./googleclouddatalabelingv1beta1csvinstruction";
import { GoogleCloudDatalabelingV1beta1PdfInstruction } from "./googleclouddatalabelingv1beta1pdfinstruction";
export var GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum;
(function (GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum) {
    GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum["DataTypeUnspecified"] = "DATA_TYPE_UNSPECIFIED";
    GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum["Image"] = "IMAGE";
    GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum["Video"] = "VIDEO";
    GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum["Text"] = "TEXT";
    GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum["GeneralData"] = "GENERAL_DATA";
})(GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum || (GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum = {}));
// GoogleCloudDatalabelingV1beta1Instruction
/**
 * Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported.
**/
var GoogleCloudDatalabelingV1beta1Instruction = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1Instruction, _super);
    function GoogleCloudDatalabelingV1beta1Instruction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockingResources" }),
        __metadata("design:type", Array)
    ], GoogleCloudDatalabelingV1beta1Instruction.prototype, "blockingResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Instruction.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csvInstruction" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1CsvInstruction)
    ], GoogleCloudDatalabelingV1beta1Instruction.prototype, "csvInstruction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Instruction.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Instruction.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Instruction.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Instruction.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdfInstruction" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1PdfInstruction)
    ], GoogleCloudDatalabelingV1beta1Instruction.prototype, "pdfInstruction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Instruction.prototype, "updateTime", void 0);
    return GoogleCloudDatalabelingV1beta1Instruction;
}(SpeakeasyBase));
export { GoogleCloudDatalabelingV1beta1Instruction };
