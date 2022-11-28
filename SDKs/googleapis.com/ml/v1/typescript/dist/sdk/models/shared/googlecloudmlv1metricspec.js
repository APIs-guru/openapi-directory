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
export var GoogleCloudMlV1MetricSpecNameEnum;
(function (GoogleCloudMlV1MetricSpecNameEnum) {
    GoogleCloudMlV1MetricSpecNameEnum["MetricNameUnspecified"] = "METRIC_NAME_UNSPECIFIED";
    GoogleCloudMlV1MetricSpecNameEnum["CpuUsage"] = "CPU_USAGE";
    GoogleCloudMlV1MetricSpecNameEnum["GpuDutyCycle"] = "GPU_DUTY_CYCLE";
})(GoogleCloudMlV1MetricSpecNameEnum || (GoogleCloudMlV1MetricSpecNameEnum = {}));
// GoogleCloudMlV1MetricSpec
/**
 * MetricSpec contains the specifications to use to calculate the desired nodes count when autoscaling is enabled.
**/
var GoogleCloudMlV1MetricSpec = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1MetricSpec, _super);
    function GoogleCloudMlV1MetricSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1MetricSpec.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", Number)
    ], GoogleCloudMlV1MetricSpec.prototype, "target", void 0);
    return GoogleCloudMlV1MetricSpec;
}(SpeakeasyBase));
export { GoogleCloudMlV1MetricSpec };
