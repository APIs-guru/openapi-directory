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
import { GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior } from "./googleclouddialogflowcxv3beta1formparameterfillbehavior";
import { GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput } from "./googleclouddialogflowcxv3beta1formparameterfillbehavior";
// GoogleCloudDialogflowCxV3beta1FormParameter
/**
 * Represents a form parameter.
**/
var GoogleCloudDialogflowCxV3beta1FormParameter = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1FormParameter, _super);
    function GoogleCloudDialogflowCxV3beta1FormParameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultValue" }),
        __metadata("design:type", Object)
    ], GoogleCloudDialogflowCxV3beta1FormParameter.prototype, "defaultValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1FormParameter.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityType" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1FormParameter.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fillBehavior" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior)
    ], GoogleCloudDialogflowCxV3beta1FormParameter.prototype, "fillBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isList" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3beta1FormParameter.prototype, "isList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redact" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3beta1FormParameter.prototype, "redact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3beta1FormParameter.prototype, "required", void 0);
    return GoogleCloudDialogflowCxV3beta1FormParameter;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1FormParameter };
// GoogleCloudDialogflowCxV3beta1FormParameterInput
/**
 * Represents a form parameter.
**/
var GoogleCloudDialogflowCxV3beta1FormParameterInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1FormParameterInput, _super);
    function GoogleCloudDialogflowCxV3beta1FormParameterInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultValue" }),
        __metadata("design:type", Object)
    ], GoogleCloudDialogflowCxV3beta1FormParameterInput.prototype, "defaultValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1FormParameterInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityType" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1FormParameterInput.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fillBehavior" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput)
    ], GoogleCloudDialogflowCxV3beta1FormParameterInput.prototype, "fillBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isList" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3beta1FormParameterInput.prototype, "isList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redact" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3beta1FormParameterInput.prototype, "redact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3beta1FormParameterInput.prototype, "required", void 0);
    return GoogleCloudDialogflowCxV3beta1FormParameterInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1FormParameterInput };
