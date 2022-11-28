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
export var DiskFilesystemEnum;
(function (DiskFilesystemEnum) {
    DiskFilesystemEnum["Raw"] = "raw";
    DiskFilesystemEnum["Swap"] = "swap";
    DiskFilesystemEnum["Ext3"] = "ext3";
    DiskFilesystemEnum["Ext4"] = "ext4";
    DiskFilesystemEnum["Initrd"] = "initrd";
})(DiskFilesystemEnum || (DiskFilesystemEnum = {}));
export var DiskStatusEnum;
(function (DiskStatusEnum) {
    DiskStatusEnum["Ready"] = "ready";
    DiskStatusEnum["NotReady"] = "not ready";
    DiskStatusEnum["Deleting"] = "deleting";
})(DiskStatusEnum || (DiskStatusEnum = {}));
var DiskInput = /** @class */ (function (_super) {
    __extends(DiskInput, _super);
    function DiskInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filesystem" }),
        __metadata("design:type", String)
    ], DiskInput.prototype, "filesystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], DiskInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], DiskInput.prototype, "size", void 0);
    return DiskInput;
}(SpeakeasyBase));
export { DiskInput };
var Disk = /** @class */ (function (_super) {
    __extends(Disk, _super);
    function Disk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Disk.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filesystem" }),
        __metadata("design:type", String)
    ], Disk.prototype, "filesystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Disk.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], Disk.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], Disk.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Disk.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], Disk.prototype, "updated", void 0);
    return Disk;
}(SpeakeasyBase));
export { Disk };
