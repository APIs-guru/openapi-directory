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
import { InputFieldDefinition } from "./inputfielddefinition";
import { ActionLabels } from "./actionlabels";
import { ObjectRequestOptions } from "./objectrequestoptions";
// ExtensionActionDefinitionPatch
/**
 * Fields on custom workflow action to be updated.
**/
var ExtensionActionDefinitionPatch = /** @class */ (function (_super) {
    __extends(ExtensionActionDefinitionPatch, _super);
    function ExtensionActionDefinitionPatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionUrl" }),
        __metadata("design:type", String)
    ], ExtensionActionDefinitionPatch.prototype, "actionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputFieldDependencies" }),
        __metadata("design:type", Array)
    ], ExtensionActionDefinitionPatch.prototype, "inputFieldDependencies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputFields", elemType: InputFieldDefinition }),
        __metadata("design:type", Array)
    ], ExtensionActionDefinitionPatch.prototype, "inputFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels", elemType: ActionLabels }),
        __metadata("design:type", Map)
    ], ExtensionActionDefinitionPatch.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectRequestOptions" }),
        __metadata("design:type", ObjectRequestOptions)
    ], ExtensionActionDefinitionPatch.prototype, "objectRequestOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectTypes" }),
        __metadata("design:type", Array)
    ], ExtensionActionDefinitionPatch.prototype, "objectTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published" }),
        __metadata("design:type", Boolean)
    ], ExtensionActionDefinitionPatch.prototype, "published", void 0);
    return ExtensionActionDefinitionPatch;
}(SpeakeasyBase));
export { ExtensionActionDefinitionPatch };
