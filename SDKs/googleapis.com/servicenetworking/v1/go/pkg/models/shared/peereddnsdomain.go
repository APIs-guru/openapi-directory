package shared

// PeeredDNSDomain
// DNS domain suffix for which requests originating in the producer VPC network are resolved in the associated consumer VPC network.
type PeeredDNSDomain struct {
	DNSSuffix *string `json:"dnsSuffix,omitempty"`
	Name      *string `json:"name,omitempty"`
}
