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
import { BuildConfigInput } from "./buildconfig";
import { EventTriggerInput } from "./eventtrigger";
import { ServiceConfigInput } from "./serviceconfig";
import { BuildConfig } from "./buildconfig";
import { EventTrigger } from "./eventtrigger";
import { ServiceConfig } from "./serviceconfig";
import { GoogleCloudFunctionsV2alphaStateMessage } from "./googlecloudfunctionsv2alphastatemessage";
export var FunctionEnvironmentEnum;
(function (FunctionEnvironmentEnum) {
    FunctionEnvironmentEnum["EnvironmentUnspecified"] = "ENVIRONMENT_UNSPECIFIED";
    FunctionEnvironmentEnum["Gen1"] = "GEN_1";
    FunctionEnvironmentEnum["Gen2"] = "GEN_2";
})(FunctionEnvironmentEnum || (FunctionEnvironmentEnum = {}));
export var FunctionStateEnum;
(function (FunctionStateEnum) {
    FunctionStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    FunctionStateEnum["Active"] = "ACTIVE";
    FunctionStateEnum["Failed"] = "FAILED";
    FunctionStateEnum["Deploying"] = "DEPLOYING";
    FunctionStateEnum["Deleting"] = "DELETING";
    FunctionStateEnum["Unknown"] = "UNKNOWN";
})(FunctionStateEnum || (FunctionStateEnum = {}));
// FunctionInput
/**
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.
**/
var FunctionInput = /** @class */ (function (_super) {
    __extends(FunctionInput, _super);
    function FunctionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildConfig" }),
        __metadata("design:type", BuildConfigInput)
    ], FunctionInput.prototype, "buildConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], FunctionInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], FunctionInput.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTrigger" }),
        __metadata("design:type", EventTriggerInput)
    ], FunctionInput.prototype, "eventTrigger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], FunctionInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FunctionInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceConfig" }),
        __metadata("design:type", ServiceConfigInput)
    ], FunctionInput.prototype, "serviceConfig", void 0);
    return FunctionInput;
}(SpeakeasyBase));
export { FunctionInput };
// Function
/**
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.
**/
var Function = /** @class */ (function (_super) {
    __extends(Function, _super);
    function Function() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildConfig" }),
        __metadata("design:type", BuildConfig)
    ], Function.prototype, "buildConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Function.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], Function.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTrigger" }),
        __metadata("design:type", EventTrigger)
    ], Function.prototype, "eventTrigger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Function.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Function.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceConfig" }),
        __metadata("design:type", ServiceConfig)
    ], Function.prototype, "serviceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Function.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateMessages", elemType: GoogleCloudFunctionsV2alphaStateMessage }),
        __metadata("design:type", Array)
    ], Function.prototype, "stateMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Function.prototype, "updateTime", void 0);
    return Function;
}(SpeakeasyBase));
export { Function };
