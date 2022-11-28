package shared

type OtoroshiHealthDatastoreEnum string

const (
	OtoroshiHealthDatastoreEnumHealthy     OtoroshiHealthDatastoreEnum = "healthy"
	OtoroshiHealthDatastoreEnumUnhealthy   OtoroshiHealthDatastoreEnum = "unhealthy"
	OtoroshiHealthDatastoreEnumUnreachable OtoroshiHealthDatastoreEnum = "unreachable"
)

type OtoroshiHealthOtoroshiEnum string

const (
	OtoroshiHealthOtoroshiEnumHealthy   OtoroshiHealthOtoroshiEnum = "healthy"
	OtoroshiHealthOtoroshiEnumUnhealthy OtoroshiHealthOtoroshiEnum = "unhealthy"
	OtoroshiHealthOtoroshiEnumDown      OtoroshiHealthOtoroshiEnum = "down"
)

// OtoroshiHealth
// The structure that represent current Otoroshi health
type OtoroshiHealth struct {
	Datastore OtoroshiHealthDatastoreEnum `json:"datastore"`
	Otoroshi  OtoroshiHealthOtoroshiEnum  `json:"otoroshi"`
}
