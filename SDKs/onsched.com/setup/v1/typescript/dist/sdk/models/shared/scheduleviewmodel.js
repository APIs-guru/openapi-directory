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
var ScheduleViewModel = /** @class */ (function (_super) {
    __extends(ScheduleViewModel, _super);
    function ScheduleViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingsPerSlot" }),
        __metadata("design:type", Number)
    ], ScheduleViewModel.prototype, "bookingsPerSlot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletedStatus" }),
        __metadata("design:type", Boolean)
    ], ScheduleViewModel.prototype, "deletedStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletedTime" }),
        __metadata("design:type", Date)
    ], ScheduleViewModel.prototype, "deletedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ScheduleViewModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interval" }),
        __metadata("design:type", Number)
    ], ScheduleViewModel.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], ScheduleViewModel.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ScheduleViewModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectName" }),
        __metadata("design:type", String)
    ], ScheduleViewModel.prototype, "objectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], ScheduleViewModel.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceGroupId" }),
        __metadata("design:type", String)
    ], ScheduleViewModel.prototype, "resourceGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ScheduleViewModel.prototype, "type", void 0);
    return ScheduleViewModel;
}(SpeakeasyBase));
export { ScheduleViewModel };
