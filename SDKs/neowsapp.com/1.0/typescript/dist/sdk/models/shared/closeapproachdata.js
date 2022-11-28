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
import { MissDistance } from "./missdistance";
import { RelVelocity } from "./relvelocity";
var CloseApproachData = /** @class */ (function (_super) {
    __extends(CloseApproachData, _super);
    function CloseApproachData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=close_approach_date" }),
        __metadata("design:type", String)
    ], CloseApproachData.prototype, "closeApproachDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=close_approach_date_full" }),
        __metadata("design:type", String)
    ], CloseApproachData.prototype, "closeApproachDateFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=epoch_date_close_approach" }),
        __metadata("design:type", Number)
    ], CloseApproachData.prototype, "epochDateCloseApproach", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=miss_distance" }),
        __metadata("design:type", MissDistance)
    ], CloseApproachData.prototype, "missDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orbiting_body" }),
        __metadata("design:type", String)
    ], CloseApproachData.prototype, "orbitingBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relative_velocity" }),
        __metadata("design:type", RelVelocity)
    ], CloseApproachData.prototype, "relativeVelocity", void 0);
    return CloseApproachData;
}(SpeakeasyBase));
export { CloseApproachData };
