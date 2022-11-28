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
import { DatabaseDump } from "./databasedump";
export var MetadataImportStateEnum;
(function (MetadataImportStateEnum) {
    MetadataImportStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    MetadataImportStateEnum["Running"] = "RUNNING";
    MetadataImportStateEnum["Succeeded"] = "SUCCEEDED";
    MetadataImportStateEnum["Updating"] = "UPDATING";
    MetadataImportStateEnum["Failed"] = "FAILED";
})(MetadataImportStateEnum || (MetadataImportStateEnum = {}));
// MetadataImportInput
/**
 * A metastore resource that imports metadata.
**/
var MetadataImportInput = /** @class */ (function (_super) {
    __extends(MetadataImportInput, _super);
    function MetadataImportInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseDump" }),
        __metadata("design:type", DatabaseDump)
    ], MetadataImportInput.prototype, "databaseDump", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], MetadataImportInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MetadataImportInput.prototype, "name", void 0);
    return MetadataImportInput;
}(SpeakeasyBase));
export { MetadataImportInput };
// MetadataImport
/**
 * A metastore resource that imports metadata.
**/
var MetadataImport = /** @class */ (function (_super) {
    __extends(MetadataImport, _super);
    function MetadataImport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], MetadataImport.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseDump" }),
        __metadata("design:type", DatabaseDump)
    ], MetadataImport.prototype, "databaseDump", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], MetadataImport.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], MetadataImport.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MetadataImport.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], MetadataImport.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], MetadataImport.prototype, "updateTime", void 0);
    return MetadataImport;
}(SpeakeasyBase));
export { MetadataImport };
