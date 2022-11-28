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
import { CrmlogErrorCode } from "./crmlogerrorcode";
import { EnterpriseCrmEventbusProtoErrorDetail } from "./enterprisecrmeventbusprotoerrordetail";
import { EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails } from "./enterprisecrmfrontendseventbusprotoeventexecutiondetails";
import { EnterpriseCrmEventbusProtoExecutionTraceInfo } from "./enterprisecrmeventbusprotoexecutiontraceinfo";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
export var EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum;
(function (EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum) {
    EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum["Unspecified"] = "UNSPECIFIED";
    EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum["Post"] = "POST";
    EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum["PostToQueue"] = "POST_TO_QUEUE";
    EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum["Schedule"] = "SCHEDULE";
    EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum["PostByEventConfigId"] = "POST_BY_EVENT_CONFIG_ID";
    EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum["PostWithEventDetails"] = "POST_WITH_EVENT_DETAILS";
})(EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum || (EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum = {}));
export var EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum;
(function (EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum) {
    EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum["UnspecifiedProduct"] = "UNSPECIFIED_PRODUCT";
    EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum["Ip"] = "IP";
    EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum["Apigee"] = "APIGEE";
    EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum["Security"] = "SECURITY";
})(EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum || (EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum = {}));
// EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo
/**
 * Contains all the execution details for a workflow instance. Next available id: 24
**/
var EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo = /** @class */ (function (_super) {
    __extends(EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo, _super);
    function EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCode" }),
        __metadata("design:type", CrmlogErrorCode)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "errorCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: EnterpriseCrmEventbusProtoErrorDetail }),
        __metadata("design:type", Array)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventExecutionDetails" }),
        __metadata("design:type", EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "eventExecutionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventExecutionInfoId" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "eventExecutionInfoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionTraceInfo" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoExecutionTraceInfo)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "executionTraceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedTime" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postMethod" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "postMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "product", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestParams" }),
        __metadata("design:type", EnterpriseCrmFrontendsEventbusProtoEventParameters)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "requestParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseParams" }),
        __metadata("design:type", EnterpriseCrmFrontendsEventbusProtoEventParameters)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "responseParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshotNumber" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "snapshotNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tenant" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerId" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "triggerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowId" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "workflowId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowName" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "workflowName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowRetryBackoffIntervalSeconds" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.prototype, "workflowRetryBackoffIntervalSeconds", void 0);
    return EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo;
}(SpeakeasyBase));
export { EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo };
