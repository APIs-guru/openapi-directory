package shared

// Service
// Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets). The Service's controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own. See also: https://github.com/knative/serving/blob/main/docs/spec/overview.md#service
type Service struct {
	APIVersion *string        `json:"apiVersion,omitempty"`
	Kind       *string        `json:"kind,omitempty"`
	Metadata   *ObjectMeta    `json:"metadata,omitempty"`
	Spec       *ServiceSpec   `json:"spec,omitempty"`
	Status     *ServiceStatus `json:"status,omitempty"`
}

// ServiceInput
// Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets). The Service's controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own. See also: https://github.com/knative/serving/blob/main/docs/spec/overview.md#service
type ServiceInput struct {
	APIVersion *string             `json:"apiVersion,omitempty"`
	Kind       *string             `json:"kind,omitempty"`
	Metadata   *ObjectMeta         `json:"metadata,omitempty"`
	Spec       *ServiceSpecInput   `json:"spec,omitempty"`
	Status     *ServiceStatusInput `json:"status,omitempty"`
}
