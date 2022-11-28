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
import { PlanningLevelDataDto } from "./planningleveldatadto";
import { PlanningLevelInfoRequest } from "./planninglevelinforequest";
export var PlanningLevelRequestMethodEnum;
(function (PlanningLevelRequestMethodEnum) {
    PlanningLevelRequestMethodEnum["AutoBestPick"] = "AutoBestPick";
    PlanningLevelRequestMethodEnum["BoxJenkinsParameterized"] = "BoxJenkinsParameterized";
    PlanningLevelRequestMethodEnum["BoxJenkins"] = "BoxJenkins";
    PlanningLevelRequestMethodEnum["CrostonParameterized"] = "CrostonParameterized";
    PlanningLevelRequestMethodEnum["Croston"] = "Croston";
    PlanningLevelRequestMethodEnum["DoubleExponentialSmoothingParameterized"] = "DoubleExponentialSmoothingParameterized";
    PlanningLevelRequestMethodEnum["DoubleExponentialSmoothing"] = "DoubleExponentialSmoothing";
    PlanningLevelRequestMethodEnum["HoltWintersParameterized"] = "HoltWintersParameterized";
    PlanningLevelRequestMethodEnum["HoltWinters"] = "HoltWinters";
    PlanningLevelRequestMethodEnum["SingleExponentialSmoothingParameterized"] = "SingleExponentialSmoothingParameterized";
    PlanningLevelRequestMethodEnum["SingleExponentialSmoothing"] = "SingleExponentialSmoothing";
    PlanningLevelRequestMethodEnum["ICue1Parameterized"] = "iCUE1Parameterized";
    PlanningLevelRequestMethodEnum["ICue1"] = "iCUE1";
    PlanningLevelRequestMethodEnum["ICuEgamma"] = "iCUEgamma";
    PlanningLevelRequestMethodEnum["SimpleMovingAverage"] = "SimpleMovingAverage";
    PlanningLevelRequestMethodEnum["External"] = "External";
    PlanningLevelRequestMethodEnum["ICuEbeta"] = "iCUEbeta";
})(PlanningLevelRequestMethodEnum || (PlanningLevelRequestMethodEnum = {}));
var PlanningLevelRequest = /** @class */ (function (_super) {
    __extends(PlanningLevelRequest, _super);
    function PlanningLevelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: PlanningLevelDataDto }),
        __metadata("design:type", Array)
    ], PlanningLevelRequest.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PlanningLevelRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=override" }),
        __metadata("design:type", Boolean)
    ], PlanningLevelRequest.prototype, "override", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=params" }),
        __metadata("design:type", PlanningLevelInfoRequest)
    ], PlanningLevelRequest.prototype, "params", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=planningLevelId" }),
        __metadata("design:type", String)
    ], PlanningLevelRequest.prototype, "planningLevelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", String)
    ], PlanningLevelRequest.prototype, "startDate", void 0);
    return PlanningLevelRequest;
}(SpeakeasyBase));
export { PlanningLevelRequest };
