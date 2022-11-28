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
import { License } from "./license";
import { Location } from "./location";
import { Version } from "./version";
export var PackageOccurrenceArchitectureEnum;
(function (PackageOccurrenceArchitectureEnum) {
    PackageOccurrenceArchitectureEnum["ArchitectureUnspecified"] = "ARCHITECTURE_UNSPECIFIED";
    PackageOccurrenceArchitectureEnum["X86"] = "X86";
    PackageOccurrenceArchitectureEnum["X64"] = "X64";
})(PackageOccurrenceArchitectureEnum || (PackageOccurrenceArchitectureEnum = {}));
// PackageOccurrence
/**
 * Details on how a particular software package was installed on a system.
**/
var PackageOccurrence = /** @class */ (function (_super) {
    __extends(PackageOccurrence, _super);
    function PackageOccurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=architecture" }),
        __metadata("design:type", String)
    ], PackageOccurrence.prototype, "architecture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpeUri" }),
        __metadata("design:type", String)
    ], PackageOccurrence.prototype, "cpeUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", License)
    ], PackageOccurrence.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location", elemType: Location }),
        __metadata("design:type", Array)
    ], PackageOccurrence.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PackageOccurrence.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageType" }),
        __metadata("design:type", String)
    ], PackageOccurrence.prototype, "packageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Version)
    ], PackageOccurrence.prototype, "version", void 0);
    return PackageOccurrence;
}(SpeakeasyBase));
export { PackageOccurrence };
// PackageOccurrenceInput
/**
 * Details on how a particular software package was installed on a system.
**/
var PackageOccurrenceInput = /** @class */ (function (_super) {
    __extends(PackageOccurrenceInput, _super);
    function PackageOccurrenceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", License)
    ], PackageOccurrenceInput.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location", elemType: Location }),
        __metadata("design:type", Array)
    ], PackageOccurrenceInput.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Version)
    ], PackageOccurrenceInput.prototype, "version", void 0);
    return PackageOccurrenceInput;
}(SpeakeasyBase));
export { PackageOccurrenceInput };
