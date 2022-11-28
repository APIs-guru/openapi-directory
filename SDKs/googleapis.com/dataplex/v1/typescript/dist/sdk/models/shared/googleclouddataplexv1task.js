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
import { GoogleCloudDataplexV1TaskExecutionSpec } from "./googleclouddataplexv1taskexecutionspec";
import { GoogleCloudDataplexV1TaskNotebookTaskConfig } from "./googleclouddataplexv1tasknotebooktaskconfig";
import { GoogleCloudDataplexV1TaskSparkTaskConfig } from "./googleclouddataplexv1tasksparktaskconfig";
import { GoogleCloudDataplexV1TaskTriggerSpec } from "./googleclouddataplexv1tasktriggerspec";
import { GoogleCloudDataplexV1TaskExecutionStatus } from "./googleclouddataplexv1taskexecutionstatus";
export var GoogleCloudDataplexV1TaskStateEnum;
(function (GoogleCloudDataplexV1TaskStateEnum) {
    GoogleCloudDataplexV1TaskStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDataplexV1TaskStateEnum["Active"] = "ACTIVE";
    GoogleCloudDataplexV1TaskStateEnum["Creating"] = "CREATING";
    GoogleCloudDataplexV1TaskStateEnum["Deleting"] = "DELETING";
    GoogleCloudDataplexV1TaskStateEnum["ActionRequired"] = "ACTION_REQUIRED";
})(GoogleCloudDataplexV1TaskStateEnum || (GoogleCloudDataplexV1TaskStateEnum = {}));
// GoogleCloudDataplexV1TaskInput
/**
 * A task represents a user-visible job.
**/
var GoogleCloudDataplexV1TaskInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1TaskInput, _super);
    function GoogleCloudDataplexV1TaskInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1TaskInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1TaskInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionSpec" }),
        __metadata("design:type", GoogleCloudDataplexV1TaskExecutionSpec)
    ], GoogleCloudDataplexV1TaskInput.prototype, "executionSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1TaskInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notebook" }),
        __metadata("design:type", GoogleCloudDataplexV1TaskNotebookTaskConfig)
    ], GoogleCloudDataplexV1TaskInput.prototype, "notebook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spark" }),
        __metadata("design:type", GoogleCloudDataplexV1TaskSparkTaskConfig)
    ], GoogleCloudDataplexV1TaskInput.prototype, "spark", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerSpec" }),
        __metadata("design:type", GoogleCloudDataplexV1TaskTriggerSpec)
    ], GoogleCloudDataplexV1TaskInput.prototype, "triggerSpec", void 0);
    return GoogleCloudDataplexV1TaskInput;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1TaskInput };
// GoogleCloudDataplexV1Task
/**
 * A task represents a user-visible job.
**/
var GoogleCloudDataplexV1Task = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1Task, _super);
    function GoogleCloudDataplexV1Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Task.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Task.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Task.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionSpec" }),
        __metadata("design:type", GoogleCloudDataplexV1TaskExecutionSpec)
    ], GoogleCloudDataplexV1Task.prototype, "executionSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionStatus" }),
        __metadata("design:type", GoogleCloudDataplexV1TaskExecutionStatus)
    ], GoogleCloudDataplexV1Task.prototype, "executionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1Task.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Task.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notebook" }),
        __metadata("design:type", GoogleCloudDataplexV1TaskNotebookTaskConfig)
    ], GoogleCloudDataplexV1Task.prototype, "notebook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spark" }),
        __metadata("design:type", GoogleCloudDataplexV1TaskSparkTaskConfig)
    ], GoogleCloudDataplexV1Task.prototype, "spark", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Task.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerSpec" }),
        __metadata("design:type", GoogleCloudDataplexV1TaskTriggerSpec)
    ], GoogleCloudDataplexV1Task.prototype, "triggerSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Task.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Task.prototype, "updateTime", void 0);
    return GoogleCloudDataplexV1Task;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1Task };
