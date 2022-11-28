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
var SystemTimezoneViewModel = /** @class */ (function (_super) {
    __extends(SystemTimezoneViewModel, _super);
    function SystemTimezoneViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseUtcOffset" }),
        __metadata("design:type", Number)
    ], SystemTimezoneViewModel.prototype, "baseUtcOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=daylightName" }),
        __metadata("design:type", String)
    ], SystemTimezoneViewModel.prototype, "daylightName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], SystemTimezoneViewModel.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=standardName" }),
        __metadata("design:type", String)
    ], SystemTimezoneViewModel.prototype, "standardName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportsDaylightSavingTime" }),
        __metadata("design:type", Boolean)
    ], SystemTimezoneViewModel.prototype, "supportsDaylightSavingTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezoneIana" }),
        __metadata("design:type", String)
    ], SystemTimezoneViewModel.prototype, "timezoneIana", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezoneId" }),
        __metadata("design:type", String)
    ], SystemTimezoneViewModel.prototype, "timezoneId", void 0);
    return SystemTimezoneViewModel;
}(SpeakeasyBase));
export { SystemTimezoneViewModel };
