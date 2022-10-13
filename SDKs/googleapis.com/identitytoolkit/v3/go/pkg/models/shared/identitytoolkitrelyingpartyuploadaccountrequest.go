package shared

type IdentitytoolkitRelyingpartyUploadAccountRequest struct {
	AllowOverwrite         *bool      `json:"allowOverwrite"`
	BlockSize              *int32     `json:"blockSize"`
	CPUMemCost             *int32     `json:"cpuMemCost"`
	DelegatedProjectNumber *string    `json:"delegatedProjectNumber"`
	DkLen                  *int32     `json:"dkLen"`
	HashAlgorithm          *string    `json:"hashAlgorithm"`
	MemoryCost             *int32     `json:"memoryCost"`
	Parallelization        *int32     `json:"parallelization"`
	Rounds                 *int32     `json:"rounds"`
	SaltSeparator          *string    `json:"saltSeparator"`
	SanityCheck            *bool      `json:"sanityCheck"`
	SignerKey              *string    `json:"signerKey"`
	TargetProjectID        *string    `json:"targetProjectId"`
	Users                  []UserInfo `json:"users"`
}
