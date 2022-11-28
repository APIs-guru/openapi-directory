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
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig } from "./googlecloudintegrationsv1alphasuspensionapprovalconfig";
import { GoogleCloudIntegrationsV1alphaSuspensionAudit } from "./googlecloudintegrationsv1alphasuspensionaudit";
import { EnterpriseCrmEventbusProtoSuspensionConfig } from "./enterprisecrmeventbusprotosuspensionconfig";
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput } from "./googlecloudintegrationsv1alphasuspensionapprovalconfig";
export var GoogleCloudIntegrationsV1alphaSuspensionStateEnum;
(function (GoogleCloudIntegrationsV1alphaSuspensionStateEnum) {
    GoogleCloudIntegrationsV1alphaSuspensionStateEnum["ResolutionStateUnspecified"] = "RESOLUTION_STATE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaSuspensionStateEnum["Pending"] = "PENDING";
    GoogleCloudIntegrationsV1alphaSuspensionStateEnum["Rejected"] = "REJECTED";
    GoogleCloudIntegrationsV1alphaSuspensionStateEnum["Lifted"] = "LIFTED";
})(GoogleCloudIntegrationsV1alphaSuspensionStateEnum || (GoogleCloudIntegrationsV1alphaSuspensionStateEnum = {}));
// GoogleCloudIntegrationsV1alphaSuspension
/**
 * A record representing a suspension.
**/
var GoogleCloudIntegrationsV1alphaSuspension = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaSuspension, _super);
    function GoogleCloudIntegrationsV1alphaSuspension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvalConfig" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig)
    ], GoogleCloudIntegrationsV1alphaSuspension.prototype, "approvalConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audit" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaSuspensionAudit)
    ], GoogleCloudIntegrationsV1alphaSuspension.prototype, "audit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSuspension.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventExecutionInfoId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSuspension.prototype, "eventExecutionInfoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integration" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSuspension.prototype, "integration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifyTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSuspension.prototype, "lastModifyTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSuspension.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSuspension.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspensionConfig" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoSuspensionConfig)
    ], GoogleCloudIntegrationsV1alphaSuspension.prototype, "suspensionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSuspension.prototype, "taskId", void 0);
    return GoogleCloudIntegrationsV1alphaSuspension;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaSuspension };
// GoogleCloudIntegrationsV1alphaSuspensionInput
/**
 * A record representing a suspension.
**/
var GoogleCloudIntegrationsV1alphaSuspensionInput = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaSuspensionInput, _super);
    function GoogleCloudIntegrationsV1alphaSuspensionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvalConfig" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput)
    ], GoogleCloudIntegrationsV1alphaSuspensionInput.prototype, "approvalConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audit" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaSuspensionAudit)
    ], GoogleCloudIntegrationsV1alphaSuspensionInput.prototype, "audit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventExecutionInfoId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSuspensionInput.prototype, "eventExecutionInfoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integration" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSuspensionInput.prototype, "integration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSuspensionInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSuspensionInput.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspensionConfig" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoSuspensionConfig)
    ], GoogleCloudIntegrationsV1alphaSuspensionInput.prototype, "suspensionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSuspensionInput.prototype, "taskId", void 0);
    return GoogleCloudIntegrationsV1alphaSuspensionInput;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaSuspensionInput };
