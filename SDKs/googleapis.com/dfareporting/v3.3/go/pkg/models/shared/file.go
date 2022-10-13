package shared

type FileFormatEnum string

const (
	FileFormatEnumCsv   FileFormatEnum = "CSV"
	FileFormatEnumExcel FileFormatEnum = "EXCEL"
)

type FileStatusEnum string

const (
	FileStatusEnumProcessing      FileStatusEnum = "PROCESSING"
	FileStatusEnumReportAvailable FileStatusEnum = "REPORT_AVAILABLE"
	FileStatusEnumFailed          FileStatusEnum = "FAILED"
	FileStatusEnumCancelled       FileStatusEnum = "CANCELLED"
)

type FileUrls struct {
	APIURL     *string `json:"apiUrl"`
	BrowserURL *string `json:"browserUrl"`
}

type File struct {
	DateRange        *DateRange      `json:"dateRange"`
	Etag             *string         `json:"etag"`
	FileName         *string         `json:"fileName"`
	Format           *FileFormatEnum `json:"format"`
	ID               *string         `json:"id"`
	Kind             *string         `json:"kind"`
	LastModifiedTime *string         `json:"lastModifiedTime"`
	ReportID         *string         `json:"reportId"`
	Status           *FileStatusEnum `json:"status"`
	Urls             *FileUrls       `json:"urls"`
}
