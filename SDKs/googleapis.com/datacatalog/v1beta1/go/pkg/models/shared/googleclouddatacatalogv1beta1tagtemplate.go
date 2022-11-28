package shared

// GoogleCloudDatacatalogV1beta1TagTemplateInput
// A tag template defines a tag, which can have one or more typed fields. The template is used to create and attach the tag to GCP resources. [Tag template roles](https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. See, for example, the [TagTemplate User](https://cloud.google.com/data-catalog/docs/how-to/template-user) role, which includes permission to use the tag template to tag resources.
type GoogleCloudDatacatalogV1beta1TagTemplateInput struct {
	DisplayName *string                                                       `json:"displayName,omitempty"`
	Fields      map[string]GoogleCloudDatacatalogV1beta1TagTemplateFieldInput `json:"fields,omitempty"`
	Name        *string                                                       `json:"name,omitempty"`
}

// GoogleCloudDatacatalogV1beta1TagTemplate
// A tag template defines a tag, which can have one or more typed fields. The template is used to create and attach the tag to GCP resources. [Tag template roles](https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. See, for example, the [TagTemplate User](https://cloud.google.com/data-catalog/docs/how-to/template-user) role, which includes permission to use the tag template to tag resources.
type GoogleCloudDatacatalogV1beta1TagTemplate struct {
	DisplayName *string                                                  `json:"displayName,omitempty"`
	Fields      map[string]GoogleCloudDatacatalogV1beta1TagTemplateField `json:"fields,omitempty"`
	Name        *string                                                  `json:"name,omitempty"`
}
