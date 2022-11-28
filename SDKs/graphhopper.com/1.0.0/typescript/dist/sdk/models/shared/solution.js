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
import { Route } from "./route";
import { Detail } from "./detail";
var SolutionUnassigned = /** @class */ (function (_super) {
    __extends(SolutionUnassigned, _super);
    function SolutionUnassigned() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=breaks" }),
        __metadata("design:type", Array)
    ], SolutionUnassigned.prototype, "breaks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details", elemType: Detail }),
        __metadata("design:type", Array)
    ], SolutionUnassigned.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services" }),
        __metadata("design:type", Array)
    ], SolutionUnassigned.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipments" }),
        __metadata("design:type", Array)
    ], SolutionUnassigned.prototype, "shipments", void 0);
    return SolutionUnassigned;
}(SpeakeasyBase));
export { SolutionUnassigned };
// Solution
/**
 * Only available if status field indicates `finished`.
**/
var Solution = /** @class */ (function (_super) {
    __extends(Solution, _super);
    function Solution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completion_time" }),
        __metadata("design:type", Number)
    ], Solution.prototype, "completionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costs" }),
        __metadata("design:type", Number)
    ], Solution.prototype, "costs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distance" }),
        __metadata("design:type", Number)
    ], Solution.prototype, "distance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_operation_time" }),
        __metadata("design:type", Number)
    ], Solution.prototype, "maxOperationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=no_unassigned" }),
        __metadata("design:type", Number)
    ], Solution.prototype, "noUnassigned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=no_vehicles" }),
        __metadata("design:type", Number)
    ], Solution.prototype, "noVehicles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preparation_time" }),
        __metadata("design:type", Number)
    ], Solution.prototype, "preparationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routes", elemType: Route }),
        __metadata("design:type", Array)
    ], Solution.prototype, "routes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_duration" }),
        __metadata("design:type", Number)
    ], Solution.prototype, "serviceDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], Solution.prototype, "time", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transport_time" }),
        __metadata("design:type", Number)
    ], Solution.prototype, "transportTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unassigned" }),
        __metadata("design:type", SolutionUnassigned)
    ], Solution.prototype, "unassigned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waiting_time" }),
        __metadata("design:type", Number)
    ], Solution.prototype, "waitingTime", void 0);
    return Solution;
}(SpeakeasyBase));
export { Solution };
