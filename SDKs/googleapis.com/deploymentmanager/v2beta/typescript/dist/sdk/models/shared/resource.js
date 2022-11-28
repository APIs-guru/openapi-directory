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
import { ResourceUpdate } from "./resourceupdate";
export var ResourceWarningsCodeEnum;
(function (ResourceWarningsCodeEnum) {
    ResourceWarningsCodeEnum["DeprecatedResourceUsed"] = "DEPRECATED_RESOURCE_USED";
    ResourceWarningsCodeEnum["NoResultsOnPage"] = "NO_RESULTS_ON_PAGE";
    ResourceWarningsCodeEnum["Unreachable"] = "UNREACHABLE";
    ResourceWarningsCodeEnum["NextHopAddressNotAssigned"] = "NEXT_HOP_ADDRESS_NOT_ASSIGNED";
    ResourceWarningsCodeEnum["NextHopInstanceNotFound"] = "NEXT_HOP_INSTANCE_NOT_FOUND";
    ResourceWarningsCodeEnum["NextHopInstanceNotOnNetwork"] = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK";
    ResourceWarningsCodeEnum["NextHopCannotIpForward"] = "NEXT_HOP_CANNOT_IP_FORWARD";
    ResourceWarningsCodeEnum["NextHopNotRunning"] = "NEXT_HOP_NOT_RUNNING";
    ResourceWarningsCodeEnum["InjectedKernelsDeprecated"] = "INJECTED_KERNELS_DEPRECATED";
    ResourceWarningsCodeEnum["RequiredTosAgreement"] = "REQUIRED_TOS_AGREEMENT";
    ResourceWarningsCodeEnum["DiskSizeLargerThanImageSize"] = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE";
    ResourceWarningsCodeEnum["ResourceNotDeleted"] = "RESOURCE_NOT_DELETED";
    ResourceWarningsCodeEnum["SingleInstancePropertyTemplate"] = "SINGLE_INSTANCE_PROPERTY_TEMPLATE";
    ResourceWarningsCodeEnum["NotCriticalError"] = "NOT_CRITICAL_ERROR";
    ResourceWarningsCodeEnum["CleanupFailed"] = "CLEANUP_FAILED";
    ResourceWarningsCodeEnum["FieldValueOverriden"] = "FIELD_VALUE_OVERRIDEN";
    ResourceWarningsCodeEnum["ResourceInUseByOtherResourceWarning"] = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING";
    ResourceWarningsCodeEnum["MissingTypeDependency"] = "MISSING_TYPE_DEPENDENCY";
    ResourceWarningsCodeEnum["ExternalApiWarning"] = "EXTERNAL_API_WARNING";
    ResourceWarningsCodeEnum["SchemaValidationIgnored"] = "SCHEMA_VALIDATION_IGNORED";
    ResourceWarningsCodeEnum["UndeclaredProperties"] = "UNDECLARED_PROPERTIES";
    ResourceWarningsCodeEnum["ExperimentalTypeUsed"] = "EXPERIMENTAL_TYPE_USED";
    ResourceWarningsCodeEnum["DeprecatedTypeUsed"] = "DEPRECATED_TYPE_USED";
    ResourceWarningsCodeEnum["PartialSuccess"] = "PARTIAL_SUCCESS";
    ResourceWarningsCodeEnum["LargeDeploymentWarning"] = "LARGE_DEPLOYMENT_WARNING";
    ResourceWarningsCodeEnum["NextHopInstanceHasNoIpv6Interface"] = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE";
    ResourceWarningsCodeEnum["InvalidHealthCheckForDynamicWieghtedLb"] = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB";
})(ResourceWarningsCodeEnum || (ResourceWarningsCodeEnum = {}));
var ResourceWarningsData = /** @class */ (function (_super) {
    __extends(ResourceWarningsData, _super);
    function ResourceWarningsData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ResourceWarningsData.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ResourceWarningsData.prototype, "value", void 0);
    return ResourceWarningsData;
}(SpeakeasyBase));
export { ResourceWarningsData };
var ResourceWarnings = /** @class */ (function (_super) {
    __extends(ResourceWarnings, _super);
    function ResourceWarnings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ResourceWarnings.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceWarningsData }),
        __metadata("design:type", Array)
    ], ResourceWarnings.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ResourceWarnings.prototype, "message", void 0);
    return ResourceWarnings;
}(SpeakeasyBase));
export { ResourceWarnings };
var Resource = /** @class */ (function (_super) {
    __extends(Resource, _super);
    function Resource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessControl" }),
        __metadata("design:type", ResourceAccessControl)
    ], Resource.prototype, "accessControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finalProperties" }),
        __metadata("design:type", String)
    ], Resource.prototype, "finalProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Resource.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertTime" }),
        __metadata("design:type", String)
    ], Resource.prototype, "insertTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manifest" }),
        __metadata("design:type", String)
    ], Resource.prototype, "manifest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Resource.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", String)
    ], Resource.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Resource.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update" }),
        __metadata("design:type", ResourceUpdate)
    ], Resource.prototype, "update", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Resource.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Resource.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warnings", elemType: ResourceWarnings }),
        __metadata("design:type", Array)
    ], Resource.prototype, "warnings", void 0);
    return Resource;
}(SpeakeasyBase));
export { Resource };
