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
import { Algorithm } from "./algorithm";
import { Configuration } from "./configuration";
import { CostMatrix } from "./costmatrix";
import { Objective } from "./objective";
import { Service } from "./service";
import { Shipment } from "./shipment";
import { VehicleType } from "./vehicletype";
import { Vehicle } from "./vehicle";
var Request = /** @class */ (function (_super) {
    __extends(Request, _super);
    function Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", Algorithm)
    ], Request.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configuration" }),
        __metadata("design:type", Configuration)
    ], Request.prototype, "configuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cost_matrices", elemType: CostMatrix }),
        __metadata("design:type", Array)
    ], Request.prototype, "costMatrices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectives", elemType: Objective }),
        __metadata("design:type", Array)
    ], Request.prototype, "objectives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relations" }),
        __metadata("design:type", Array)
    ], Request.prototype, "relations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services", elemType: Service }),
        __metadata("design:type", Array)
    ], Request.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipments", elemType: Shipment }),
        __metadata("design:type", Array)
    ], Request.prototype, "shipments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vehicle_types", elemType: VehicleType }),
        __metadata("design:type", Array)
    ], Request.prototype, "vehicleTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vehicles", elemType: Vehicle }),
        __metadata("design:type", Array)
    ], Request.prototype, "vehicles", void 0);
    return Request;
}(SpeakeasyBase));
export { Request };
