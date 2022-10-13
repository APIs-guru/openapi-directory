package shared

type Sentence struct {
	Sentiment *Sentiment `json:"sentiment"`
	Text      *TextSpan  `json:"text"`
}
