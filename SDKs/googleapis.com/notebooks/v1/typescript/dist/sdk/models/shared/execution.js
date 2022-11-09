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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionTemplate } from "./executiontemplate";
export var ExecutionStateEnum;
(function (ExecutionStateEnum) {
    ExecutionStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ExecutionStateEnum["Queued"] = "QUEUED";
    ExecutionStateEnum["Preparing"] = "PREPARING";
    ExecutionStateEnum["Running"] = "RUNNING";
    ExecutionStateEnum["Succeeded"] = "SUCCEEDED";
    ExecutionStateEnum["Failed"] = "FAILED";
    ExecutionStateEnum["Cancelling"] = "CANCELLING";
    ExecutionStateEnum["Cancelled"] = "CANCELLED";
    ExecutionStateEnum["Expired"] = "EXPIRED";
    ExecutionStateEnum["Initializing"] = "INITIALIZING";
})(ExecutionStateEnum || (ExecutionStateEnum = {}));
// Execution
/**
 * The definition of a single executed notebook.
**/
var Execution = /** @class */ (function (_super) {
    __extends(Execution, _super);
    function Execution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Execution.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Execution.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Execution.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=executionTemplate" }),
        __metadata("design:type", ExecutionTemplate)
    ], Execution.prototype, "executionTemplate", void 0);
    __decorate([
        Metadata({ data: "json, name=jobUri" }),
        __metadata("design:type", String)
    ], Execution.prototype, "jobUri", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Execution.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=outputNotebookFile" }),
        __metadata("design:type", String)
    ], Execution.prototype, "outputNotebookFile", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Execution.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Execution.prototype, "updateTime", void 0);
    return Execution;
}(SpeakeasyBase));
export { Execution };
