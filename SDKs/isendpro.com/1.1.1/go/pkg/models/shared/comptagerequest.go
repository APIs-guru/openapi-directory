package shared

type ComptageRequestComptageEnum string

const (
	ComptageRequestComptageEnumOne ComptageRequestComptageEnum = "1"
)

type ComptageRequestGmtZoneEnum string

const (
	ComptageRequestGmtZoneEnumPacificMidway               ComptageRequestGmtZoneEnum = "Pacific/Midway"
	ComptageRequestGmtZoneEnumAmericaAdak                 ComptageRequestGmtZoneEnum = "America/Adak"
	ComptageRequestGmtZoneEnumEtcGmtPlus10                ComptageRequestGmtZoneEnum = "Etc/GMT+10"
	ComptageRequestGmtZoneEnumPacificMarquesas            ComptageRequestGmtZoneEnum = "Pacific/Marquesas"
	ComptageRequestGmtZoneEnumPacificGambier              ComptageRequestGmtZoneEnum = "Pacific/Gambier"
	ComptageRequestGmtZoneEnumAmericaAnchorage            ComptageRequestGmtZoneEnum = "America/Anchorage"
	ComptageRequestGmtZoneEnumAmericaEnsenada             ComptageRequestGmtZoneEnum = "America/Ensenada"
	ComptageRequestGmtZoneEnumEtcGmtPlus8                 ComptageRequestGmtZoneEnum = "Etc/GMT+8"
	ComptageRequestGmtZoneEnumAmericaLosAngeles           ComptageRequestGmtZoneEnum = "America/Los_Angeles"
	ComptageRequestGmtZoneEnumAmericaDenver               ComptageRequestGmtZoneEnum = "America/Denver"
	ComptageRequestGmtZoneEnumAmericaChihuahua            ComptageRequestGmtZoneEnum = "America/Chihuahua"
	ComptageRequestGmtZoneEnumAmericaDawsonCreek          ComptageRequestGmtZoneEnum = "America/Dawson_Creek"
	ComptageRequestGmtZoneEnumAmericaBelize               ComptageRequestGmtZoneEnum = "America/Belize"
	ComptageRequestGmtZoneEnumAmericaCancun               ComptageRequestGmtZoneEnum = "America/Cancun"
	ComptageRequestGmtZoneEnumChileEasterIsland           ComptageRequestGmtZoneEnum = "Chile/EasterIsland"
	ComptageRequestGmtZoneEnumAmericaChicago              ComptageRequestGmtZoneEnum = "America/Chicago"
	ComptageRequestGmtZoneEnumAmericaNewYork              ComptageRequestGmtZoneEnum = "America/New_York"
	ComptageRequestGmtZoneEnumAmericaHavana               ComptageRequestGmtZoneEnum = "America/Havana"
	ComptageRequestGmtZoneEnumAmericaBogota               ComptageRequestGmtZoneEnum = "America/Bogota"
	ComptageRequestGmtZoneEnumAmericaCaracas              ComptageRequestGmtZoneEnum = "America/Caracas"
	ComptageRequestGmtZoneEnumAmericaSantiago             ComptageRequestGmtZoneEnum = "America/Santiago"
	ComptageRequestGmtZoneEnumAmericaLaPaz                ComptageRequestGmtZoneEnum = "America/La_Paz"
	ComptageRequestGmtZoneEnumAtlanticStanley             ComptageRequestGmtZoneEnum = "Atlantic/Stanley"
	ComptageRequestGmtZoneEnumAmericaCampoGrande          ComptageRequestGmtZoneEnum = "America/Campo_Grande"
	ComptageRequestGmtZoneEnumAmericaGooseBay             ComptageRequestGmtZoneEnum = "America/Goose_Bay"
	ComptageRequestGmtZoneEnumAmericaGlaceBay             ComptageRequestGmtZoneEnum = "America/Glace_Bay"
	ComptageRequestGmtZoneEnumAmericaStJohns              ComptageRequestGmtZoneEnum = "America/St_Johns"
	ComptageRequestGmtZoneEnumAmericaAraguaina            ComptageRequestGmtZoneEnum = "America/Araguaina"
	ComptageRequestGmtZoneEnumAmericaMontevideo           ComptageRequestGmtZoneEnum = "America/Montevideo"
	ComptageRequestGmtZoneEnumAmericaMiquelon             ComptageRequestGmtZoneEnum = "America/Miquelon"
	ComptageRequestGmtZoneEnumAmericaGodthab              ComptageRequestGmtZoneEnum = "America/Godthab"
	ComptageRequestGmtZoneEnumAmericaArgentinaBuenosAires ComptageRequestGmtZoneEnum = "America/Argentina/Buenos_Aires"
	ComptageRequestGmtZoneEnumAmericaSaoPaulo             ComptageRequestGmtZoneEnum = "America/Sao_Paulo"
	ComptageRequestGmtZoneEnumAmericaNoronha              ComptageRequestGmtZoneEnum = "America/Noronha"
	ComptageRequestGmtZoneEnumAtlanticCapeVerde           ComptageRequestGmtZoneEnum = "Atlantic/Cape_Verde"
	ComptageRequestGmtZoneEnumAtlanticAzores              ComptageRequestGmtZoneEnum = "Atlantic/Azores"
	ComptageRequestGmtZoneEnumEuropeBelfast               ComptageRequestGmtZoneEnum = "Europe/Belfast"
	ComptageRequestGmtZoneEnumEuropeDublin                ComptageRequestGmtZoneEnum = "Europe/Dublin"
	ComptageRequestGmtZoneEnumEuropeLisbon                ComptageRequestGmtZoneEnum = "Europe/Lisbon"
	ComptageRequestGmtZoneEnumEuropeLondon                ComptageRequestGmtZoneEnum = "Europe/London"
	ComptageRequestGmtZoneEnumAfricaAbidjan               ComptageRequestGmtZoneEnum = "Africa/Abidjan"
	ComptageRequestGmtZoneEnumEuropeAmsterdam             ComptageRequestGmtZoneEnum = "Europe/Amsterdam"
	ComptageRequestGmtZoneEnumEuropeBelgrade              ComptageRequestGmtZoneEnum = "Europe/Belgrade"
	ComptageRequestGmtZoneEnumEuropeBrussels              ComptageRequestGmtZoneEnum = "Europe/Brussels"
	ComptageRequestGmtZoneEnumAfricaAlgiers               ComptageRequestGmtZoneEnum = "Africa/Algiers"
	ComptageRequestGmtZoneEnumAfricaWindhoek              ComptageRequestGmtZoneEnum = "Africa/Windhoek"
	ComptageRequestGmtZoneEnumAsiaBeirut                  ComptageRequestGmtZoneEnum = "Asia/Beirut"
	ComptageRequestGmtZoneEnumAfricaCairo                 ComptageRequestGmtZoneEnum = "Africa/Cairo"
	ComptageRequestGmtZoneEnumAsiaGaza                    ComptageRequestGmtZoneEnum = "Asia/Gaza"
	ComptageRequestGmtZoneEnumAfricaBlantyre              ComptageRequestGmtZoneEnum = "Africa/Blantyre"
	ComptageRequestGmtZoneEnumAsiaJerusalem               ComptageRequestGmtZoneEnum = "Asia/Jerusalem"
	ComptageRequestGmtZoneEnumEuropeMinsk                 ComptageRequestGmtZoneEnum = "Europe/Minsk"
	ComptageRequestGmtZoneEnumAsiaDamascus                ComptageRequestGmtZoneEnum = "Asia/Damascus"
	ComptageRequestGmtZoneEnumEuropeMoscow                ComptageRequestGmtZoneEnum = "Europe/Moscow"
	ComptageRequestGmtZoneEnumAfricaAddisAbaba            ComptageRequestGmtZoneEnum = "Africa/Addis_Ababa"
	ComptageRequestGmtZoneEnumAsiaTehran                  ComptageRequestGmtZoneEnum = "Asia/Tehran"
	ComptageRequestGmtZoneEnumAsiaDubai                   ComptageRequestGmtZoneEnum = "Asia/Dubai"
	ComptageRequestGmtZoneEnumAsiaYerevan                 ComptageRequestGmtZoneEnum = "Asia/Yerevan"
	ComptageRequestGmtZoneEnumAsiaKabul                   ComptageRequestGmtZoneEnum = "Asia/Kabul"
	ComptageRequestGmtZoneEnumAsiaYekaterinburg           ComptageRequestGmtZoneEnum = "Asia/Yekaterinburg"
	ComptageRequestGmtZoneEnumAsiaTashkent                ComptageRequestGmtZoneEnum = "Asia/Tashkent"
	ComptageRequestGmtZoneEnumAsiaKolkata                 ComptageRequestGmtZoneEnum = "Asia/Kolkata"
	ComptageRequestGmtZoneEnumAsiaKatmandu                ComptageRequestGmtZoneEnum = "Asia/Katmandu"
	ComptageRequestGmtZoneEnumAsiaDhaka                   ComptageRequestGmtZoneEnum = "Asia/Dhaka"
	ComptageRequestGmtZoneEnumAsiaNovosibirsk             ComptageRequestGmtZoneEnum = "Asia/Novosibirsk"
	ComptageRequestGmtZoneEnumAsiaRangoon                 ComptageRequestGmtZoneEnum = "Asia/Rangoon"
	ComptageRequestGmtZoneEnumAsiaBangkok                 ComptageRequestGmtZoneEnum = "Asia/Bangkok"
	ComptageRequestGmtZoneEnumAsiaKrasnoyarsk             ComptageRequestGmtZoneEnum = "Asia/Krasnoyarsk"
	ComptageRequestGmtZoneEnumAsiaHongKong                ComptageRequestGmtZoneEnum = "Asia/Hong_Kong"
	ComptageRequestGmtZoneEnumAsiaIrkutsk                 ComptageRequestGmtZoneEnum = "Asia/Irkutsk"
	ComptageRequestGmtZoneEnumAustraliaPerth              ComptageRequestGmtZoneEnum = "Australia/Perth"
	ComptageRequestGmtZoneEnumAustraliaEucla              ComptageRequestGmtZoneEnum = "Australia/Eucla"
	ComptageRequestGmtZoneEnumAsiaTokyo                   ComptageRequestGmtZoneEnum = "Asia/Tokyo"
	ComptageRequestGmtZoneEnumAsiaSeoul                   ComptageRequestGmtZoneEnum = "Asia/Seoul"
	ComptageRequestGmtZoneEnumAsiaYakutsk                 ComptageRequestGmtZoneEnum = "Asia/Yakutsk"
	ComptageRequestGmtZoneEnumAustraliaAdelaide           ComptageRequestGmtZoneEnum = "Australia/Adelaide"
	ComptageRequestGmtZoneEnumAustraliaDarwin             ComptageRequestGmtZoneEnum = "Australia/Darwin"
	ComptageRequestGmtZoneEnumAustraliaBrisbane           ComptageRequestGmtZoneEnum = "Australia/Brisbane"
	ComptageRequestGmtZoneEnumAustraliaHobart             ComptageRequestGmtZoneEnum = "Australia/Hobart"
	ComptageRequestGmtZoneEnumAsiaVladivostok             ComptageRequestGmtZoneEnum = "Asia/Vladivostok"
	ComptageRequestGmtZoneEnumAustraliaLordHowe           ComptageRequestGmtZoneEnum = "Australia/Lord_Howe"
	ComptageRequestGmtZoneEnumEtcGmt11                    ComptageRequestGmtZoneEnum = "Etc/GMT-11"
	ComptageRequestGmtZoneEnumAsiaMagadan                 ComptageRequestGmtZoneEnum = "Asia/Magadan"
	ComptageRequestGmtZoneEnumPacificNorfolk              ComptageRequestGmtZoneEnum = "Pacific/Norfolk"
	ComptageRequestGmtZoneEnumAsiaAnadyr                  ComptageRequestGmtZoneEnum = "Asia/Anadyr"
	ComptageRequestGmtZoneEnumPacificAuckland             ComptageRequestGmtZoneEnum = "Pacific/Auckland"
	ComptageRequestGmtZoneEnumEtcGmt12                    ComptageRequestGmtZoneEnum = "Etc/GMT-12"
	ComptageRequestGmtZoneEnumPacificChatham              ComptageRequestGmtZoneEnum = "Pacific/Chatham"
	ComptageRequestGmtZoneEnumPacificTongatapu            ComptageRequestGmtZoneEnum = "Pacific/Tongatapu"
	ComptageRequestGmtZoneEnumPacificKiritimati           ComptageRequestGmtZoneEnum = "Pacific/Kiritimati"
)

type ComptageRequestNumAzurEnum string

const (
	ComptageRequestNumAzurEnumOne ComptageRequestNumAzurEnum = "1"
)

type ComptageRequestSmslongEnum string

const (
	ComptageRequestSmslongEnumNineHundredAndNinetyNine ComptageRequestSmslongEnum = "999"
)

type ComptageRequest struct {
	Comptage  ComptageRequestComptageEnum `json:"comptage"`
	DateEnvoi *string                     `json:"date_envoi,omitempty"`
	Emetteur  *string                     `json:"emetteur,omitempty"`
	GmtZone   *ComptageRequestGmtZoneEnum `json:"gmt_zone,omitempty"`
	Keyid     string                      `json:"keyid"`
	Nostop    *string                     `json:"nostop,omitempty"`
	Num       string                      `json:"num"`
	NumAzur   *ComptageRequestNumAzurEnum `json:"numAzur,omitempty"`
	Sms       string                      `json:"sms"`
	Smslong   *ComptageRequestSmslongEnum `json:"smslong,omitempty"`
	Tracker   *string                     `json:"tracker,omitempty"`
	Ucs2      *string                     `json:"ucs2,omitempty"`
}
