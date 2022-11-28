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
import { HttpRequest } from "./httprequest";
import { LogEntryOperation } from "./logentryoperation";
import { LogEntrySourceLocation } from "./logentrysourcelocation";
export var LogEntrySeverityEnum;
(function (LogEntrySeverityEnum) {
    LogEntrySeverityEnum["Default"] = "DEFAULT";
    LogEntrySeverityEnum["Debug"] = "DEBUG";
    LogEntrySeverityEnum["Info"] = "INFO";
    LogEntrySeverityEnum["Notice"] = "NOTICE";
    LogEntrySeverityEnum["Warning"] = "WARNING";
    LogEntrySeverityEnum["Error"] = "ERROR";
    LogEntrySeverityEnum["Critical"] = "CRITICAL";
    LogEntrySeverityEnum["Alert"] = "ALERT";
    LogEntrySeverityEnum["Emergency"] = "EMERGENCY";
})(LogEntrySeverityEnum || (LogEntrySeverityEnum = {}));
// LogEntry
/**
 * An individual log entry.
**/
var LogEntry = /** @class */ (function (_super) {
    __extends(LogEntry, _super);
    function LogEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpRequest" }),
        __metadata("design:type", HttpRequest)
    ], LogEntry.prototype, "httpRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertId" }),
        __metadata("design:type", String)
    ], LogEntry.prototype, "insertId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], LogEntry.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LogEntry.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operation" }),
        __metadata("design:type", LogEntryOperation)
    ], LogEntry.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protoPayload" }),
        __metadata("design:type", Map)
    ], LogEntry.prototype, "protoPayload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], LogEntry.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceLocation" }),
        __metadata("design:type", LogEntrySourceLocation)
    ], LogEntry.prototype, "sourceLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=structPayload" }),
        __metadata("design:type", Map)
    ], LogEntry.prototype, "structPayload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textPayload" }),
        __metadata("design:type", String)
    ], LogEntry.prototype, "textPayload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], LogEntry.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trace" }),
        __metadata("design:type", String)
    ], LogEntry.prototype, "trace", void 0);
    return LogEntry;
}(SpeakeasyBase));
export { LogEntry };
