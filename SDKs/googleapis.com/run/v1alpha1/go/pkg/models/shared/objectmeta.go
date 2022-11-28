package shared

// ObjectMeta
// k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
type ObjectMeta struct {
	Annotations                map[string]string `json:"annotations,omitempty"`
	ClusterName                *string           `json:"clusterName,omitempty"`
	CreationTimestamp          *string           `json:"creationTimestamp,omitempty"`
	DeletionGracePeriodSeconds *int32            `json:"deletionGracePeriodSeconds,omitempty"`
	DeletionTimestamp          *string           `json:"deletionTimestamp,omitempty"`
	Finalizers                 []string          `json:"finalizers,omitempty"`
	GenerateName               *string           `json:"generateName,omitempty"`
	Generation                 *int32            `json:"generation,omitempty"`
	Labels                     map[string]string `json:"labels,omitempty"`
	Name                       *string           `json:"name,omitempty"`
	Namespace                  *string           `json:"namespace,omitempty"`
	OwnerReferences            []OwnerReference  `json:"ownerReferences,omitempty"`
	ResourceVersion            *string           `json:"resourceVersion,omitempty"`
	SelfLink                   *string           `json:"selfLink,omitempty"`
	UID                        *string           `json:"uid,omitempty"`
}
