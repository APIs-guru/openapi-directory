package shared



type ExportTemplate struct {
    ContentType int64 `json:"content_type"`
    Description *string `json:"description,omitempty"`
    FileExtension *string `json:"file_extension,omitempty"`
    ID *int64 `json:"id,omitempty"`
    MimeType *string `json:"mime_type,omitempty"`
    Name string `json:"name"`
    TemplateCode string `json:"template_code"`
    
}

