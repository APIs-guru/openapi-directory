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
export var EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum;
(function (EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum) {
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["UnspecifiedTaskModule"] = "UNSPECIFIED_TASK_MODULE";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["Label"] = "LABEL";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["ErrorHandling"] = "ERROR_HANDLING";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["TaskParamTable"] = "TASK_PARAM_TABLE";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["TaskParamForm"] = "TASK_PARAM_FORM";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["Precondition"] = "PRECONDITION";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["ScriptEditor"] = "SCRIPT_EDITOR";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["Rpc"] = "RPC";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["TaskSummary"] = "TASK_SUMMARY";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["Suspension"] = "SUSPENSION";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["RpcTyped"] = "RPC_TYPED";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["SubWorkflow"] = "SUB_WORKFLOW";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["AppsScriptNavigator"] = "APPS_SCRIPT_NAVIGATOR";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["SubWorkflowForEachLoop"] = "SUB_WORKFLOW_FOR_EACH_LOOP";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["FieldMapping"] = "FIELD_MAPPING";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["Readme"] = "README";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["RestCaller"] = "REST_CALLER";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["SubWorkflowScatterGather"] = "SUB_WORKFLOW_SCATTER_GATHER";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["CloudSql"] = "CLOUD_SQL";
    EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum["GenericConnectorTask"] = "GENERIC_CONNECTOR_TASK";
})(EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum || (EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum = {}));
// EnterpriseCrmEventbusProtoTaskUiModuleConfig
/**
 * Task author would use this type to configure a config module.
**/
var EnterpriseCrmEventbusProtoTaskUiModuleConfig = /** @class */ (function (_super) {
    __extends(EnterpriseCrmEventbusProtoTaskUiModuleConfig, _super);
    function EnterpriseCrmEventbusProtoTaskUiModuleConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moduleId" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskUiModuleConfig.prototype, "moduleId", void 0);
    return EnterpriseCrmEventbusProtoTaskUiModuleConfig;
}(SpeakeasyBase));
export { EnterpriseCrmEventbusProtoTaskUiModuleConfig };
