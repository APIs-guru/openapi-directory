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
import { GoogleCloudRunV2TaskTemplate } from "./googlecloudrunv2tasktemplate";
// GoogleCloudRunV2ExecutionTemplate
/**
 * ExecutionTemplate describes the data an execution should have when created from a template.
**/
var GoogleCloudRunV2ExecutionTemplate = /** @class */ (function (_super) {
    __extends(GoogleCloudRunV2ExecutionTemplate, _super);
    function GoogleCloudRunV2ExecutionTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2ExecutionTemplate.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2ExecutionTemplate.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parallelism" }),
        __metadata("design:type", Number)
    ], GoogleCloudRunV2ExecutionTemplate.prototype, "parallelism", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudRunV2ExecutionTemplate.prototype, "taskCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", GoogleCloudRunV2TaskTemplate)
    ], GoogleCloudRunV2ExecutionTemplate.prototype, "template", void 0);
    return GoogleCloudRunV2ExecutionTemplate;
}(SpeakeasyBase));
export { GoogleCloudRunV2ExecutionTemplate };
