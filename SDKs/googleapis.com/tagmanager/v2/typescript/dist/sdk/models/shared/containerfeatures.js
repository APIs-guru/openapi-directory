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
var ContainerFeatures = /** @class */ (function (_super) {
    __extends(ContainerFeatures, _super);
    function ContainerFeatures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportBuiltInVariables" }),
        __metadata("design:type", Boolean)
    ], ContainerFeatures.prototype, "supportBuiltInVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportClients" }),
        __metadata("design:type", Boolean)
    ], ContainerFeatures.prototype, "supportClients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportEnvironments" }),
        __metadata("design:type", Boolean)
    ], ContainerFeatures.prototype, "supportEnvironments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportFolders" }),
        __metadata("design:type", Boolean)
    ], ContainerFeatures.prototype, "supportFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportGtagConfigs" }),
        __metadata("design:type", Boolean)
    ], ContainerFeatures.prototype, "supportGtagConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportTags" }),
        __metadata("design:type", Boolean)
    ], ContainerFeatures.prototype, "supportTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportTemplates" }),
        __metadata("design:type", Boolean)
    ], ContainerFeatures.prototype, "supportTemplates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportTriggers" }),
        __metadata("design:type", Boolean)
    ], ContainerFeatures.prototype, "supportTriggers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportUserPermissions" }),
        __metadata("design:type", Boolean)
    ], ContainerFeatures.prototype, "supportUserPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportVariables" }),
        __metadata("design:type", Boolean)
    ], ContainerFeatures.prototype, "supportVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportVersions" }),
        __metadata("design:type", Boolean)
    ], ContainerFeatures.prototype, "supportVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportWorkspaces" }),
        __metadata("design:type", Boolean)
    ], ContainerFeatures.prototype, "supportWorkspaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportZones" }),
        __metadata("design:type", Boolean)
    ], ContainerFeatures.prototype, "supportZones", void 0);
    return ContainerFeatures;
}(SpeakeasyBase));
export { ContainerFeatures };
