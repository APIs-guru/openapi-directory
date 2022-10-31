package shared



type GoogleCloudRunV2Container struct {
    Args []string `json:"args,omitempty"`
    Command []string `json:"command,omitempty"`
    Env []GoogleCloudRunV2EnvVar `json:"env,omitempty"`
    Image *string `json:"image,omitempty"`
    LivenessProbe *GoogleCloudRunV2Probe `json:"livenessProbe,omitempty"`
    Name *string `json:"name,omitempty"`
    Ports []GoogleCloudRunV2ContainerPort `json:"ports,omitempty"`
    Resources *GoogleCloudRunV2ResourceRequirements `json:"resources,omitempty"`
    StartupProbe *GoogleCloudRunV2Probe `json:"startupProbe,omitempty"`
    VolumeMounts []GoogleCloudRunV2VolumeMount `json:"volumeMounts,omitempty"`
    WorkingDir *string `json:"workingDir,omitempty"`
    
}

