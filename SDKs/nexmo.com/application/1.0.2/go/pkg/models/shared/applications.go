package shared



type Applications struct {
    Embedded Embedded `json:"_embedded"`
    Links Links `json:"_links"`
    Count int64 `json:"count"`
    PageIndex int64 `json:"page_index"`
    PageSize int64 `json:"page_size"`
    
}

