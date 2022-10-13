package shared

type SeqMapTaskOutputInfo struct {
	Sink *Sink   `json:"sink"`
	Tag  *string `json:"tag"`
}
