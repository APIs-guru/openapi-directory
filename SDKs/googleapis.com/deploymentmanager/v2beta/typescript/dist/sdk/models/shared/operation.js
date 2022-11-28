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
var OperationErrorErrors = /** @class */ (function (_super) {
    __extends(OperationErrorErrors, _super);
    function OperationErrorErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], OperationErrorErrors.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], OperationErrorErrors.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], OperationErrorErrors.prototype, "message", void 0);
    return OperationErrorErrors;
}(SpeakeasyBase));
export { OperationErrorErrors };
// OperationError
/**
 * [Output Only] If errors are generated during processing of the operation, this field will be populated.
**/
var OperationError = /** @class */ (function (_super) {
    __extends(OperationError, _super);
    function OperationError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: OperationErrorErrors }),
        __metadata("design:type", Array)
    ], OperationError.prototype, "errors", void 0);
    return OperationError;
}(SpeakeasyBase));
export { OperationError };
export var OperationStatusEnum;
(function (OperationStatusEnum) {
    OperationStatusEnum["Pending"] = "PENDING";
    OperationStatusEnum["Running"] = "RUNNING";
    OperationStatusEnum["Done"] = "DONE";
})(OperationStatusEnum || (OperationStatusEnum = {}));
export var OperationWarningsCodeEnum;
(function (OperationWarningsCodeEnum) {
    OperationWarningsCodeEnum["DeprecatedResourceUsed"] = "DEPRECATED_RESOURCE_USED";
    OperationWarningsCodeEnum["NoResultsOnPage"] = "NO_RESULTS_ON_PAGE";
    OperationWarningsCodeEnum["Unreachable"] = "UNREACHABLE";
    OperationWarningsCodeEnum["NextHopAddressNotAssigned"] = "NEXT_HOP_ADDRESS_NOT_ASSIGNED";
    OperationWarningsCodeEnum["NextHopInstanceNotFound"] = "NEXT_HOP_INSTANCE_NOT_FOUND";
    OperationWarningsCodeEnum["NextHopInstanceNotOnNetwork"] = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK";
    OperationWarningsCodeEnum["NextHopCannotIpForward"] = "NEXT_HOP_CANNOT_IP_FORWARD";
    OperationWarningsCodeEnum["NextHopNotRunning"] = "NEXT_HOP_NOT_RUNNING";
    OperationWarningsCodeEnum["InjectedKernelsDeprecated"] = "INJECTED_KERNELS_DEPRECATED";
    OperationWarningsCodeEnum["RequiredTosAgreement"] = "REQUIRED_TOS_AGREEMENT";
    OperationWarningsCodeEnum["DiskSizeLargerThanImageSize"] = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE";
    OperationWarningsCodeEnum["ResourceNotDeleted"] = "RESOURCE_NOT_DELETED";
    OperationWarningsCodeEnum["SingleInstancePropertyTemplate"] = "SINGLE_INSTANCE_PROPERTY_TEMPLATE";
    OperationWarningsCodeEnum["NotCriticalError"] = "NOT_CRITICAL_ERROR";
    OperationWarningsCodeEnum["CleanupFailed"] = "CLEANUP_FAILED";
    OperationWarningsCodeEnum["FieldValueOverriden"] = "FIELD_VALUE_OVERRIDEN";
    OperationWarningsCodeEnum["ResourceInUseByOtherResourceWarning"] = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING";
    OperationWarningsCodeEnum["MissingTypeDependency"] = "MISSING_TYPE_DEPENDENCY";
    OperationWarningsCodeEnum["ExternalApiWarning"] = "EXTERNAL_API_WARNING";
    OperationWarningsCodeEnum["SchemaValidationIgnored"] = "SCHEMA_VALIDATION_IGNORED";
    OperationWarningsCodeEnum["UndeclaredProperties"] = "UNDECLARED_PROPERTIES";
    OperationWarningsCodeEnum["ExperimentalTypeUsed"] = "EXPERIMENTAL_TYPE_USED";
    OperationWarningsCodeEnum["DeprecatedTypeUsed"] = "DEPRECATED_TYPE_USED";
    OperationWarningsCodeEnum["PartialSuccess"] = "PARTIAL_SUCCESS";
    OperationWarningsCodeEnum["LargeDeploymentWarning"] = "LARGE_DEPLOYMENT_WARNING";
    OperationWarningsCodeEnum["NextHopInstanceHasNoIpv6Interface"] = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE";
    OperationWarningsCodeEnum["InvalidHealthCheckForDynamicWieghtedLb"] = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB";
})(OperationWarningsCodeEnum || (OperationWarningsCodeEnum = {}));
var OperationWarningsData = /** @class */ (function (_super) {
    __extends(OperationWarningsData, _super);
    function OperationWarningsData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], OperationWarningsData.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], OperationWarningsData.prototype, "value", void 0);
    return OperationWarningsData;
}(SpeakeasyBase));
export { OperationWarningsData };
var OperationWarnings = /** @class */ (function (_super) {
    __extends(OperationWarnings, _super);
    function OperationWarnings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], OperationWarnings.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: OperationWarningsData }),
        __metadata("design:type", Array)
    ], OperationWarnings.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], OperationWarnings.prototype, "message", void 0);
    return OperationWarnings;
}(SpeakeasyBase));
export { OperationWarnings };
// Operation
/**
 * Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zonalOperations` resource. For more information, read Global, Regional, and Zonal Resources.
**/
var Operation = /** @class */ (function (_super) {
    __extends(Operation, _super);
    function Operation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientOperationId" }),
        __metadata("design:type", String)
    ], Operation.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTimestamp" }),
        __metadata("design:type", String)
    ], Operation.prototype, "creationTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Operation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], Operation.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", OperationError)
    ], Operation.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpErrorMessage" }),
        __metadata("design:type", String)
    ], Operation.prototype, "httpErrorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpErrorStatusCode" }),
        __metadata("design:type", Number)
    ], Operation.prototype, "httpErrorStatusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Operation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertTime" }),
        __metadata("design:type", String)
    ], Operation.prototype, "insertTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Operation.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Operation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationGroupId" }),
        __metadata("design:type", String)
    ], Operation.prototype, "operationGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationType" }),
        __metadata("design:type", String)
    ], Operation.prototype, "operationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], Operation.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], Operation.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Operation.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], Operation.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Operation.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], Operation.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetId" }),
        __metadata("design:type", String)
    ], Operation.prototype, "targetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetLink" }),
        __metadata("design:type", String)
    ], Operation.prototype, "targetLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], Operation.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warnings", elemType: OperationWarnings }),
        __metadata("design:type", Array)
    ], Operation.prototype, "warnings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], Operation.prototype, "zone", void 0);
    return Operation;
}(SpeakeasyBase));
export { Operation };
