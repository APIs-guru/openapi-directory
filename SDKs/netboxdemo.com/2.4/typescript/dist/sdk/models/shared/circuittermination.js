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
import { NestedCircuit } from "./nestedcircuit";
import { NestedInterface } from "./nestedinterface";
import { NestedSite } from "./nestedsite";
export var CircuitTerminationTerminationEnum;
(function (CircuitTerminationTerminationEnum) {
    CircuitTerminationTerminationEnum["A"] = "A";
    CircuitTerminationTerminationEnum["Z"] = "Z";
})(CircuitTerminationTerminationEnum || (CircuitTerminationTerminationEnum = {}));
var CircuitTermination = /** @class */ (function (_super) {
    __extends(CircuitTermination, _super);
    function CircuitTermination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=circuit" }),
        __metadata("design:type", NestedCircuit)
    ], CircuitTermination.prototype, "circuit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CircuitTermination.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interface" }),
        __metadata("design:type", NestedInterface)
    ], CircuitTermination.prototype, "interface", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port_speed" }),
        __metadata("design:type", Number)
    ], CircuitTermination.prototype, "portSpeed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pp_info" }),
        __metadata("design:type", String)
    ], CircuitTermination.prototype, "ppInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site" }),
        __metadata("design:type", NestedSite)
    ], CircuitTermination.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=term_side" }),
        __metadata("design:type", String)
    ], CircuitTermination.prototype, "termSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upstream_speed" }),
        __metadata("design:type", Number)
    ], CircuitTermination.prototype, "upstreamSpeed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xconnect_id" }),
        __metadata("design:type", String)
    ], CircuitTermination.prototype, "xconnectId", void 0);
    return CircuitTermination;
}(SpeakeasyBase));
export { CircuitTermination };
