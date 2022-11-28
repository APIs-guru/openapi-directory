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
import { FormatMessage } from "./formatmessage";
export var StatusMessageRefersToEnum;
(function (StatusMessageRefersToEnum) {
    StatusMessageRefersToEnum["Unspecified"] = "UNSPECIFIED";
    StatusMessageRefersToEnum["BreakpointSourceLocation"] = "BREAKPOINT_SOURCE_LOCATION";
    StatusMessageRefersToEnum["BreakpointCondition"] = "BREAKPOINT_CONDITION";
    StatusMessageRefersToEnum["BreakpointExpression"] = "BREAKPOINT_EXPRESSION";
    StatusMessageRefersToEnum["BreakpointAge"] = "BREAKPOINT_AGE";
    StatusMessageRefersToEnum["BreakpointCanaryFailed"] = "BREAKPOINT_CANARY_FAILED";
    StatusMessageRefersToEnum["VariableName"] = "VARIABLE_NAME";
    StatusMessageRefersToEnum["VariableValue"] = "VARIABLE_VALUE";
})(StatusMessageRefersToEnum || (StatusMessageRefersToEnum = {}));
// StatusMessage
/**
 * Represents a contextual status message. The message can indicate an error or informational status, and refer to specific parts of the containing object. For example, the `Breakpoint.status` field can indicate an error referring to the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.
**/
var StatusMessage = /** @class */ (function (_super) {
    __extends(StatusMessage, _super);
    function StatusMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", FormatMessage)
    ], StatusMessage.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isError" }),
        __metadata("design:type", Boolean)
    ], StatusMessage.prototype, "isError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refersTo" }),
        __metadata("design:type", String)
    ], StatusMessage.prototype, "refersTo", void 0);
    return StatusMessage;
}(SpeakeasyBase));
export { StatusMessage };
