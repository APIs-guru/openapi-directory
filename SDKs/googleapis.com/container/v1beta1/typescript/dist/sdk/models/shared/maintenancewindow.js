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
import { DailyMaintenanceWindow } from "./dailymaintenancewindow";
import { TimeWindow } from "./timewindow";
import { RecurringTimeWindow } from "./recurringtimewindow";
// MaintenanceWindow
/**
 * MaintenanceWindow defines the maintenance window to be used for the cluster.
**/
var MaintenanceWindow = /** @class */ (function (_super) {
    __extends(MaintenanceWindow, _super);
    function MaintenanceWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dailyMaintenanceWindow" }),
        __metadata("design:type", DailyMaintenanceWindow)
    ], MaintenanceWindow.prototype, "dailyMaintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenanceExclusions", elemType: TimeWindow }),
        __metadata("design:type", Map)
    ], MaintenanceWindow.prototype, "maintenanceExclusions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recurringWindow" }),
        __metadata("design:type", RecurringTimeWindow)
    ], MaintenanceWindow.prototype, "recurringWindow", void 0);
    return MaintenanceWindow;
}(SpeakeasyBase));
export { MaintenanceWindow };
