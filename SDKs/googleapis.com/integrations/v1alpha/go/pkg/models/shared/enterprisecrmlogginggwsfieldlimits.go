package shared

type EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum string

const (
	EnterpriseCrmLoggingGwsFieldLimitsLogActionEnumLogActionUnspecified EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum = "LOG_ACTION_UNSPECIFIED"
	EnterpriseCrmLoggingGwsFieldLimitsLogActionEnumDontLog              EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum = "DONT_LOG"
	EnterpriseCrmLoggingGwsFieldLimitsLogActionEnumLog                  EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum = "LOG"
)

type EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum string

const (
	EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnumLogTypeUnspecified EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum = "LOG_TYPE_UNSPECIFIED"
	EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnumGws                EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum = "GWS"
	EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnumGts                EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum = "GTS"
	EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnumAll                EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum = "ALL"
)

type EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum string

const (
	EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnumShortenerTypeUnspecified EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum = "SHORTENER_TYPE_UNSPECIFIED"
	EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnumShorten                  EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum = "SHORTEN"
	EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnumHash                     EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum = "HASH"
	EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnumShortenWithHash          EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum = "SHORTEN_WITH_HASH"
	EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnumShortenEmail             EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum = "SHORTEN_EMAIL"
	EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnumShortenEmailWithHash     EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum = "SHORTEN_EMAIL_WITH_HASH"
	EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnumShortenDomain            EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum = "SHORTEN_DOMAIN"
)

type EnterpriseCrmLoggingGwsFieldLimits struct {
	LogAction       *EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum     `json:"logAction,omitempty"`
	LogType         []EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum      `json:"logType,omitempty"`
	MaxArraySize    *int32                                               `json:"maxArraySize,omitempty"`
	MaxStringLength *int32                                               `json:"maxStringLength,omitempty"`
	ShortenerType   *EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum `json:"shortenerType,omitempty"`
}
