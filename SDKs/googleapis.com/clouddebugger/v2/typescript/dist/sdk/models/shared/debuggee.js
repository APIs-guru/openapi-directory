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
import { ExtendedSourceContext } from "./extendedsourcecontext";
import { SourceContext } from "./sourcecontext";
import { StatusMessage } from "./statusmessage";
export var DebuggeeCanaryModeEnum;
(function (DebuggeeCanaryModeEnum) {
    DebuggeeCanaryModeEnum["CanaryModeUnspecified"] = "CANARY_MODE_UNSPECIFIED";
    DebuggeeCanaryModeEnum["CanaryModeAlwaysEnabled"] = "CANARY_MODE_ALWAYS_ENABLED";
    DebuggeeCanaryModeEnum["CanaryModeAlwaysDisabled"] = "CANARY_MODE_ALWAYS_DISABLED";
    DebuggeeCanaryModeEnum["CanaryModeDefaultEnabled"] = "CANARY_MODE_DEFAULT_ENABLED";
    DebuggeeCanaryModeEnum["CanaryModeDefaultDisabled"] = "CANARY_MODE_DEFAULT_DISABLED";
})(DebuggeeCanaryModeEnum || (DebuggeeCanaryModeEnum = {}));
// Debuggee
/**
 * Represents the debugged application. The application may include one or more replicated processes executing the same code. Each of these processes is attached with a debugger agent, carrying out the debugging commands. Agents attached to the same debuggee identify themselves as such by using exactly the same Debuggee message value when registering.
**/
var Debuggee = /** @class */ (function (_super) {
    __extends(Debuggee, _super);
    function Debuggee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agentVersion" }),
        __metadata("design:type", String)
    ], Debuggee.prototype, "agentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canaryMode" }),
        __metadata("design:type", String)
    ], Debuggee.prototype, "canaryMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Debuggee.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extSourceContexts", elemType: ExtendedSourceContext }),
        __metadata("design:type", Array)
    ], Debuggee.prototype, "extSourceContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Debuggee.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDisabled" }),
        __metadata("design:type", Boolean)
    ], Debuggee.prototype, "isDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isInactive" }),
        __metadata("design:type", Boolean)
    ], Debuggee.prototype, "isInactive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Debuggee.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=project" }),
        __metadata("design:type", String)
    ], Debuggee.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceContexts", elemType: SourceContext }),
        __metadata("design:type", Array)
    ], Debuggee.prototype, "sourceContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", StatusMessage)
    ], Debuggee.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uniquifier" }),
        __metadata("design:type", String)
    ], Debuggee.prototype, "uniquifier", void 0);
    return Debuggee;
}(SpeakeasyBase));
export { Debuggee };
