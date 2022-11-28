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
import { OrderedJob } from "./orderedjob";
import { TemplateParameter } from "./templateparameter";
import { WorkflowTemplatePlacementInput } from "./workflowtemplateplacement";
import { WorkflowTemplatePlacement } from "./workflowtemplateplacement";
// WorkflowTemplateInput
/**
 * A Dataproc workflow template resource.
**/
var WorkflowTemplateInput = /** @class */ (function (_super) {
    __extends(WorkflowTemplateInput, _super);
    function WorkflowTemplateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dagTimeout" }),
        __metadata("design:type", String)
    ], WorkflowTemplateInput.prototype, "dagTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WorkflowTemplateInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobs", elemType: OrderedJob }),
        __metadata("design:type", Array)
    ], WorkflowTemplateInput.prototype, "jobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], WorkflowTemplateInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: TemplateParameter }),
        __metadata("design:type", Array)
    ], WorkflowTemplateInput.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placement" }),
        __metadata("design:type", WorkflowTemplatePlacementInput)
    ], WorkflowTemplateInput.prototype, "placement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], WorkflowTemplateInput.prototype, "version", void 0);
    return WorkflowTemplateInput;
}(SpeakeasyBase));
export { WorkflowTemplateInput };
// WorkflowTemplate
/**
 * A Dataproc workflow template resource.
**/
var WorkflowTemplate = /** @class */ (function (_super) {
    __extends(WorkflowTemplate, _super);
    function WorkflowTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], WorkflowTemplate.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dagTimeout" }),
        __metadata("design:type", String)
    ], WorkflowTemplate.prototype, "dagTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WorkflowTemplate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobs", elemType: OrderedJob }),
        __metadata("design:type", Array)
    ], WorkflowTemplate.prototype, "jobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], WorkflowTemplate.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WorkflowTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: TemplateParameter }),
        __metadata("design:type", Array)
    ], WorkflowTemplate.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placement" }),
        __metadata("design:type", WorkflowTemplatePlacement)
    ], WorkflowTemplate.prototype, "placement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], WorkflowTemplate.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], WorkflowTemplate.prototype, "version", void 0);
    return WorkflowTemplate;
}(SpeakeasyBase));
export { WorkflowTemplate };
