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
import { BasicSli } from "./basicsli";
import { RequestBasedSli } from "./requestbasedsli";
import { WindowsBasedSli } from "./windowsbasedsli";
// ServiceLevelIndicator
/**
 * A Service-Level Indicator (SLI) describes the "performance" of a service. For some services, the SLI is well-defined. In such cases, the SLI can be described easily by referencing the well-known SLI and providing the needed parameters. Alternatively, a "custom" SLI can be defined with a query to the underlying metric store. An SLI is defined to be good_service / total_service over any queried time interval. The value of performance always falls into the range 0 <= performance <= 1. A custom SLI describes how to compute this ratio, whether this is by dividing values from a pair of time series, cutting a Distribution into good and bad counts, or counting time windows in which the service complies with a criterion. For separation of concerns, a single Service-Level Indicator measures performance for only one aspect of service quality, such as fraction of successful queries or fast-enough queries.
**/
var ServiceLevelIndicator = /** @class */ (function (_super) {
    __extends(ServiceLevelIndicator, _super);
    function ServiceLevelIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicSli" }),
        __metadata("design:type", BasicSli)
    ], ServiceLevelIndicator.prototype, "basicSli", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestBased" }),
        __metadata("design:type", RequestBasedSli)
    ], ServiceLevelIndicator.prototype, "requestBased", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=windowsBased" }),
        __metadata("design:type", WindowsBasedSli)
    ], ServiceLevelIndicator.prototype, "windowsBased", void 0);
    return ServiceLevelIndicator;
}(SpeakeasyBase));
export { ServiceLevelIndicator };
