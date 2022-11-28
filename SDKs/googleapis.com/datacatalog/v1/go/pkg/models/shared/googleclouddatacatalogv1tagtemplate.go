package shared

// GoogleCloudDatacatalogV1TagTemplateInput
// A tag template defines a tag that can have one or more typed fields. The template is used to create tags that are attached to GCP resources. [Tag template roles] (https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources.
type GoogleCloudDatacatalogV1TagTemplateInput struct {
	DisplayName        *string                                                  `json:"displayName,omitempty"`
	Fields             map[string]GoogleCloudDatacatalogV1TagTemplateFieldInput `json:"fields,omitempty"`
	IsPubliclyReadable *bool                                                    `json:"isPubliclyReadable,omitempty"`
	Name               *string                                                  `json:"name,omitempty"`
}

// GoogleCloudDatacatalogV1TagTemplate
// A tag template defines a tag that can have one or more typed fields. The template is used to create tags that are attached to GCP resources. [Tag template roles] (https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources.
type GoogleCloudDatacatalogV1TagTemplate struct {
	DisplayName        *string                                             `json:"displayName,omitempty"`
	Fields             map[string]GoogleCloudDatacatalogV1TagTemplateField `json:"fields,omitempty"`
	IsPubliclyReadable *bool                                               `json:"isPubliclyReadable,omitempty"`
	Name               *string                                             `json:"name,omitempty"`
}
