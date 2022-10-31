package shared

type ValidateConsumerConfigResponseValidationErrorEnum string

const (
	ValidateConsumerConfigResponseValidationErrorEnumValidationErrorUnspecified       ValidateConsumerConfigResponseValidationErrorEnum = "VALIDATION_ERROR_UNSPECIFIED"
	ValidateConsumerConfigResponseValidationErrorEnumValidationNotRequested           ValidateConsumerConfigResponseValidationErrorEnum = "VALIDATION_NOT_REQUESTED"
	ValidateConsumerConfigResponseValidationErrorEnumServiceNetworkingNotEnabled      ValidateConsumerConfigResponseValidationErrorEnum = "SERVICE_NETWORKING_NOT_ENABLED"
	ValidateConsumerConfigResponseValidationErrorEnumNetworkNotFound                  ValidateConsumerConfigResponseValidationErrorEnum = "NETWORK_NOT_FOUND"
	ValidateConsumerConfigResponseValidationErrorEnumNetworkNotPeered                 ValidateConsumerConfigResponseValidationErrorEnum = "NETWORK_NOT_PEERED"
	ValidateConsumerConfigResponseValidationErrorEnumNetworkPeeringDeleted            ValidateConsumerConfigResponseValidationErrorEnum = "NETWORK_PEERING_DELETED"
	ValidateConsumerConfigResponseValidationErrorEnumNetworkNotInConsumersProject     ValidateConsumerConfigResponseValidationErrorEnum = "NETWORK_NOT_IN_CONSUMERS_PROJECT"
	ValidateConsumerConfigResponseValidationErrorEnumNetworkNotInConsumersHostProject ValidateConsumerConfigResponseValidationErrorEnum = "NETWORK_NOT_IN_CONSUMERS_HOST_PROJECT"
	ValidateConsumerConfigResponseValidationErrorEnumHostProjectNotFound              ValidateConsumerConfigResponseValidationErrorEnum = "HOST_PROJECT_NOT_FOUND"
	ValidateConsumerConfigResponseValidationErrorEnumConsumerProjectNotServiceProject ValidateConsumerConfigResponseValidationErrorEnum = "CONSUMER_PROJECT_NOT_SERVICE_PROJECT"
	ValidateConsumerConfigResponseValidationErrorEnumRangesExhausted                  ValidateConsumerConfigResponseValidationErrorEnum = "RANGES_EXHAUSTED"
	ValidateConsumerConfigResponseValidationErrorEnumRangesNotReserved                ValidateConsumerConfigResponseValidationErrorEnum = "RANGES_NOT_RESERVED"
	ValidateConsumerConfigResponseValidationErrorEnumRangesDeletedLater               ValidateConsumerConfigResponseValidationErrorEnum = "RANGES_DELETED_LATER"
	ValidateConsumerConfigResponseValidationErrorEnumComputeAPINotEnabled             ValidateConsumerConfigResponseValidationErrorEnum = "COMPUTE_API_NOT_ENABLED"
	ValidateConsumerConfigResponseValidationErrorEnumUsePermissionNotFound            ValidateConsumerConfigResponseValidationErrorEnum = "USE_PERMISSION_NOT_FOUND"
)

type ValidateConsumerConfigResponse struct {
	ExistingSubnetworkCandidates []Subnetwork                                       `json:"existingSubnetworkCandidates,omitempty"`
	IsValid                      *bool                                              `json:"isValid,omitempty"`
	ValidationError              *ValidateConsumerConfigResponseValidationErrorEnum `json:"validationError,omitempty"`
}
