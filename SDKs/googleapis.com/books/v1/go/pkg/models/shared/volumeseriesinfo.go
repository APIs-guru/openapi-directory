package shared

type VolumeseriesinfoVolumeSeriesIssue struct {
	IssueDisplayNumber *string `json:"issueDisplayNumber"`
	IssueOrderNumber   *int32  `json:"issueOrderNumber"`
}

type VolumeseriesinfoVolumeSeries struct {
	Issue          []VolumeseriesinfoVolumeSeriesIssue `json:"issue"`
	OrderNumber    *int32                              `json:"orderNumber"`
	SeriesBookType *string                             `json:"seriesBookType"`
	SeriesID       *string                             `json:"seriesId"`
}

type Volumeseriesinfo struct {
	BookDisplayNumber    *string                        `json:"bookDisplayNumber"`
	Kind                 *string                        `json:"kind"`
	ShortSeriesBookTitle *string                        `json:"shortSeriesBookTitle"`
	VolumeSeries         []VolumeseriesinfoVolumeSeries `json:"volumeSeries"`
}
