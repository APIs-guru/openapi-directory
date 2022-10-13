package shared

type Cve struct {
	Cvssv3               *Cvssv3     `json:"cvssv3"`
	ID                   *string     `json:"id"`
	References           []Reference `json:"references"`
	UpstreamFixAvailable *bool       `json:"upstreamFixAvailable"`
}
