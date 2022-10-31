package shared




type FileFormatEnum string

const (
    FileFormatEnumCsv FileFormatEnum = "CSV"
FileFormatEnumExcel FileFormatEnum = "EXCEL"
)



type FileStatusEnum string

const (
    FileStatusEnumProcessing FileStatusEnum = "PROCESSING"
FileStatusEnumReportAvailable FileStatusEnum = "REPORT_AVAILABLE"
FileStatusEnumFailed FileStatusEnum = "FAILED"
FileStatusEnumCancelled FileStatusEnum = "CANCELLED"
)


type FileUrls struct {
    APIURL *string `json:"apiUrl,omitempty"`
    BrowserURL *string `json:"browserUrl,omitempty"`
    
}

type File struct {
    DateRange *DateRange `json:"dateRange,omitempty"`
    Etag *string `json:"etag,omitempty"`
    FileName *string `json:"fileName,omitempty"`
    Format *FileFormatEnum `json:"format,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LastModifiedTime *string `json:"lastModifiedTime,omitempty"`
    ReportID *string `json:"reportId,omitempty"`
    Status *FileStatusEnum `json:"status,omitempty"`
    Urls *FileUrls `json:"urls,omitempty"`
    
}

