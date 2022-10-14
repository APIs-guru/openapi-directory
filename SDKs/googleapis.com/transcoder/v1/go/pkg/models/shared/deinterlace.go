package shared

type Deinterlace struct {
	Bwdif *BwdifConfig `json:"bwdif,omitempty"`
	Yadif *YadifConfig `json:"yadif,omitempty"`
}
