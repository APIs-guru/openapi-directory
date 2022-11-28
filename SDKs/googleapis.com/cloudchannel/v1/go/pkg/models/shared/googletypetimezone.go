package shared

// GoogleTypeTimeZone
// Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
type GoogleTypeTimeZone struct {
	ID      *string `json:"id,omitempty"`
	Version *string `json:"version,omitempty"`
}
