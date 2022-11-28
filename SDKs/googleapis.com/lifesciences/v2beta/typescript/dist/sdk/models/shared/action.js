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
import { Secret } from "./secret";
import { Mount } from "./mount";
// Action
/**
 * Specifies a single action that runs a Docker container.
**/
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alwaysRun" }),
        __metadata("design:type", Boolean)
    ], Action.prototype, "alwaysRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockExternalNetwork" }),
        __metadata("design:type", Boolean)
    ], Action.prototype, "blockExternalNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commands" }),
        __metadata("design:type", Array)
    ], Action.prototype, "commands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerName" }),
        __metadata("design:type", String)
    ], Action.prototype, "containerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentials" }),
        __metadata("design:type", Secret)
    ], Action.prototype, "credentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableImagePrefetch" }),
        __metadata("design:type", Boolean)
    ], Action.prototype, "disableImagePrefetch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableStandardErrorCapture" }),
        __metadata("design:type", Boolean)
    ], Action.prototype, "disableStandardErrorCapture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableFuse" }),
        __metadata("design:type", Boolean)
    ], Action.prototype, "enableFuse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptedEnvironment" }),
        __metadata("design:type", Secret)
    ], Action.prototype, "encryptedEnvironment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entrypoint" }),
        __metadata("design:type", String)
    ], Action.prototype, "entrypoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", Map)
    ], Action.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreExitStatus" }),
        __metadata("design:type", Boolean)
    ], Action.prototype, "ignoreExitStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageUri" }),
        __metadata("design:type", String)
    ], Action.prototype, "imageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Action.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mounts", elemType: Mount }),
        __metadata("design:type", Array)
    ], Action.prototype, "mounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pidNamespace" }),
        __metadata("design:type", String)
    ], Action.prototype, "pidNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portMappings" }),
        __metadata("design:type", Map)
    ], Action.prototype, "portMappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishExposedPorts" }),
        __metadata("design:type", Boolean)
    ], Action.prototype, "publishExposedPorts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runInBackground" }),
        __metadata("design:type", Boolean)
    ], Action.prototype, "runInBackground", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", String)
    ], Action.prototype, "timeout", void 0);
    return Action;
}(SpeakeasyBase));
export { Action };
