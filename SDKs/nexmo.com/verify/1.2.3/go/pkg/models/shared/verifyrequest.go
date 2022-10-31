package shared

type VerifyRequestLgEnum string

const (
	VerifyRequestLgEnumArXa  VerifyRequestLgEnum = "ar-xa"
	VerifyRequestLgEnumCsCz  VerifyRequestLgEnum = "cs-cz"
	VerifyRequestLgEnumCyCy  VerifyRequestLgEnum = "cy-cy"
	VerifyRequestLgEnumCyGb  VerifyRequestLgEnum = "cy-gb"
	VerifyRequestLgEnumDaDk  VerifyRequestLgEnum = "da-dk"
	VerifyRequestLgEnumDeDe  VerifyRequestLgEnum = "de-de"
	VerifyRequestLgEnumElGr  VerifyRequestLgEnum = "el-gr"
	VerifyRequestLgEnumEnAu  VerifyRequestLgEnum = "en-au"
	VerifyRequestLgEnumEnGb  VerifyRequestLgEnum = "en-gb"
	VerifyRequestLgEnumEnIn  VerifyRequestLgEnum = "en-in"
	VerifyRequestLgEnumEnUs  VerifyRequestLgEnum = "en-us"
	VerifyRequestLgEnumEsEs  VerifyRequestLgEnum = "es-es"
	VerifyRequestLgEnumEsMx  VerifyRequestLgEnum = "es-mx"
	VerifyRequestLgEnumEsUs  VerifyRequestLgEnum = "es-us"
	VerifyRequestLgEnumFiFi  VerifyRequestLgEnum = "fi-fi"
	VerifyRequestLgEnumFilPh VerifyRequestLgEnum = "fil-ph"
	VerifyRequestLgEnumFrCa  VerifyRequestLgEnum = "fr-ca"
	VerifyRequestLgEnumFrFr  VerifyRequestLgEnum = "fr-fr"
	VerifyRequestLgEnumHiIn  VerifyRequestLgEnum = "hi-in"
	VerifyRequestLgEnumHuHu  VerifyRequestLgEnum = "hu-hu"
	VerifyRequestLgEnumIdid  VerifyRequestLgEnum = "id-id"
	VerifyRequestLgEnumIsIs  VerifyRequestLgEnum = "is-is"
	VerifyRequestLgEnumItIt  VerifyRequestLgEnum = "it-it"
	VerifyRequestLgEnumJaJp  VerifyRequestLgEnum = "ja-jp"
	VerifyRequestLgEnumKoKr  VerifyRequestLgEnum = "ko-kr"
	VerifyRequestLgEnumNbNo  VerifyRequestLgEnum = "nb-no"
	VerifyRequestLgEnumNlNl  VerifyRequestLgEnum = "nl-nl"
	VerifyRequestLgEnumPlPl  VerifyRequestLgEnum = "pl-pl"
	VerifyRequestLgEnumPtBr  VerifyRequestLgEnum = "pt-br"
	VerifyRequestLgEnumPtPt  VerifyRequestLgEnum = "pt-pt"
	VerifyRequestLgEnumRoRo  VerifyRequestLgEnum = "ro-ro"
	VerifyRequestLgEnumRuRu  VerifyRequestLgEnum = "ru-ru"
	VerifyRequestLgEnumSvSe  VerifyRequestLgEnum = "sv-se"
	VerifyRequestLgEnumThTh  VerifyRequestLgEnum = "th-th"
	VerifyRequestLgEnumTrTr  VerifyRequestLgEnum = "tr-tr"
	VerifyRequestLgEnumViVn  VerifyRequestLgEnum = "vi-vn"
	VerifyRequestLgEnumYueCn VerifyRequestLgEnum = "yue-cn"
	VerifyRequestLgEnumZhCn  VerifyRequestLgEnum = "zh-cn"
	VerifyRequestLgEnumZhTw  VerifyRequestLgEnum = "zh-tw"
)

type VerifyRequest struct {
	APIKey        string               `form:"name=api_key"`
	APISecret     string               `form:"name=api_secret"`
	Brand         string               `form:"name=brand"`
	CodeLength    *int64               `form:"name=code_length"`
	Country       *string              `form:"name=country"`
	Lg            *VerifyRequestLgEnum `form:"name=lg"`
	NextEventWait *int64               `form:"name=next_event_wait"`
	Number        string               `form:"name=number"`
	PinExpiry     *int64               `form:"name=pin_expiry"`
	SenderID      *string              `form:"name=sender_id"`
	WorkflowID    *int64               `form:"name=workflow_id"`
}
