package shared

type Deinterlace struct {
	Bwdif *BwdifConfig `json:"bwdif"`
	Yadif *YadifConfig `json:"yadif"`
}
