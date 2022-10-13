package shared

type GcRule struct {
	Intersection   *Intersection `json:"intersection"`
	MaxAge         *string       `json:"maxAge"`
	MaxNumVersions *int32        `json:"maxNumVersions"`
	Union          *Union        `json:"union"`
}
