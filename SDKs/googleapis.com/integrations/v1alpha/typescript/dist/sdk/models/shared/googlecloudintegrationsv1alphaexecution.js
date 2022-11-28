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
import { EnterpriseCrmEventbusProtoEventExecutionDetails } from "./enterprisecrmeventbusprotoeventexecutiondetails";
import { GoogleCloudIntegrationsV1alphaExecutionDetails } from "./googlecloudintegrationsv1alphaexecutiondetails";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
export var GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum;
(function (GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum) {
    GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum["ExecutionMethodUnspecified"] = "EXECUTION_METHOD_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum["Post"] = "POST";
    GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum["PostToQueue"] = "POST_TO_QUEUE";
    GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum["Schedule"] = "SCHEDULE";
})(GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum || (GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum = {}));
// GoogleCloudIntegrationsV1alphaExecution
/**
 * The Execution resource contains detailed information of an individual integration execution.
**/
var GoogleCloudIntegrationsV1alphaExecution = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaExecution, _super);
    function GoogleCloudIntegrationsV1alphaExecution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaExecution.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directSubExecutions", elemType: GoogleCloudIntegrationsV1alphaExecution }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaExecution.prototype, "directSubExecutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventExecutionDetails" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoEventExecutionDetails)
    ], GoogleCloudIntegrationsV1alphaExecution.prototype, "eventExecutionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionDetails" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaExecutionDetails)
    ], GoogleCloudIntegrationsV1alphaExecution.prototype, "executionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionMethod" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaExecution.prototype, "executionMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaExecution.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestParameters", elemType: GoogleCloudIntegrationsV1alphaValueType }),
        __metadata("design:type", Map)
    ], GoogleCloudIntegrationsV1alphaExecution.prototype, "requestParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestParams", elemType: EnterpriseCrmFrontendsEventbusProtoParameterEntry }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaExecution.prototype, "requestParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseParameters", elemType: GoogleCloudIntegrationsV1alphaValueType }),
        __metadata("design:type", Map)
    ], GoogleCloudIntegrationsV1alphaExecution.prototype, "responseParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseParams", elemType: EnterpriseCrmFrontendsEventbusProtoParameterEntry }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaExecution.prototype, "responseParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaExecution.prototype, "triggerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaExecution.prototype, "updateTime", void 0);
    return GoogleCloudIntegrationsV1alphaExecution;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaExecution };
