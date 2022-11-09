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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocalDiskInitializeParams } from "./localdiskinitializeparams";
// LocalDisk
/**
 * A Local attached disk resource.
**/
var LocalDisk = /** @class */ (function (_super) {
    __extends(LocalDisk, _super);
    function LocalDisk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=autoDelete" }),
        __metadata("design:type", Boolean)
    ], LocalDisk.prototype, "autoDelete", void 0);
    __decorate([
        Metadata({ data: "json, name=boot" }),
        __metadata("design:type", Boolean)
    ], LocalDisk.prototype, "boot", void 0);
    __decorate([
        Metadata({ data: "json, name=deviceName" }),
        __metadata("design:type", String)
    ], LocalDisk.prototype, "deviceName", void 0);
    __decorate([
        Metadata({ data: "json, name=guestOsFeatures", elemType: shared.RuntimeGuestOsFeature }),
        __metadata("design:type", Array)
    ], LocalDisk.prototype, "guestOsFeatures", void 0);
    __decorate([
        Metadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], LocalDisk.prototype, "index", void 0);
    __decorate([
        Metadata({ data: "json, name=initializeParams" }),
        __metadata("design:type", LocalDiskInitializeParams)
    ], LocalDisk.prototype, "initializeParams", void 0);
    __decorate([
        Metadata({ data: "json, name=interface" }),
        __metadata("design:type", String)
    ], LocalDisk.prototype, "interface", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], LocalDisk.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=licenses" }),
        __metadata("design:type", Array)
    ], LocalDisk.prototype, "licenses", void 0);
    __decorate([
        Metadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], LocalDisk.prototype, "mode", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], LocalDisk.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LocalDisk.prototype, "type", void 0);
    return LocalDisk;
}(SpeakeasyBase));
export { LocalDisk };
