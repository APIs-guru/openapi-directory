package shared




type RepositoryErrorTypeEnum string

const (
    RepositoryErrorTypeEnumUnknown RepositoryErrorTypeEnum = "UNKNOWN"
RepositoryErrorTypeEnumNetworkError RepositoryErrorTypeEnum = "NETWORK_ERROR"
RepositoryErrorTypeEnumDNSError RepositoryErrorTypeEnum = "DNS_ERROR"
RepositoryErrorTypeEnumConnectionError RepositoryErrorTypeEnum = "CONNECTION_ERROR"
RepositoryErrorTypeEnumAuthenticationError RepositoryErrorTypeEnum = "AUTHENTICATION_ERROR"
RepositoryErrorTypeEnumAuthorizationError RepositoryErrorTypeEnum = "AUTHORIZATION_ERROR"
RepositoryErrorTypeEnumServerError RepositoryErrorTypeEnum = "SERVER_ERROR"
RepositoryErrorTypeEnumQuotaExceeded RepositoryErrorTypeEnum = "QUOTA_EXCEEDED"
RepositoryErrorTypeEnumServiceUnavailable RepositoryErrorTypeEnum = "SERVICE_UNAVAILABLE"
RepositoryErrorTypeEnumClientError RepositoryErrorTypeEnum = "CLIENT_ERROR"
)


type RepositoryError struct {
    ErrorMessage *string `json:"errorMessage,omitempty"`
    HTTPStatusCode *int32 `json:"httpStatusCode,omitempty"`
    Type *RepositoryErrorTypeEnum `json:"type,omitempty"`
    
}

