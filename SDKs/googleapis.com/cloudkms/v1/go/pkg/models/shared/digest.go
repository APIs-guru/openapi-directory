package shared

type Digest struct {
	Sha256 *string `json:"sha256"`
	Sha384 *string `json:"sha384"`
	Sha512 *string `json:"sha512"`
}
