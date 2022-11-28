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
import { StreamLocation } from "./streamlocation";
import { KeyRangeLocation } from "./keyrangelocation";
import { StateFamilyConfig } from "./statefamilyconfig";
// ComputationTopology
/**
 * All configuration data for a particular Computation.
**/
var ComputationTopology = /** @class */ (function (_super) {
    __extends(ComputationTopology, _super);
    function ComputationTopology() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computationId" }),
        __metadata("design:type", String)
    ], ComputationTopology.prototype, "computationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputs", elemType: StreamLocation }),
        __metadata("design:type", Array)
    ], ComputationTopology.prototype, "inputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyRanges", elemType: KeyRangeLocation }),
        __metadata("design:type", Array)
    ], ComputationTopology.prototype, "keyRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputs", elemType: StreamLocation }),
        __metadata("design:type", Array)
    ], ComputationTopology.prototype, "outputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateFamilies", elemType: StateFamilyConfig }),
        __metadata("design:type", Array)
    ], ComputationTopology.prototype, "stateFamilies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemStageName" }),
        __metadata("design:type", String)
    ], ComputationTopology.prototype, "systemStageName", void 0);
    return ComputationTopology;
}(SpeakeasyBase));
export { ComputationTopology };
