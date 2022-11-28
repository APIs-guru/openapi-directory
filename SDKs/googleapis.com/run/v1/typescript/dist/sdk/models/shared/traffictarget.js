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
// TrafficTargetInput
/**
 * TrafficTarget holds a single entry of the routing table for a Route.
**/
var TrafficTargetInput = /** @class */ (function (_super) {
    __extends(TrafficTargetInput, _super);
    function TrafficTargetInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurationName" }),
        __metadata("design:type", String)
    ], TrafficTargetInput.prototype, "configurationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestRevision" }),
        __metadata("design:type", Boolean)
    ], TrafficTargetInput.prototype, "latestRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percent" }),
        __metadata("design:type", Number)
    ], TrafficTargetInput.prototype, "percent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionName" }),
        __metadata("design:type", String)
    ], TrafficTargetInput.prototype, "revisionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], TrafficTargetInput.prototype, "tag", void 0);
    return TrafficTargetInput;
}(SpeakeasyBase));
export { TrafficTargetInput };
// TrafficTarget
/**
 * TrafficTarget holds a single entry of the routing table for a Route.
**/
var TrafficTarget = /** @class */ (function (_super) {
    __extends(TrafficTarget, _super);
    function TrafficTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurationName" }),
        __metadata("design:type", String)
    ], TrafficTarget.prototype, "configurationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestRevision" }),
        __metadata("design:type", Boolean)
    ], TrafficTarget.prototype, "latestRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percent" }),
        __metadata("design:type", Number)
    ], TrafficTarget.prototype, "percent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionName" }),
        __metadata("design:type", String)
    ], TrafficTarget.prototype, "revisionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], TrafficTarget.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TrafficTarget.prototype, "url", void 0);
    return TrafficTarget;
}(SpeakeasyBase));
export { TrafficTarget };
