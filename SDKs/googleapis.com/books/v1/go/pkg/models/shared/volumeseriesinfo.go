package shared

type VolumeseriesinfoVolumeSeriesIssue struct {
	IssueDisplayNumber *string `json:"issueDisplayNumber,omitempty"`
	IssueOrderNumber   *int32  `json:"issueOrderNumber,omitempty"`
}

type VolumeseriesinfoVolumeSeries struct {
	Issue          []VolumeseriesinfoVolumeSeriesIssue `json:"issue,omitempty"`
	OrderNumber    *int32                              `json:"orderNumber,omitempty"`
	SeriesBookType *string                             `json:"seriesBookType,omitempty"`
	SeriesID       *string                             `json:"seriesId,omitempty"`
}

type Volumeseriesinfo struct {
	BookDisplayNumber    *string                        `json:"bookDisplayNumber,omitempty"`
	Kind                 *string                        `json:"kind,omitempty"`
	ShortSeriesBookTitle *string                        `json:"shortSeriesBookTitle,omitempty"`
	VolumeSeries         []VolumeseriesinfoVolumeSeries `json:"volumeSeries,omitempty"`
}
