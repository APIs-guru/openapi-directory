import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum {
    LogActionUnspecified = "LOG_ACTION_UNSPECIFIED",
    DontLog = "DONT_LOG",
    Log = "LOG"
}

export enum EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum {
    LogTypeUnspecified = "LOG_TYPE_UNSPECIFIED",
    Gws = "GWS",
    Gts = "GTS",
    All = "ALL"
}

export enum EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum {
    ShortenerTypeUnspecified = "SHORTENER_TYPE_UNSPECIFIED",
    Shorten = "SHORTEN",
    Hash = "HASH",
    ShortenWithHash = "SHORTEN_WITH_HASH",
    ShortenEmail = "SHORTEN_EMAIL",
    ShortenEmailWithHash = "SHORTEN_EMAIL_WITH_HASH",
    ShortenDomain = "SHORTEN_DOMAIN"
}


// EnterpriseCrmLoggingGwsFieldLimits
/** 
 * Describes string and array limits when writing to logs. When a limit is exceeded the *shortener_type* describes how to shorten the field. next_id: 6
**/
export class EnterpriseCrmLoggingGwsFieldLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logAction" })
  logAction?: EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum;

  @SpeakeasyMetadata({ data: "json, name=logType" })
  logType?: EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=maxArraySize" })
  maxArraySize?: number;

  @SpeakeasyMetadata({ data: "json, name=maxStringLength" })
  maxStringLength?: number;

  @SpeakeasyMetadata({ data: "json, name=shortenerType" })
  shortenerType?: EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum;
}
