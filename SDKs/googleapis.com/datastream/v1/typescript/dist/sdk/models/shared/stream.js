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
import { BackfillAllStrategy } from "./backfillallstrategy";
import { DestinationConfig } from "./destinationconfig";
import { Error } from "./error";
import { SourceConfig } from "./sourceconfig";
export var StreamStateEnum;
(function (StreamStateEnum) {
    StreamStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    StreamStateEnum["NotStarted"] = "NOT_STARTED";
    StreamStateEnum["Running"] = "RUNNING";
    StreamStateEnum["Paused"] = "PAUSED";
    StreamStateEnum["Maintenance"] = "MAINTENANCE";
    StreamStateEnum["Failed"] = "FAILED";
    StreamStateEnum["FailedPermanently"] = "FAILED_PERMANENTLY";
    StreamStateEnum["Starting"] = "STARTING";
    StreamStateEnum["Draining"] = "DRAINING";
})(StreamStateEnum || (StreamStateEnum = {}));
// Stream
/**
 * A resource representing streaming data from a source to a destination.
**/
var Stream = /** @class */ (function (_super) {
    __extends(Stream, _super);
    function Stream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backfillAll" }),
        __metadata("design:type", BackfillAllStrategy)
    ], Stream.prototype, "backfillAll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backfillNone" }),
        __metadata("design:type", Map)
    ], Stream.prototype, "backfillNone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Stream.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerManagedEncryptionKey" }),
        __metadata("design:type", String)
    ], Stream.prototype, "customerManagedEncryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationConfig" }),
        __metadata("design:type", DestinationConfig)
    ], Stream.prototype, "destinationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Stream.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: Error }),
        __metadata("design:type", Array)
    ], Stream.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Stream.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Stream.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceConfig" }),
        __metadata("design:type", SourceConfig)
    ], Stream.prototype, "sourceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Stream.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Stream.prototype, "updateTime", void 0);
    return Stream;
}(SpeakeasyBase));
export { Stream };
// StreamInput
/**
 * A resource representing streaming data from a source to a destination.
**/
var StreamInput = /** @class */ (function (_super) {
    __extends(StreamInput, _super);
    function StreamInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backfillAll" }),
        __metadata("design:type", BackfillAllStrategy)
    ], StreamInput.prototype, "backfillAll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backfillNone" }),
        __metadata("design:type", Map)
    ], StreamInput.prototype, "backfillNone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerManagedEncryptionKey" }),
        __metadata("design:type", String)
    ], StreamInput.prototype, "customerManagedEncryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationConfig" }),
        __metadata("design:type", DestinationConfig)
    ], StreamInput.prototype, "destinationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], StreamInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], StreamInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceConfig" }),
        __metadata("design:type", SourceConfig)
    ], StreamInput.prototype, "sourceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], StreamInput.prototype, "state", void 0);
    return StreamInput;
}(SpeakeasyBase));
export { StreamInput };
