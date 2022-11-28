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
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2RevisionScaling } from "./googlecloudrunv2revisionscaling";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";
export var GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum;
(function (GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum) {
    GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum["ExecutionEnvironmentUnspecified"] = "EXECUTION_ENVIRONMENT_UNSPECIFIED";
    GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum["ExecutionEnvironmentGen1"] = "EXECUTION_ENVIRONMENT_GEN1";
    GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum["ExecutionEnvironmentGen2"] = "EXECUTION_ENVIRONMENT_GEN2";
})(GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum || (GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum = {}));
// GoogleCloudRunV2RevisionTemplate
/**
 * RevisionTemplate describes the data a revision should have when created from a template.
**/
var GoogleCloudRunV2RevisionTemplate = /** @class */ (function (_super) {
    __extends(GoogleCloudRunV2RevisionTemplate, _super);
    function GoogleCloudRunV2RevisionTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2RevisionTemplate.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containers", elemType: GoogleCloudRunV2Container }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2RevisionTemplate.prototype, "containers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionKey" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2RevisionTemplate.prototype, "encryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionEnvironment" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2RevisionTemplate.prototype, "executionEnvironment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2RevisionTemplate.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxInstanceRequestConcurrency" }),
        __metadata("design:type", Number)
    ], GoogleCloudRunV2RevisionTemplate.prototype, "maxInstanceRequestConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2RevisionTemplate.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scaling" }),
        __metadata("design:type", GoogleCloudRunV2RevisionScaling)
    ], GoogleCloudRunV2RevisionTemplate.prototype, "scaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2RevisionTemplate.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2RevisionTemplate.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: GoogleCloudRunV2Volume }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2RevisionTemplate.prototype, "volumes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcAccess" }),
        __metadata("design:type", GoogleCloudRunV2VpcAccess)
    ], GoogleCloudRunV2RevisionTemplate.prototype, "vpcAccess", void 0);
    return GoogleCloudRunV2RevisionTemplate;
}(SpeakeasyBase));
export { GoogleCloudRunV2RevisionTemplate };
