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
import { BuiltInVariable } from "./builtinvariable";
import { Client } from "./client";
import { Container } from "./container";
import { CustomTemplate } from "./customtemplate";
import { Folder } from "./folder";
import { GtagConfig } from "./gtagconfig";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";
import { Zone } from "./zone";
// ContainerVersion
/**
 * Represents a Google Tag Manager Container Version.
**/
var ContainerVersion = /** @class */ (function (_super) {
    __extends(ContainerVersion, _super);
    function ContainerVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], ContainerVersion.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=builtInVariable", elemType: BuiltInVariable }),
        __metadata("design:type", Array)
    ], ContainerVersion.prototype, "builtInVariable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client", elemType: Client }),
        __metadata("design:type", Array)
    ], ContainerVersion.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=container" }),
        __metadata("design:type", Container)
    ], ContainerVersion.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerId" }),
        __metadata("design:type", String)
    ], ContainerVersion.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerVersionId" }),
        __metadata("design:type", String)
    ], ContainerVersion.prototype, "containerVersionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customTemplate", elemType: CustomTemplate }),
        __metadata("design:type", Array)
    ], ContainerVersion.prototype, "customTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], ContainerVersion.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ContainerVersion.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], ContainerVersion.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folder", elemType: Folder }),
        __metadata("design:type", Array)
    ], ContainerVersion.prototype, "folder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gtagConfig", elemType: GtagConfig }),
        __metadata("design:type", Array)
    ], ContainerVersion.prototype, "gtagConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ContainerVersion.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ContainerVersion.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag", elemType: Tag }),
        __metadata("design:type", Array)
    ], ContainerVersion.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagManagerUrl" }),
        __metadata("design:type", String)
    ], ContainerVersion.prototype, "tagManagerUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trigger", elemType: Trigger }),
        __metadata("design:type", Array)
    ], ContainerVersion.prototype, "trigger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variable", elemType: Variable }),
        __metadata("design:type", Array)
    ], ContainerVersion.prototype, "variable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone", elemType: Zone }),
        __metadata("design:type", Array)
    ], ContainerVersion.prototype, "zone", void 0);
    return ContainerVersion;
}(SpeakeasyBase));
export { ContainerVersion };
