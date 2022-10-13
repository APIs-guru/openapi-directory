package shared

type SmsRequestGmtZoneEnum string

const (
	SmsRequestGmtZoneEnumPacificMidway               SmsRequestGmtZoneEnum = "Pacific/Midway"
	SmsRequestGmtZoneEnumAmericaAdak                 SmsRequestGmtZoneEnum = "America/Adak"
	SmsRequestGmtZoneEnumEtcGmtPlus10                SmsRequestGmtZoneEnum = "Etc/GMT+10"
	SmsRequestGmtZoneEnumPacificMarquesas            SmsRequestGmtZoneEnum = "Pacific/Marquesas"
	SmsRequestGmtZoneEnumPacificGambier              SmsRequestGmtZoneEnum = "Pacific/Gambier"
	SmsRequestGmtZoneEnumAmericaAnchorage            SmsRequestGmtZoneEnum = "America/Anchorage"
	SmsRequestGmtZoneEnumAmericaEnsenada             SmsRequestGmtZoneEnum = "America/Ensenada"
	SmsRequestGmtZoneEnumEtcGmtPlus8                 SmsRequestGmtZoneEnum = "Etc/GMT+8"
	SmsRequestGmtZoneEnumAmericaLosAngeles           SmsRequestGmtZoneEnum = "America/Los_Angeles"
	SmsRequestGmtZoneEnumAmericaDenver               SmsRequestGmtZoneEnum = "America/Denver"
	SmsRequestGmtZoneEnumAmericaChihuahua            SmsRequestGmtZoneEnum = "America/Chihuahua"
	SmsRequestGmtZoneEnumAmericaDawsonCreek          SmsRequestGmtZoneEnum = "America/Dawson_Creek"
	SmsRequestGmtZoneEnumAmericaBelize               SmsRequestGmtZoneEnum = "America/Belize"
	SmsRequestGmtZoneEnumAmericaCancun               SmsRequestGmtZoneEnum = "America/Cancun"
	SmsRequestGmtZoneEnumChileEasterIsland           SmsRequestGmtZoneEnum = "Chile/EasterIsland"
	SmsRequestGmtZoneEnumAmericaChicago              SmsRequestGmtZoneEnum = "America/Chicago"
	SmsRequestGmtZoneEnumAmericaNewYork              SmsRequestGmtZoneEnum = "America/New_York"
	SmsRequestGmtZoneEnumAmericaHavana               SmsRequestGmtZoneEnum = "America/Havana"
	SmsRequestGmtZoneEnumAmericaBogota               SmsRequestGmtZoneEnum = "America/Bogota"
	SmsRequestGmtZoneEnumAmericaCaracas              SmsRequestGmtZoneEnum = "America/Caracas"
	SmsRequestGmtZoneEnumAmericaSantiago             SmsRequestGmtZoneEnum = "America/Santiago"
	SmsRequestGmtZoneEnumAmericaLaPaz                SmsRequestGmtZoneEnum = "America/La_Paz"
	SmsRequestGmtZoneEnumAtlanticStanley             SmsRequestGmtZoneEnum = "Atlantic/Stanley"
	SmsRequestGmtZoneEnumAmericaCampoGrande          SmsRequestGmtZoneEnum = "America/Campo_Grande"
	SmsRequestGmtZoneEnumAmericaGooseBay             SmsRequestGmtZoneEnum = "America/Goose_Bay"
	SmsRequestGmtZoneEnumAmericaGlaceBay             SmsRequestGmtZoneEnum = "America/Glace_Bay"
	SmsRequestGmtZoneEnumAmericaStJohns              SmsRequestGmtZoneEnum = "America/St_Johns"
	SmsRequestGmtZoneEnumAmericaAraguaina            SmsRequestGmtZoneEnum = "America/Araguaina"
	SmsRequestGmtZoneEnumAmericaMontevideo           SmsRequestGmtZoneEnum = "America/Montevideo"
	SmsRequestGmtZoneEnumAmericaMiquelon             SmsRequestGmtZoneEnum = "America/Miquelon"
	SmsRequestGmtZoneEnumAmericaGodthab              SmsRequestGmtZoneEnum = "America/Godthab"
	SmsRequestGmtZoneEnumAmericaArgentinaBuenosAires SmsRequestGmtZoneEnum = "America/Argentina/Buenos_Aires"
	SmsRequestGmtZoneEnumAmericaSaoPaulo             SmsRequestGmtZoneEnum = "America/Sao_Paulo"
	SmsRequestGmtZoneEnumAmericaNoronha              SmsRequestGmtZoneEnum = "America/Noronha"
	SmsRequestGmtZoneEnumAtlanticCapeVerde           SmsRequestGmtZoneEnum = "Atlantic/Cape_Verde"
	SmsRequestGmtZoneEnumAtlanticAzores              SmsRequestGmtZoneEnum = "Atlantic/Azores"
	SmsRequestGmtZoneEnumEuropeBelfast               SmsRequestGmtZoneEnum = "Europe/Belfast"
	SmsRequestGmtZoneEnumEuropeDublin                SmsRequestGmtZoneEnum = "Europe/Dublin"
	SmsRequestGmtZoneEnumEuropeLisbon                SmsRequestGmtZoneEnum = "Europe/Lisbon"
	SmsRequestGmtZoneEnumEuropeLondon                SmsRequestGmtZoneEnum = "Europe/London"
	SmsRequestGmtZoneEnumAfricaAbidjan               SmsRequestGmtZoneEnum = "Africa/Abidjan"
	SmsRequestGmtZoneEnumEuropeAmsterdam             SmsRequestGmtZoneEnum = "Europe/Amsterdam"
	SmsRequestGmtZoneEnumEuropeBelgrade              SmsRequestGmtZoneEnum = "Europe/Belgrade"
	SmsRequestGmtZoneEnumEuropeBrussels              SmsRequestGmtZoneEnum = "Europe/Brussels"
	SmsRequestGmtZoneEnumAfricaAlgiers               SmsRequestGmtZoneEnum = "Africa/Algiers"
	SmsRequestGmtZoneEnumAfricaWindhoek              SmsRequestGmtZoneEnum = "Africa/Windhoek"
	SmsRequestGmtZoneEnumAsiaBeirut                  SmsRequestGmtZoneEnum = "Asia/Beirut"
	SmsRequestGmtZoneEnumAfricaCairo                 SmsRequestGmtZoneEnum = "Africa/Cairo"
	SmsRequestGmtZoneEnumAsiaGaza                    SmsRequestGmtZoneEnum = "Asia/Gaza"
	SmsRequestGmtZoneEnumAfricaBlantyre              SmsRequestGmtZoneEnum = "Africa/Blantyre"
	SmsRequestGmtZoneEnumAsiaJerusalem               SmsRequestGmtZoneEnum = "Asia/Jerusalem"
	SmsRequestGmtZoneEnumEuropeMinsk                 SmsRequestGmtZoneEnum = "Europe/Minsk"
	SmsRequestGmtZoneEnumAsiaDamascus                SmsRequestGmtZoneEnum = "Asia/Damascus"
	SmsRequestGmtZoneEnumEuropeMoscow                SmsRequestGmtZoneEnum = "Europe/Moscow"
	SmsRequestGmtZoneEnumAfricaAddisAbaba            SmsRequestGmtZoneEnum = "Africa/Addis_Ababa"
	SmsRequestGmtZoneEnumAsiaTehran                  SmsRequestGmtZoneEnum = "Asia/Tehran"
	SmsRequestGmtZoneEnumAsiaDubai                   SmsRequestGmtZoneEnum = "Asia/Dubai"
	SmsRequestGmtZoneEnumAsiaYerevan                 SmsRequestGmtZoneEnum = "Asia/Yerevan"
	SmsRequestGmtZoneEnumAsiaKabul                   SmsRequestGmtZoneEnum = "Asia/Kabul"
	SmsRequestGmtZoneEnumAsiaYekaterinburg           SmsRequestGmtZoneEnum = "Asia/Yekaterinburg"
	SmsRequestGmtZoneEnumAsiaTashkent                SmsRequestGmtZoneEnum = "Asia/Tashkent"
	SmsRequestGmtZoneEnumAsiaKolkata                 SmsRequestGmtZoneEnum = "Asia/Kolkata"
	SmsRequestGmtZoneEnumAsiaKatmandu                SmsRequestGmtZoneEnum = "Asia/Katmandu"
	SmsRequestGmtZoneEnumAsiaDhaka                   SmsRequestGmtZoneEnum = "Asia/Dhaka"
	SmsRequestGmtZoneEnumAsiaNovosibirsk             SmsRequestGmtZoneEnum = "Asia/Novosibirsk"
	SmsRequestGmtZoneEnumAsiaRangoon                 SmsRequestGmtZoneEnum = "Asia/Rangoon"
	SmsRequestGmtZoneEnumAsiaBangkok                 SmsRequestGmtZoneEnum = "Asia/Bangkok"
	SmsRequestGmtZoneEnumAsiaKrasnoyarsk             SmsRequestGmtZoneEnum = "Asia/Krasnoyarsk"
	SmsRequestGmtZoneEnumAsiaHongKong                SmsRequestGmtZoneEnum = "Asia/Hong_Kong"
	SmsRequestGmtZoneEnumAsiaIrkutsk                 SmsRequestGmtZoneEnum = "Asia/Irkutsk"
	SmsRequestGmtZoneEnumAustraliaPerth              SmsRequestGmtZoneEnum = "Australia/Perth"
	SmsRequestGmtZoneEnumAustraliaEucla              SmsRequestGmtZoneEnum = "Australia/Eucla"
	SmsRequestGmtZoneEnumAsiaTokyo                   SmsRequestGmtZoneEnum = "Asia/Tokyo"
	SmsRequestGmtZoneEnumAsiaSeoul                   SmsRequestGmtZoneEnum = "Asia/Seoul"
	SmsRequestGmtZoneEnumAsiaYakutsk                 SmsRequestGmtZoneEnum = "Asia/Yakutsk"
	SmsRequestGmtZoneEnumAustraliaAdelaide           SmsRequestGmtZoneEnum = "Australia/Adelaide"
	SmsRequestGmtZoneEnumAustraliaDarwin             SmsRequestGmtZoneEnum = "Australia/Darwin"
	SmsRequestGmtZoneEnumAustraliaBrisbane           SmsRequestGmtZoneEnum = "Australia/Brisbane"
	SmsRequestGmtZoneEnumAustraliaHobart             SmsRequestGmtZoneEnum = "Australia/Hobart"
	SmsRequestGmtZoneEnumAsiaVladivostok             SmsRequestGmtZoneEnum = "Asia/Vladivostok"
	SmsRequestGmtZoneEnumAustraliaLordHowe           SmsRequestGmtZoneEnum = "Australia/Lord_Howe"
	SmsRequestGmtZoneEnumEtcGmt11                    SmsRequestGmtZoneEnum = "Etc/GMT-11"
	SmsRequestGmtZoneEnumAsiaMagadan                 SmsRequestGmtZoneEnum = "Asia/Magadan"
	SmsRequestGmtZoneEnumPacificNorfolk              SmsRequestGmtZoneEnum = "Pacific/Norfolk"
	SmsRequestGmtZoneEnumAsiaAnadyr                  SmsRequestGmtZoneEnum = "Asia/Anadyr"
	SmsRequestGmtZoneEnumPacificAuckland             SmsRequestGmtZoneEnum = "Pacific/Auckland"
	SmsRequestGmtZoneEnumEtcGmt12                    SmsRequestGmtZoneEnum = "Etc/GMT-12"
	SmsRequestGmtZoneEnumPacificChatham              SmsRequestGmtZoneEnum = "Pacific/Chatham"
	SmsRequestGmtZoneEnumPacificTongatapu            SmsRequestGmtZoneEnum = "Pacific/Tongatapu"
	SmsRequestGmtZoneEnumPacificKiritimati           SmsRequestGmtZoneEnum = "Pacific/Kiritimati"
)

type SmsRequestNumAzurEnum string

const (
	SmsRequestNumAzurEnumOne SmsRequestNumAzurEnum = "1"
)

type SmsRequest struct {
	DateEnvoi    *string                `json:"date_envoi"`
	Emetteur     *string                `json:"emetteur"`
	GmtZone      *SmsRequestGmtZoneEnum `json:"gmt_zone"`
	Keyid        string                 `json:"keyid"`
	Nostop       *string                `json:"nostop"`
	Num          []string               `json:"num"`
	NumAzur      *SmsRequestNumAzurEnum `json:"numAzur"`
	RepertoireID *string                `json:"repertoireId"`
	Sms          []string               `json:"sms"`
	Smslong      *string                `json:"smslong"`
	Tracker      []string               `json:"tracker"`
	Ucs2         *string                `json:"ucs2"`
}
