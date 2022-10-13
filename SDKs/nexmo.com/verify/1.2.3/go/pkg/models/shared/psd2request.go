package shared

type Psd2RequestLgEnum string

const (
	Psd2RequestLgEnumEnGb Psd2RequestLgEnum = "en-gb"
	Psd2RequestLgEnumBgBg Psd2RequestLgEnum = "bg-bg"
	Psd2RequestLgEnumCsCz Psd2RequestLgEnum = "cs-cz"
	Psd2RequestLgEnumDaDk Psd2RequestLgEnum = "da-dk"
	Psd2RequestLgEnumDeDe Psd2RequestLgEnum = "de-de"
	Psd2RequestLgEnumEeEt Psd2RequestLgEnum = "ee-et"
	Psd2RequestLgEnumElGr Psd2RequestLgEnum = "el-gr"
	Psd2RequestLgEnumEsEs Psd2RequestLgEnum = "es-es"
	Psd2RequestLgEnumFiFi Psd2RequestLgEnum = "fi-fi"
	Psd2RequestLgEnumFrFr Psd2RequestLgEnum = "fr-fr"
	Psd2RequestLgEnumGaIe Psd2RequestLgEnum = "ga-ie"
	Psd2RequestLgEnumHuHu Psd2RequestLgEnum = "hu-hu"
	Psd2RequestLgEnumItIt Psd2RequestLgEnum = "it-it"
	Psd2RequestLgEnumLvLv Psd2RequestLgEnum = "lv-lv"
	Psd2RequestLgEnumLtLt Psd2RequestLgEnum = "lt-lt"
	Psd2RequestLgEnumMtMt Psd2RequestLgEnum = "mt-mt"
	Psd2RequestLgEnumNlNl Psd2RequestLgEnum = "nl-nl"
	Psd2RequestLgEnumPlPl Psd2RequestLgEnum = "pl-pl"
	Psd2RequestLgEnumSkSk Psd2RequestLgEnum = "sk-sk"
	Psd2RequestLgEnumSlSi Psd2RequestLgEnum = "sl-si"
	Psd2RequestLgEnumSvSe Psd2RequestLgEnum = "sv-se"
)

type Psd2Request struct {
	Amount        float32            `form:"name=amount"`
	APIKey        string             `form:"name=api_key"`
	APISecret     string             `form:"name=api_secret"`
	CodeLength    *int64             `form:"name=code_length"`
	Country       *string            `form:"name=country"`
	Lg            *Psd2RequestLgEnum `form:"name=lg"`
	NextEventWait *int64             `form:"name=next_event_wait"`
	Number        string             `form:"name=number"`
	Payee         string             `form:"name=payee"`
	PinExpiry     *int64             `form:"name=pin_expiry"`
	WorkflowID    *int64             `form:"name=workflow_id"`
}
