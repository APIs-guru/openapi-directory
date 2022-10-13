package shared

type Access struct {
	CallerIP                     *string                        `json:"callerIp"`
	CallerIPGeo                  *Geolocation                   `json:"callerIpGeo"`
	MethodName                   *string                        `json:"methodName"`
	PrincipalEmail               *string                        `json:"principalEmail"`
	PrincipalSubject             *string                        `json:"principalSubject"`
	ServiceAccountDelegationInfo []ServiceAccountDelegationInfo `json:"serviceAccountDelegationInfo"`
	ServiceAccountKeyName        *string                        `json:"serviceAccountKeyName"`
	ServiceName                  *string                        `json:"serviceName"`
	UserAgentFamily              *string                        `json:"userAgentFamily"`
	Username                     *string                        `json:"username"`
}
