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
import { CmekSettingsInput } from "./cmeksettings";
import { IndexConfigInput } from "./indexconfig";
import { CmekSettings } from "./cmeksettings";
import { IndexConfig } from "./indexconfig";
export var LogBucketLifecycleStateEnum;
(function (LogBucketLifecycleStateEnum) {
    LogBucketLifecycleStateEnum["LifecycleStateUnspecified"] = "LIFECYCLE_STATE_UNSPECIFIED";
    LogBucketLifecycleStateEnum["Active"] = "ACTIVE";
    LogBucketLifecycleStateEnum["DeleteRequested"] = "DELETE_REQUESTED";
})(LogBucketLifecycleStateEnum || (LogBucketLifecycleStateEnum = {}));
// LogBucketInput
/**
 * Describes a repository in which log entries are stored.
**/
var LogBucketInput = /** @class */ (function (_super) {
    __extends(LogBucketInput, _super);
    function LogBucketInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cmekSettings" }),
        __metadata("design:type", CmekSettingsInput)
    ], LogBucketInput.prototype, "cmekSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], LogBucketInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexConfigs", elemType: IndexConfigInput }),
        __metadata("design:type", Array)
    ], LogBucketInput.prototype, "indexConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], LogBucketInput.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictedFields" }),
        __metadata("design:type", Array)
    ], LogBucketInput.prototype, "restrictedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retentionDays" }),
        __metadata("design:type", Number)
    ], LogBucketInput.prototype, "retentionDays", void 0);
    return LogBucketInput;
}(SpeakeasyBase));
export { LogBucketInput };
// LogBucket
/**
 * Describes a repository in which log entries are stored.
**/
var LogBucket = /** @class */ (function (_super) {
    __extends(LogBucket, _super);
    function LogBucket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cmekSettings" }),
        __metadata("design:type", CmekSettings)
    ], LogBucket.prototype, "cmekSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], LogBucket.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], LogBucket.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexConfigs", elemType: IndexConfig }),
        __metadata("design:type", Array)
    ], LogBucket.prototype, "indexConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecycleState" }),
        __metadata("design:type", String)
    ], LogBucket.prototype, "lifecycleState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], LogBucket.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LogBucket.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictedFields" }),
        __metadata("design:type", Array)
    ], LogBucket.prototype, "restrictedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retentionDays" }),
        __metadata("design:type", Number)
    ], LogBucket.prototype, "retentionDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], LogBucket.prototype, "updateTime", void 0);
    return LogBucket;
}(SpeakeasyBase));
export { LogBucket };
