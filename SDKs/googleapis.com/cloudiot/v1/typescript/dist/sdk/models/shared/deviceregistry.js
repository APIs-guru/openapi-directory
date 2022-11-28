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
import { RegistryCredential } from "./registrycredential";
import { EventNotificationConfig } from "./eventnotificationconfig";
import { HttpConfig } from "./httpconfig";
import { MqttConfig } from "./mqttconfig";
import { StateNotificationConfig } from "./statenotificationconfig";
export var DeviceRegistryLogLevelEnum;
(function (DeviceRegistryLogLevelEnum) {
    DeviceRegistryLogLevelEnum["LogLevelUnspecified"] = "LOG_LEVEL_UNSPECIFIED";
    DeviceRegistryLogLevelEnum["None"] = "NONE";
    DeviceRegistryLogLevelEnum["Error"] = "ERROR";
    DeviceRegistryLogLevelEnum["Info"] = "INFO";
    DeviceRegistryLogLevelEnum["Debug"] = "DEBUG";
})(DeviceRegistryLogLevelEnum || (DeviceRegistryLogLevelEnum = {}));
// DeviceRegistry
/**
 * A container for a group of devices.
**/
var DeviceRegistry = /** @class */ (function (_super) {
    __extends(DeviceRegistry, _super);
    function DeviceRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentials", elemType: RegistryCredential }),
        __metadata("design:type", Array)
    ], DeviceRegistry.prototype, "credentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventNotificationConfigs", elemType: EventNotificationConfig }),
        __metadata("design:type", Array)
    ], DeviceRegistry.prototype, "eventNotificationConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpConfig" }),
        __metadata("design:type", HttpConfig)
    ], DeviceRegistry.prototype, "httpConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeviceRegistry.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logLevel" }),
        __metadata("design:type", String)
    ], DeviceRegistry.prototype, "logLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mqttConfig" }),
        __metadata("design:type", MqttConfig)
    ], DeviceRegistry.prototype, "mqttConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DeviceRegistry.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateNotificationConfig" }),
        __metadata("design:type", StateNotificationConfig)
    ], DeviceRegistry.prototype, "stateNotificationConfig", void 0);
    return DeviceRegistry;
}(SpeakeasyBase));
export { DeviceRegistry };
