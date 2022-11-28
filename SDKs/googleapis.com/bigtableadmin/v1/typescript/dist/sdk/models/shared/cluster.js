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
import { EncryptionConfig } from "./encryptionconfig";
export var ClusterStateEnum;
(function (ClusterStateEnum) {
    ClusterStateEnum["StateNotKnown"] = "STATE_NOT_KNOWN";
    ClusterStateEnum["Ready"] = "READY";
    ClusterStateEnum["Creating"] = "CREATING";
    ClusterStateEnum["Resizing"] = "RESIZING";
    ClusterStateEnum["Disabled"] = "DISABLED";
})(ClusterStateEnum || (ClusterStateEnum = {}));
export var ClusterDefaultStorageTypeEnum;
(function (ClusterDefaultStorageTypeEnum) {
    ClusterDefaultStorageTypeEnum["StorageTypeUnspecified"] = "STORAGE_TYPE_UNSPECIFIED";
    ClusterDefaultStorageTypeEnum["Ssd"] = "SSD";
    ClusterDefaultStorageTypeEnum["Hdd"] = "HDD";
})(ClusterDefaultStorageTypeEnum || (ClusterDefaultStorageTypeEnum = {}));
// Cluster
/**
 * A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
**/
var Cluster = /** @class */ (function (_super) {
    __extends(Cluster, _super);
    function Cluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultStorageType" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "defaultStorageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", EncryptionConfig)
    ], Cluster.prototype, "encryptionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serveNodes" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "serveNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "state", void 0);
    return Cluster;
}(SpeakeasyBase));
export { Cluster };
// ClusterInput
/**
 * A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
**/
var ClusterInput = /** @class */ (function (_super) {
    __extends(ClusterInput, _super);
    function ClusterInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultStorageType" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "defaultStorageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", EncryptionConfig)
    ], ClusterInput.prototype, "encryptionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serveNodes" }),
        __metadata("design:type", Number)
    ], ClusterInput.prototype, "serveNodes", void 0);
    return ClusterInput;
}(SpeakeasyBase));
export { ClusterInput };
