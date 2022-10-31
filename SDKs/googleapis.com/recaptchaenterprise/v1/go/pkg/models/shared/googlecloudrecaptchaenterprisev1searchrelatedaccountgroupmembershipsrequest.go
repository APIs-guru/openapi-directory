package shared

type GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest struct {
	HashedAccountID *string `json:"hashedAccountId,omitempty"`
	PageSize        *int32  `json:"pageSize,omitempty"`
	PageToken       *string `json:"pageToken,omitempty"`
}
