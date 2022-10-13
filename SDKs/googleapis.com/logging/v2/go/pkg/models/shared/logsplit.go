package shared

type LogSplit struct {
	Index       *int32  `json:"index"`
	TotalSplits *int32  `json:"totalSplits"`
	UID         *string `json:"uid"`
}
