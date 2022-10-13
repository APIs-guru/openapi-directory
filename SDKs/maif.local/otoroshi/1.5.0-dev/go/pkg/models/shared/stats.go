package shared

type Stats struct {
	Calls                     int64   `json:"calls"`
	ConcurrentHandledRequests int64   `json:"concurrentHandledRequests"`
	DataIn                    int64   `json:"dataIn"`
	DataInRate                float64 `json:"dataInRate"`
	DataOut                   int64   `json:"dataOut"`
	DataOutRate               float64 `json:"dataOutRate"`
	Duration                  float64 `json:"duration"`
	Overhead                  float64 `json:"overhead"`
	Rate                      float64 `json:"rate"`
}
