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
import { Subnetwork } from "./subnetwork";
export var ValidateConsumerConfigResponseValidationErrorEnum;
(function (ValidateConsumerConfigResponseValidationErrorEnum) {
    ValidateConsumerConfigResponseValidationErrorEnum["ValidationErrorUnspecified"] = "VALIDATION_ERROR_UNSPECIFIED";
    ValidateConsumerConfigResponseValidationErrorEnum["ValidationNotRequested"] = "VALIDATION_NOT_REQUESTED";
    ValidateConsumerConfigResponseValidationErrorEnum["ServiceNetworkingNotEnabled"] = "SERVICE_NETWORKING_NOT_ENABLED";
    ValidateConsumerConfigResponseValidationErrorEnum["NetworkNotFound"] = "NETWORK_NOT_FOUND";
    ValidateConsumerConfigResponseValidationErrorEnum["NetworkNotPeered"] = "NETWORK_NOT_PEERED";
    ValidateConsumerConfigResponseValidationErrorEnum["NetworkPeeringDeleted"] = "NETWORK_PEERING_DELETED";
    ValidateConsumerConfigResponseValidationErrorEnum["NetworkNotInConsumersProject"] = "NETWORK_NOT_IN_CONSUMERS_PROJECT";
    ValidateConsumerConfigResponseValidationErrorEnum["NetworkNotInConsumersHostProject"] = "NETWORK_NOT_IN_CONSUMERS_HOST_PROJECT";
    ValidateConsumerConfigResponseValidationErrorEnum["HostProjectNotFound"] = "HOST_PROJECT_NOT_FOUND";
    ValidateConsumerConfigResponseValidationErrorEnum["ConsumerProjectNotServiceProject"] = "CONSUMER_PROJECT_NOT_SERVICE_PROJECT";
    ValidateConsumerConfigResponseValidationErrorEnum["RangesExhausted"] = "RANGES_EXHAUSTED";
    ValidateConsumerConfigResponseValidationErrorEnum["RangesNotReserved"] = "RANGES_NOT_RESERVED";
    ValidateConsumerConfigResponseValidationErrorEnum["RangesDeletedLater"] = "RANGES_DELETED_LATER";
    ValidateConsumerConfigResponseValidationErrorEnum["ComputeApiNotEnabled"] = "COMPUTE_API_NOT_ENABLED";
    ValidateConsumerConfigResponseValidationErrorEnum["UsePermissionNotFound"] = "USE_PERMISSION_NOT_FOUND";
})(ValidateConsumerConfigResponseValidationErrorEnum || (ValidateConsumerConfigResponseValidationErrorEnum = {}));
var ValidateConsumerConfigResponse = /** @class */ (function (_super) {
    __extends(ValidateConsumerConfigResponse, _super);
    function ValidateConsumerConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=existingSubnetworkCandidates", elemType: Subnetwork }),
        __metadata("design:type", Array)
    ], ValidateConsumerConfigResponse.prototype, "existingSubnetworkCandidates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isValid" }),
        __metadata("design:type", Boolean)
    ], ValidateConsumerConfigResponse.prototype, "isValid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validationError" }),
        __metadata("design:type", String)
    ], ValidateConsumerConfigResponse.prototype, "validationError", void 0);
    return ValidateConsumerConfigResponse;
}(SpeakeasyBase));
export { ValidateConsumerConfigResponse };
