package shared

type NodeTaintEffectEnum string

const (
	NodeTaintEffectEnumEffectUnspecified NodeTaintEffectEnum = "EFFECT_UNSPECIFIED"
	NodeTaintEffectEnumNoSchedule        NodeTaintEffectEnum = "NO_SCHEDULE"
	NodeTaintEffectEnumPreferNoSchedule  NodeTaintEffectEnum = "PREFER_NO_SCHEDULE"
	NodeTaintEffectEnumNoExecute         NodeTaintEffectEnum = "NO_EXECUTE"
)

// NodeTaint
// Kubernetes taint is comprised of three fields: key, value, and effect. Effect can only be one of three types: NoSchedule, PreferNoSchedule or NoExecute. See [here](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration) for more information, including usage and the valid values.
type NodeTaint struct {
	Effect *NodeTaintEffectEnum `json:"effect,omitempty"`
	Key    *string              `json:"key,omitempty"`
	Value  *string              `json:"value,omitempty"`
}
