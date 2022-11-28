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
import { RuntimeEnvironment } from "./runtimeenvironment";
// LaunchTemplateParameters
/**
 * Parameters to provide to the template being launched. Note that the [metadata in the pipeline code] (https://cloud.google.com/dataflow/docs/guides/templates/creating-templates#metadata) determines which runtime parameters are valid.
**/
var LaunchTemplateParameters = /** @class */ (function (_super) {
    __extends(LaunchTemplateParameters, _super);
    function LaunchTemplateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", RuntimeEnvironment)
    ], LaunchTemplateParameters.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobName" }),
        __metadata("design:type", String)
    ], LaunchTemplateParameters.prototype, "jobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], LaunchTemplateParameters.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformNameMapping" }),
        __metadata("design:type", Map)
    ], LaunchTemplateParameters.prototype, "transformNameMapping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update" }),
        __metadata("design:type", Boolean)
    ], LaunchTemplateParameters.prototype, "update", void 0);
    return LaunchTemplateParameters;
}(SpeakeasyBase));
export { LaunchTemplateParameters };
