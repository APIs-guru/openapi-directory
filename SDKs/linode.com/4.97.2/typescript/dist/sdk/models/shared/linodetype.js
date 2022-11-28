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
// LinodeTypeAddonsBackupsPrice
/**
 * Cost of enabling Backups for this Linode Type.
**/
var LinodeTypeAddonsBackupsPrice = /** @class */ (function (_super) {
    __extends(LinodeTypeAddonsBackupsPrice, _super);
    function LinodeTypeAddonsBackupsPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hourly" }),
        __metadata("design:type", Number)
    ], LinodeTypeAddonsBackupsPrice.prototype, "hourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monthly" }),
        __metadata("design:type", Number)
    ], LinodeTypeAddonsBackupsPrice.prototype, "monthly", void 0);
    return LinodeTypeAddonsBackupsPrice;
}(SpeakeasyBase));
export { LinodeTypeAddonsBackupsPrice };
// LinodeTypeAddonsBackups
/**
 * Information about the optional Backup service offered for Linodes.
 *
**/
var LinodeTypeAddonsBackups = /** @class */ (function (_super) {
    __extends(LinodeTypeAddonsBackups, _super);
    function LinodeTypeAddonsBackups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", LinodeTypeAddonsBackupsPrice)
    ], LinodeTypeAddonsBackups.prototype, "price", void 0);
    return LinodeTypeAddonsBackups;
}(SpeakeasyBase));
export { LinodeTypeAddonsBackups };
// LinodeTypeAddons
/**
 * A list of optional add-on services for Linodes and their associated costs.
 *
**/
var LinodeTypeAddons = /** @class */ (function (_super) {
    __extends(LinodeTypeAddons, _super);
    function LinodeTypeAddons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backups" }),
        __metadata("design:type", LinodeTypeAddonsBackups)
    ], LinodeTypeAddons.prototype, "backups", void 0);
    return LinodeTypeAddons;
}(SpeakeasyBase));
export { LinodeTypeAddons };
export var LinodeTypeClassEnum;
(function (LinodeTypeClassEnum) {
    LinodeTypeClassEnum["Nanode"] = "nanode";
    LinodeTypeClassEnum["Standard"] = "standard";
    LinodeTypeClassEnum["Dedicated"] = "dedicated";
    LinodeTypeClassEnum["Gpu"] = "gpu";
    LinodeTypeClassEnum["Highmem"] = "highmem";
})(LinodeTypeClassEnum || (LinodeTypeClassEnum = {}));
// LinodeTypePrice
/**
 * Cost in US dollars, broken down into hourly and monthly charges.
 *
**/
var LinodeTypePrice = /** @class */ (function (_super) {
    __extends(LinodeTypePrice, _super);
    function LinodeTypePrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hourly" }),
        __metadata("design:type", Number)
    ], LinodeTypePrice.prototype, "hourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monthly" }),
        __metadata("design:type", Number)
    ], LinodeTypePrice.prototype, "monthly", void 0);
    return LinodeTypePrice;
}(SpeakeasyBase));
export { LinodeTypePrice };
// LinodeType
/**
 * Returns collection of Linode types, including pricing and specifications for each type. These are used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.
 *
**/
var LinodeType = /** @class */ (function (_super) {
    __extends(LinodeType, _super);
    function LinodeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addons" }),
        __metadata("design:type", LinodeTypeAddons)
    ], LinodeType.prototype, "addons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=class" }),
        __metadata("design:type", String)
    ], LinodeType.prototype, "class", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk" }),
        __metadata("design:type", Number)
    ], LinodeType.prototype, "disk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gpus" }),
        __metadata("design:type", Number)
    ], LinodeType.prototype, "gpus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], LinodeType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], LinodeType.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], LinodeType.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_out" }),
        __metadata("design:type", Number)
    ], LinodeType.prototype, "networkOut", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", LinodeTypePrice)
    ], LinodeType.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=successor" }),
        __metadata("design:type", String)
    ], LinodeType.prototype, "successor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfer" }),
        __metadata("design:type", Number)
    ], LinodeType.prototype, "transfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vcpus" }),
        __metadata("design:type", Number)
    ], LinodeType.prototype, "vcpus", void 0);
    return LinodeType;
}(SpeakeasyBase));
export { LinodeType };
