package shared

// ServiceAccount
// An IAM service account. A service account is an account for an application or a virtual machine (VM) instance, not a person. You can use a service account to call Google APIs. To learn more, read the [overview of service accounts](https://cloud.google.com/iam/help/service-accounts/overview). When you create a service account, you specify the project ID that owns the service account, as well as a name that must be unique within the project. IAM uses these values to create an email address that identifies the service //
type ServiceAccount struct {
	Description    *string `json:"description,omitempty"`
	Disabled       *bool   `json:"disabled,omitempty"`
	DisplayName    *string `json:"displayName,omitempty"`
	Email          *string `json:"email,omitempty"`
	Etag           *string `json:"etag,omitempty"`
	Name           *string `json:"name,omitempty"`
	Oauth2ClientID *string `json:"oauth2ClientId,omitempty"`
	ProjectID      *string `json:"projectId,omitempty"`
	UniqueID       *string `json:"uniqueId,omitempty"`
}

// ServiceAccountInput
// An IAM service account. A service account is an account for an application or a virtual machine (VM) instance, not a person. You can use a service account to call Google APIs. To learn more, read the [overview of service accounts](https://cloud.google.com/iam/help/service-accounts/overview). When you create a service account, you specify the project ID that owns the service account, as well as a name that must be unique within the project. IAM uses these values to create an email address that identifies the service //
type ServiceAccountInput struct {
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Etag        *string `json:"etag,omitempty"`
	Name        *string `json:"name,omitempty"`
}
