package shared

type Digest struct {
	Algo        *string `json:"algo,omitempty"`
	DigestBytes *string `json:"digestBytes,omitempty"`
}
