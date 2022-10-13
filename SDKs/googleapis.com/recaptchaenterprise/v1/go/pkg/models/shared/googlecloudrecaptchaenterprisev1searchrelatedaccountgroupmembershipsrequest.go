package shared

type GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest struct {
	HashedAccountID *string `json:"hashedAccountId"`
	PageSize        *int32  `json:"pageSize"`
	PageToken       *string `json:"pageToken"`
}
