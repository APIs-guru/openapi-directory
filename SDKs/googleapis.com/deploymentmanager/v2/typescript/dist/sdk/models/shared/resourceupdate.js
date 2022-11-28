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
import { ResourceAccessControl } from "./resourceaccesscontrol";
var ResourceUpdateErrorErrors = /** @class */ (function (_super) {
    __extends(ResourceUpdateErrorErrors, _super);
    function ResourceUpdateErrorErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ResourceUpdateErrorErrors.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ResourceUpdateErrorErrors.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ResourceUpdateErrorErrors.prototype, "message", void 0);
    return ResourceUpdateErrorErrors;
}(SpeakeasyBase));
export { ResourceUpdateErrorErrors };
// ResourceUpdateError
/**
 * Output only. If errors are generated during update of the resource, this field will be populated.
**/
var ResourceUpdateError = /** @class */ (function (_super) {
    __extends(ResourceUpdateError, _super);
    function ResourceUpdateError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: ResourceUpdateErrorErrors }),
        __metadata("design:type", Array)
    ], ResourceUpdateError.prototype, "errors", void 0);
    return ResourceUpdateError;
}(SpeakeasyBase));
export { ResourceUpdateError };
export var ResourceUpdateIntentEnum;
(function (ResourceUpdateIntentEnum) {
    ResourceUpdateIntentEnum["CreateOrAcquire"] = "CREATE_OR_ACQUIRE";
    ResourceUpdateIntentEnum["Delete"] = "DELETE";
    ResourceUpdateIntentEnum["Acquire"] = "ACQUIRE";
    ResourceUpdateIntentEnum["Update"] = "UPDATE";
    ResourceUpdateIntentEnum["Abandon"] = "ABANDON";
    ResourceUpdateIntentEnum["Create"] = "CREATE";
})(ResourceUpdateIntentEnum || (ResourceUpdateIntentEnum = {}));
export var ResourceUpdateStateEnum;
(function (ResourceUpdateStateEnum) {
    ResourceUpdateStateEnum["Pending"] = "PENDING";
    ResourceUpdateStateEnum["InProgress"] = "IN_PROGRESS";
    ResourceUpdateStateEnum["InPreview"] = "IN_PREVIEW";
    ResourceUpdateStateEnum["Failed"] = "FAILED";
    ResourceUpdateStateEnum["Aborted"] = "ABORTED";
})(ResourceUpdateStateEnum || (ResourceUpdateStateEnum = {}));
export var ResourceUpdateWarningsCodeEnum;
(function (ResourceUpdateWarningsCodeEnum) {
    ResourceUpdateWarningsCodeEnum["DeprecatedResourceUsed"] = "DEPRECATED_RESOURCE_USED";
    ResourceUpdateWarningsCodeEnum["NoResultsOnPage"] = "NO_RESULTS_ON_PAGE";
    ResourceUpdateWarningsCodeEnum["Unreachable"] = "UNREACHABLE";
    ResourceUpdateWarningsCodeEnum["NextHopAddressNotAssigned"] = "NEXT_HOP_ADDRESS_NOT_ASSIGNED";
    ResourceUpdateWarningsCodeEnum["NextHopInstanceNotFound"] = "NEXT_HOP_INSTANCE_NOT_FOUND";
    ResourceUpdateWarningsCodeEnum["NextHopInstanceNotOnNetwork"] = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK";
    ResourceUpdateWarningsCodeEnum["NextHopCannotIpForward"] = "NEXT_HOP_CANNOT_IP_FORWARD";
    ResourceUpdateWarningsCodeEnum["NextHopNotRunning"] = "NEXT_HOP_NOT_RUNNING";
    ResourceUpdateWarningsCodeEnum["InjectedKernelsDeprecated"] = "INJECTED_KERNELS_DEPRECATED";
    ResourceUpdateWarningsCodeEnum["RequiredTosAgreement"] = "REQUIRED_TOS_AGREEMENT";
    ResourceUpdateWarningsCodeEnum["DiskSizeLargerThanImageSize"] = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE";
    ResourceUpdateWarningsCodeEnum["ResourceNotDeleted"] = "RESOURCE_NOT_DELETED";
    ResourceUpdateWarningsCodeEnum["SingleInstancePropertyTemplate"] = "SINGLE_INSTANCE_PROPERTY_TEMPLATE";
    ResourceUpdateWarningsCodeEnum["NotCriticalError"] = "NOT_CRITICAL_ERROR";
    ResourceUpdateWarningsCodeEnum["CleanupFailed"] = "CLEANUP_FAILED";
    ResourceUpdateWarningsCodeEnum["FieldValueOverriden"] = "FIELD_VALUE_OVERRIDEN";
    ResourceUpdateWarningsCodeEnum["ResourceInUseByOtherResourceWarning"] = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING";
    ResourceUpdateWarningsCodeEnum["MissingTypeDependency"] = "MISSING_TYPE_DEPENDENCY";
    ResourceUpdateWarningsCodeEnum["ExternalApiWarning"] = "EXTERNAL_API_WARNING";
    ResourceUpdateWarningsCodeEnum["SchemaValidationIgnored"] = "SCHEMA_VALIDATION_IGNORED";
    ResourceUpdateWarningsCodeEnum["UndeclaredProperties"] = "UNDECLARED_PROPERTIES";
    ResourceUpdateWarningsCodeEnum["ExperimentalTypeUsed"] = "EXPERIMENTAL_TYPE_USED";
    ResourceUpdateWarningsCodeEnum["DeprecatedTypeUsed"] = "DEPRECATED_TYPE_USED";
    ResourceUpdateWarningsCodeEnum["PartialSuccess"] = "PARTIAL_SUCCESS";
    ResourceUpdateWarningsCodeEnum["LargeDeploymentWarning"] = "LARGE_DEPLOYMENT_WARNING";
    ResourceUpdateWarningsCodeEnum["NextHopInstanceHasNoIpv6Interface"] = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE";
    ResourceUpdateWarningsCodeEnum["InvalidHealthCheckForDynamicWieghtedLb"] = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB";
})(ResourceUpdateWarningsCodeEnum || (ResourceUpdateWarningsCodeEnum = {}));
var ResourceUpdateWarningsData = /** @class */ (function (_super) {
    __extends(ResourceUpdateWarningsData, _super);
    function ResourceUpdateWarningsData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ResourceUpdateWarningsData.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ResourceUpdateWarningsData.prototype, "value", void 0);
    return ResourceUpdateWarningsData;
}(SpeakeasyBase));
export { ResourceUpdateWarningsData };
var ResourceUpdateWarnings = /** @class */ (function (_super) {
    __extends(ResourceUpdateWarnings, _super);
    function ResourceUpdateWarnings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ResourceUpdateWarnings.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceUpdateWarningsData }),
        __metadata("design:type", Array)
    ], ResourceUpdateWarnings.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ResourceUpdateWarnings.prototype, "message", void 0);
    return ResourceUpdateWarnings;
}(SpeakeasyBase));
export { ResourceUpdateWarnings };
var ResourceUpdate = /** @class */ (function (_super) {
    __extends(ResourceUpdate, _super);
    function ResourceUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessControl" }),
        __metadata("design:type", ResourceAccessControl)
    ], ResourceUpdate.prototype, "accessControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", ResourceUpdateError)
    ], ResourceUpdate.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finalProperties" }),
        __metadata("design:type", String)
    ], ResourceUpdate.prototype, "finalProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intent" }),
        __metadata("design:type", String)
    ], ResourceUpdate.prototype, "intent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manifest" }),
        __metadata("design:type", String)
    ], ResourceUpdate.prototype, "manifest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", String)
    ], ResourceUpdate.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ResourceUpdate.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warnings", elemType: ResourceUpdateWarnings }),
        __metadata("design:type", Array)
    ], ResourceUpdate.prototype, "warnings", void 0);
    return ResourceUpdate;
}(SpeakeasyBase));
export { ResourceUpdate };
