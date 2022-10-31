package shared




type HlRrequestGetHlrEnum string

const (
    HlRrequestGetHlrEnumOne HlRrequestGetHlrEnum = "1"
)


type HlRrequest struct {
    GetHlr HlRrequestGetHlrEnum `json:"getHLR"`
    Keyid string `json:"keyid"`
    Num []string `json:"num"`
    
}

