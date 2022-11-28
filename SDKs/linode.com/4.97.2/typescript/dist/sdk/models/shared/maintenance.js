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
// MaintenanceEntity
/**
 * The entity being affected by maintenance.
 *
**/
var MaintenanceEntity = /** @class */ (function (_super) {
    __extends(MaintenanceEntity, _super);
    function MaintenanceEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], MaintenanceEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], MaintenanceEntity.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MaintenanceEntity.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], MaintenanceEntity.prototype, "url", void 0);
    return MaintenanceEntity;
}(SpeakeasyBase));
export { MaintenanceEntity };
export var MaintenanceStatusEnum;
(function (MaintenanceStatusEnum) {
    MaintenanceStatusEnum["Pending"] = "pending";
    MaintenanceStatusEnum["Started"] = "started";
})(MaintenanceStatusEnum || (MaintenanceStatusEnum = {}));
export var MaintenanceTypeEnum;
(function (MaintenanceTypeEnum) {
    MaintenanceTypeEnum["Reboot"] = "reboot";
    MaintenanceTypeEnum["ColdMigration"] = "cold_migration";
    MaintenanceTypeEnum["LiveMigration"] = "live_migration";
})(MaintenanceTypeEnum || (MaintenanceTypeEnum = {}));
// Maintenance
/**
 * Information about maintenance affecting an entity.
 *
**/
var Maintenance = /** @class */ (function (_super) {
    __extends(Maintenance, _super);
    function Maintenance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity" }),
        __metadata("design:type", MaintenanceEntity)
    ], Maintenance.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], Maintenance.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Maintenance.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Maintenance.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=when" }),
        __metadata("design:type", Date)
    ], Maintenance.prototype, "when", void 0);
    return Maintenance;
}(SpeakeasyBase));
export { Maintenance };
