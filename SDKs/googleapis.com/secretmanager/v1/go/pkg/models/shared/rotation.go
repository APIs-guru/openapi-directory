package shared

// Rotation
// The rotation time and period for a Secret. At next_rotation_time, Secret Manager will send a Pub/Sub notification to the topics configured on the Secret. Secret.topics must be set to configure rotation.
type Rotation struct {
	NextRotationTime *string `json:"nextRotationTime,omitempty"`
	RotationPeriod   *string `json:"rotationPeriod,omitempty"`
}
