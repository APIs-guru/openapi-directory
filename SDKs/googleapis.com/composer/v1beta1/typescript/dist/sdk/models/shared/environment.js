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
import { EnvironmentConfig } from "./environmentconfig";
import { EnvironmentConfigInput } from "./environmentconfig";
export var EnvironmentStateEnum;
(function (EnvironmentStateEnum) {
    EnvironmentStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    EnvironmentStateEnum["Creating"] = "CREATING";
    EnvironmentStateEnum["Running"] = "RUNNING";
    EnvironmentStateEnum["Updating"] = "UPDATING";
    EnvironmentStateEnum["Deleting"] = "DELETING";
    EnvironmentStateEnum["Error"] = "ERROR";
})(EnvironmentStateEnum || (EnvironmentStateEnum = {}));
// Environment
/**
 * An environment for running orchestration tasks.
**/
var Environment = /** @class */ (function (_super) {
    __extends(Environment, _super);
    function Environment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", EnvironmentConfig)
    ], Environment.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Environment.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Environment.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Environment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Environment.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Environment.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], Environment.prototype, "uuid", void 0);
    return Environment;
}(SpeakeasyBase));
export { Environment };
// EnvironmentInput
/**
 * An environment for running orchestration tasks.
**/
var EnvironmentInput = /** @class */ (function (_super) {
    __extends(EnvironmentInput, _super);
    function EnvironmentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", EnvironmentConfigInput)
    ], EnvironmentInput.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], EnvironmentInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EnvironmentInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], EnvironmentInput.prototype, "state", void 0);
    return EnvironmentInput;
}(SpeakeasyBase));
export { EnvironmentInput };
