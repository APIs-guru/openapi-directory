package shared

type Access struct {
	CallerIP                     *string                        `json:"callerIp,omitempty"`
	CallerIPGeo                  *Geolocation                   `json:"callerIpGeo,omitempty"`
	MethodName                   *string                        `json:"methodName,omitempty"`
	PrincipalEmail               *string                        `json:"principalEmail,omitempty"`
	PrincipalSubject             *string                        `json:"principalSubject,omitempty"`
	ServiceAccountDelegationInfo []ServiceAccountDelegationInfo `json:"serviceAccountDelegationInfo,omitempty"`
	ServiceAccountKeyName        *string                        `json:"serviceAccountKeyName,omitempty"`
	ServiceName                  *string                        `json:"serviceName,omitempty"`
	UserAgentFamily              *string                        `json:"userAgentFamily,omitempty"`
	Username                     *string                        `json:"username,omitempty"`
}
