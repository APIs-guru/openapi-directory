package shared

type IdentitytoolkitRelyingpartyUploadAccountRequest struct {
	AllowOverwrite         *bool      `json:"allowOverwrite,omitempty"`
	BlockSize              *int32     `json:"blockSize,omitempty"`
	CPUMemCost             *int32     `json:"cpuMemCost,omitempty"`
	DelegatedProjectNumber *string    `json:"delegatedProjectNumber,omitempty"`
	DkLen                  *int32     `json:"dkLen,omitempty"`
	HashAlgorithm          *string    `json:"hashAlgorithm,omitempty"`
	MemoryCost             *int32     `json:"memoryCost,omitempty"`
	Parallelization        *int32     `json:"parallelization,omitempty"`
	Rounds                 *int32     `json:"rounds,omitempty"`
	SaltSeparator          *string    `json:"saltSeparator,omitempty"`
	SanityCheck            *bool      `json:"sanityCheck,omitempty"`
	SignerKey              *string    `json:"signerKey,omitempty"`
	TargetProjectID        *string    `json:"targetProjectId,omitempty"`
	Users                  []UserInfo `json:"users,omitempty"`
}
