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
import { PlanningLevelHyperparameterResponse } from "./planninglevelhyperparameterresponse";
export var PlanningLevelInfoResponseStatusEnum;
(function (PlanningLevelInfoResponseStatusEnum) {
    PlanningLevelInfoResponseStatusEnum["Unproccessed"] = "Unproccessed";
    PlanningLevelInfoResponseStatusEnum["Running"] = "Running";
    PlanningLevelInfoResponseStatusEnum["Complete"] = "Complete";
    PlanningLevelInfoResponseStatusEnum["Failed"] = "Failed";
})(PlanningLevelInfoResponseStatusEnum || (PlanningLevelInfoResponseStatusEnum = {}));
var PlanningLevelInfoResponse = /** @class */ (function (_super) {
    __extends(PlanningLevelInfoResponse, _super);
    function PlanningLevelInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], PlanningLevelInfoResponse.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateCreated" }),
        __metadata("design:type", Date)
    ], PlanningLevelInfoResponse.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], PlanningLevelInfoResponse.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], PlanningLevelInfoResponse.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hyperparameters" }),
        __metadata("design:type", PlanningLevelHyperparameterResponse)
    ], PlanningLevelInfoResponse.prototype, "hyperparameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PlanningLevelInfoResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PlanningLevelInfoResponse.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noTimeseries" }),
        __metadata("design:type", Number)
    ], PlanningLevelInfoResponse.prototype, "noTimeseries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PlanningLevelInfoResponse.prototype, "status", void 0);
    return PlanningLevelInfoResponse;
}(SpeakeasyBase));
export { PlanningLevelInfoResponse };
