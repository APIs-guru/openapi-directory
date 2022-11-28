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
// GoogleCloudDialogflowV2IntentParameter
/**
 * Represents intent parameters.
**/
var GoogleCloudDialogflowV2IntentParameter = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2IntentParameter, _super);
    function GoogleCloudDialogflowV2IntentParameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultValue" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2IntentParameter.prototype, "defaultValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2IntentParameter.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityTypeDisplayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2IntentParameter.prototype, "entityTypeDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isList" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2IntentParameter.prototype, "isList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mandatory" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2IntentParameter.prototype, "mandatory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2IntentParameter.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prompts" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2IntentParameter.prototype, "prompts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2IntentParameter.prototype, "value", void 0);
    return GoogleCloudDialogflowV2IntentParameter;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2IntentParameter };
