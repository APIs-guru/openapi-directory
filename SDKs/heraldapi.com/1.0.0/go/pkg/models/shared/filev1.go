package shared

import (
	"time"
)

type FileV1FormatEnum string

const (
	FileV1FormatEnumPdf FileV1FormatEnum = "pdf"
	FileV1FormatEnumCsv FileV1FormatEnum = "csv"
	FileV1FormatEnumJpg FileV1FormatEnum = "jpg"
	FileV1FormatEnumPng FileV1FormatEnum = "png"
)

type FileV1StatusEnum string

const (
	FileV1StatusEnumAvailable FileV1StatusEnum = "available"
	FileV1StatusEnumDeleted   FileV1StatusEnum = "deleted"
)

type FileV1TypeEnum string

const (
	FileV1TypeEnumQuoteSummary       FileV1TypeEnum = "quote_summary"
	FileV1TypeEnumPolicySpecimen     FileV1TypeEnum = "policy_specimen"
	FileV1TypeEnumCyberRiskAssement  FileV1TypeEnum = "cyber_risk_assement"
	FileV1TypeEnumApplicationSummary FileV1TypeEnum = "application_summary"
)

// FileV1
// Details for a specific file.
type FileV1 struct {
	CreatedAt *time.Time        `json:"created_at,omitempty"`
	FileName  *string           `json:"file_name,omitempty"`
	Format    *FileV1FormatEnum `json:"format,omitempty"`
	ID        *string           `json:"id,omitempty"`
	Size      *int64            `json:"size,omitempty"`
	Status    *FileV1StatusEnum `json:"status,omitempty"`
	Text      *string           `json:"text,omitempty"`
	Type      *FileV1TypeEnum   `json:"type,omitempty"`
}
