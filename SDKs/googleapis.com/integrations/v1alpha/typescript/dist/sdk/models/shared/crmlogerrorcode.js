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
export var CrmlogErrorCodeCommonErrorCodeEnum;
(function (CrmlogErrorCodeCommonErrorCodeEnum) {
    CrmlogErrorCodeCommonErrorCodeEnum["CommonErrorCodeUnspecified"] = "COMMON_ERROR_CODE_UNSPECIFIED";
    CrmlogErrorCodeCommonErrorCodeEnum["InvalidCredentials"] = "INVALID_CREDENTIALS";
    CrmlogErrorCodeCommonErrorCodeEnum["RequiredFieldsMissing"] = "REQUIRED_FIELDS_MISSING";
    CrmlogErrorCodeCommonErrorCodeEnum["InvalidFields"] = "INVALID_FIELDS";
    CrmlogErrorCodeCommonErrorCodeEnum["Backend"] = "BACKEND";
    CrmlogErrorCodeCommonErrorCodeEnum["General"] = "GENERAL";
    CrmlogErrorCodeCommonErrorCodeEnum["Internal"] = "INTERNAL";
    CrmlogErrorCodeCommonErrorCodeEnum["IoError"] = "IO_ERROR";
    CrmlogErrorCodeCommonErrorCodeEnum["NotFound"] = "NOT_FOUND";
    CrmlogErrorCodeCommonErrorCodeEnum["EventBus"] = "EVENT_BUS";
    CrmlogErrorCodeCommonErrorCodeEnum["AlreadyExists"] = "ALREADY_EXISTS";
    CrmlogErrorCodeCommonErrorCodeEnum["Concord"] = "CONCORD";
    CrmlogErrorCodeCommonErrorCodeEnum["Conversion"] = "CONVERSION";
    CrmlogErrorCodeCommonErrorCodeEnum["Flume"] = "FLUME";
    CrmlogErrorCodeCommonErrorCodeEnum["Permission"] = "PERMISSION";
    CrmlogErrorCodeCommonErrorCodeEnum["SalesForce"] = "SALES_FORCE";
    CrmlogErrorCodeCommonErrorCodeEnum["Spanner"] = "SPANNER";
    CrmlogErrorCodeCommonErrorCodeEnum["Unimplemented"] = "UNIMPLEMENTED";
    CrmlogErrorCodeCommonErrorCodeEnum["Reltio"] = "RELTIO";
    CrmlogErrorCodeCommonErrorCodeEnum["WorkflowNotFound"] = "WORKFLOW_NOT_FOUND";
    CrmlogErrorCodeCommonErrorCodeEnum["QuotaThrottled"] = "QUOTA_THROTTLED";
    CrmlogErrorCodeCommonErrorCodeEnum["QuotaEnqueued"] = "QUOTA_ENQUEUED";
    CrmlogErrorCodeCommonErrorCodeEnum["InvalidQuotaConfiguration"] = "INVALID_QUOTA_CONFIGURATION";
    CrmlogErrorCodeCommonErrorCodeEnum["TaskNotFound"] = "TASK_NOT_FOUND";
    CrmlogErrorCodeCommonErrorCodeEnum["ExecutionTimeout"] = "EXECUTION_TIMEOUT";
    CrmlogErrorCodeCommonErrorCodeEnum["InvalidEventExecutionState"] = "INVALID_EVENT_EXECUTION_STATE";
    CrmlogErrorCodeCommonErrorCodeEnum["InvalidAttribute"] = "INVALID_ATTRIBUTE";
    CrmlogErrorCodeCommonErrorCodeEnum["MissingAttribute"] = "MISSING_ATTRIBUTE";
    CrmlogErrorCodeCommonErrorCodeEnum["ClientUnauthorizedForWorkflow"] = "CLIENT_UNAUTHORIZED_FOR_WORKFLOW";
    CrmlogErrorCodeCommonErrorCodeEnum["InvalidParameter"] = "INVALID_PARAMETER";
    CrmlogErrorCodeCommonErrorCodeEnum["MissingParameter"] = "MISSING_PARAMETER";
    CrmlogErrorCodeCommonErrorCodeEnum["UnauthroizedWorkflowEditorAction"] = "UNAUTHROIZED_WORKFLOW_EDITOR_ACTION";
    CrmlogErrorCodeCommonErrorCodeEnum["FailedPrecondition"] = "FAILED_PRECONDITION";
    CrmlogErrorCodeCommonErrorCodeEnum["InvalidClient"] = "INVALID_CLIENT";
    CrmlogErrorCodeCommonErrorCodeEnum["MissingClient"] = "MISSING_CLIENT";
    CrmlogErrorCodeCommonErrorCodeEnum["InvalidWorkflow"] = "INVALID_WORKFLOW";
    CrmlogErrorCodeCommonErrorCodeEnum["MissingQuotaConfiguration"] = "MISSING_QUOTA_CONFIGURATION";
    CrmlogErrorCodeCommonErrorCodeEnum["UnhandledTaskError"] = "UNHANDLED_TASK_ERROR";
    CrmlogErrorCodeCommonErrorCodeEnum["ScriptTaskRuntimeError"] = "SCRIPT_TASK_RUNTIME_ERROR";
    CrmlogErrorCodeCommonErrorCodeEnum["Rpc"] = "RPC";
    CrmlogErrorCodeCommonErrorCodeEnum["InvalidProto"] = "INVALID_PROTO";
    CrmlogErrorCodeCommonErrorCodeEnum["UnhandledEventbusError"] = "UNHANDLED_EVENTBUS_ERROR";
    CrmlogErrorCodeCommonErrorCodeEnum["InvalidTaskState"] = "INVALID_TASK_STATE";
    CrmlogErrorCodeCommonErrorCodeEnum["TypedTaskInvalidInputOperation"] = "TYPED_TASK_INVALID_INPUT_OPERATION";
    CrmlogErrorCodeCommonErrorCodeEnum["TypedTaskInvalidOutputOperation"] = "TYPED_TASK_INVALID_OUTPUT_OPERATION";
    CrmlogErrorCodeCommonErrorCodeEnum["ValidationError"] = "VALIDATION_ERROR";
    CrmlogErrorCodeCommonErrorCodeEnum["ResumeError"] = "RESUME_ERROR";
    CrmlogErrorCodeCommonErrorCodeEnum["AppsScriptExecutionError"] = "APPS_SCRIPT_EXECUTION_ERROR";
    CrmlogErrorCodeCommonErrorCodeEnum["InvalidVectorUser"] = "INVALID_VECTOR_USER";
    CrmlogErrorCodeCommonErrorCodeEnum["Informatica"] = "INFORMATICA";
    CrmlogErrorCodeCommonErrorCodeEnum["RetryableTaskError"] = "RETRYABLE_TASK_ERROR";
    CrmlogErrorCodeCommonErrorCodeEnum["InvalidTenant"] = "INVALID_TENANT";
    CrmlogErrorCodeCommonErrorCodeEnum["WrongTenant"] = "WRONG_TENANT";
    CrmlogErrorCodeCommonErrorCodeEnum["InformaticaBackendUnavailable"] = "INFORMATICA_BACKEND_UNAVAILABLE";
    CrmlogErrorCodeCommonErrorCodeEnum["RpcPermissionDenied"] = "RPC_PERMISSION_DENIED";
    CrmlogErrorCodeCommonErrorCodeEnum["SyncEventbusExecutionTimeout"] = "SYNC_EVENTBUS_EXECUTION_TIMEOUT";
    CrmlogErrorCodeCommonErrorCodeEnum["AsyncEventbusExecutionTimeout"] = "ASYNC_EVENTBUS_EXECUTION_TIMEOUT";
    CrmlogErrorCodeCommonErrorCodeEnum["NotSupportedDataType"] = "NOT_SUPPORTED_DATA_TYPE";
    CrmlogErrorCodeCommonErrorCodeEnum["UnsanitizedUserInput"] = "UNSANITIZED_USER_INPUT";
    CrmlogErrorCodeCommonErrorCodeEnum["TransformExpressionEvaluationError"] = "TRANSFORM_EXPRESSION_EVALUATION_ERROR";
    CrmlogErrorCodeCommonErrorCodeEnum["HttpException"] = "HTTP_EXCEPTION";
    CrmlogErrorCodeCommonErrorCodeEnum["ExecutionCancelled"] = "EXECUTION_CANCELLED";
})(CrmlogErrorCodeCommonErrorCodeEnum || (CrmlogErrorCodeCommonErrorCodeEnum = {}));
// CrmlogErrorCode
/**
 * Registered ids for errors, as "oneof" enums. Each task or logical grouping of tasks may share the same enum.
**/
var CrmlogErrorCode = /** @class */ (function (_super) {
    __extends(CrmlogErrorCode, _super);
    function CrmlogErrorCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonErrorCode" }),
        __metadata("design:type", String)
    ], CrmlogErrorCode.prototype, "commonErrorCode", void 0);
    return CrmlogErrorCode;
}(SpeakeasyBase));
export { CrmlogErrorCode };
