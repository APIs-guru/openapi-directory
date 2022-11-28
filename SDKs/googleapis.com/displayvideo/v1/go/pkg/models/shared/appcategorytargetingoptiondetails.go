package shared

// AppCategoryTargetingOptionDetails
// Represents a targetable collection of apps. A collection lets you target dynamic groups of related apps that are maintained by the platform, for example `All Apps/Google Play/Games`. This will be populated in the app_category_details field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
type AppCategoryTargetingOptionDetails struct {
	DisplayName *string `json:"displayName,omitempty"`
}
