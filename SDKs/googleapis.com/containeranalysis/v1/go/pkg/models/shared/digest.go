package shared

type Digest struct {
	Algo        *string `json:"algo"`
	DigestBytes *string `json:"digestBytes"`
}
