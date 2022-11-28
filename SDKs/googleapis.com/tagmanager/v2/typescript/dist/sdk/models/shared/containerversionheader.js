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
// ContainerVersionHeader
/**
 * Represents a Google Tag Manager Container Version Header.
**/
var ContainerVersionHeader = /** @class */ (function (_super) {
    __extends(ContainerVersionHeader, _super);
    function ContainerVersionHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], ContainerVersionHeader.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerId" }),
        __metadata("design:type", String)
    ], ContainerVersionHeader.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerVersionId" }),
        __metadata("design:type", String)
    ], ContainerVersionHeader.prototype, "containerVersionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], ContainerVersionHeader.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ContainerVersionHeader.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numClients" }),
        __metadata("design:type", String)
    ], ContainerVersionHeader.prototype, "numClients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numCustomTemplates" }),
        __metadata("design:type", String)
    ], ContainerVersionHeader.prototype, "numCustomTemplates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numGtagConfigs" }),
        __metadata("design:type", String)
    ], ContainerVersionHeader.prototype, "numGtagConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numMacros" }),
        __metadata("design:type", String)
    ], ContainerVersionHeader.prototype, "numMacros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numRules" }),
        __metadata("design:type", String)
    ], ContainerVersionHeader.prototype, "numRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numTags" }),
        __metadata("design:type", String)
    ], ContainerVersionHeader.prototype, "numTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numTriggers" }),
        __metadata("design:type", String)
    ], ContainerVersionHeader.prototype, "numTriggers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numVariables" }),
        __metadata("design:type", String)
    ], ContainerVersionHeader.prototype, "numVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numZones" }),
        __metadata("design:type", String)
    ], ContainerVersionHeader.prototype, "numZones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ContainerVersionHeader.prototype, "path", void 0);
    return ContainerVersionHeader;
}(SpeakeasyBase));
export { ContainerVersionHeader };
