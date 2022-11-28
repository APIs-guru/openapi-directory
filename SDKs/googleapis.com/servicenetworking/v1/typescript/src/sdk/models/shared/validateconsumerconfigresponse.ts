import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subnetwork } from "./subnetwork";


export enum ValidateConsumerConfigResponseValidationErrorEnum {
    ValidationErrorUnspecified = "VALIDATION_ERROR_UNSPECIFIED",
    ValidationNotRequested = "VALIDATION_NOT_REQUESTED",
    ServiceNetworkingNotEnabled = "SERVICE_NETWORKING_NOT_ENABLED",
    NetworkNotFound = "NETWORK_NOT_FOUND",
    NetworkNotPeered = "NETWORK_NOT_PEERED",
    NetworkPeeringDeleted = "NETWORK_PEERING_DELETED",
    NetworkNotInConsumersProject = "NETWORK_NOT_IN_CONSUMERS_PROJECT",
    NetworkNotInConsumersHostProject = "NETWORK_NOT_IN_CONSUMERS_HOST_PROJECT",
    HostProjectNotFound = "HOST_PROJECT_NOT_FOUND",
    ConsumerProjectNotServiceProject = "CONSUMER_PROJECT_NOT_SERVICE_PROJECT",
    RangesExhausted = "RANGES_EXHAUSTED",
    RangesNotReserved = "RANGES_NOT_RESERVED",
    RangesDeletedLater = "RANGES_DELETED_LATER",
    ComputeApiNotEnabled = "COMPUTE_API_NOT_ENABLED",
    UsePermissionNotFound = "USE_PERMISSION_NOT_FOUND"
}


export class ValidateConsumerConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=existingSubnetworkCandidates", elemType: Subnetwork })
  existingSubnetworkCandidates?: Subnetwork[];

  @SpeakeasyMetadata({ data: "json, name=isValid" })
  isValid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=validationError" })
  validationError?: ValidateConsumerConfigResponseValidationErrorEnum;
}
