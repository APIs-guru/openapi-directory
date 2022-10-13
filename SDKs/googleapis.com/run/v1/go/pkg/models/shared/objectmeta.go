package shared

type ObjectMeta struct {
	Annotations                map[string]string `json:"annotations"`
	ClusterName                *string           `json:"clusterName"`
	CreationTimestamp          *string           `json:"creationTimestamp"`
	DeletionGracePeriodSeconds *int32            `json:"deletionGracePeriodSeconds"`
	DeletionTimestamp          *string           `json:"deletionTimestamp"`
	Finalizers                 []string          `json:"finalizers"`
	GenerateName               *string           `json:"generateName"`
	Generation                 *int32            `json:"generation"`
	Labels                     map[string]string `json:"labels"`
	Name                       *string           `json:"name"`
	Namespace                  *string           `json:"namespace"`
	OwnerReferences            []OwnerReference  `json:"ownerReferences"`
	ResourceVersion            *string           `json:"resourceVersion"`
	SelfLink                   *string           `json:"selfLink"`
	UID                        *string           `json:"uid"`
}
