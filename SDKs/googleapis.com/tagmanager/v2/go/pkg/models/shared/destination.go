package shared

// Destination
// Represents a Google Tag Destination.
type Destination struct {
	AccountID         *string `json:"accountId,omitempty"`
	ContainerID       *string `json:"containerId,omitempty"`
	DestinationID     *string `json:"destinationId,omitempty"`
	DestinationLinkID *string `json:"destinationLinkId,omitempty"`
	Fingerprint       *string `json:"fingerprint,omitempty"`
	Name              *string `json:"name,omitempty"`
	Path              *string `json:"path,omitempty"`
	TagManagerURL     *string `json:"tagManagerUrl,omitempty"`
}
