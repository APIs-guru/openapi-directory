package shared

// EntityKey
// A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.
type EntityKey struct {
	ID        *string `json:"id,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
}
