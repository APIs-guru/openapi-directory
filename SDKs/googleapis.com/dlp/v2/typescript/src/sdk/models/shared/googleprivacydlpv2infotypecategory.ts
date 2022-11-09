import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GooglePrivacyDlpV2InfoTypeCategoryIndustryCategoryEnum {
    IndustryUnspecified = "INDUSTRY_UNSPECIFIED"
,    Finance = "FINANCE"
,    Health = "HEALTH"
,    Telecommunications = "TELECOMMUNICATIONS"
}

export enum GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum {
    LocationUnspecified = "LOCATION_UNSPECIFIED"
,    Global = "GLOBAL"
,    Argentina = "ARGENTINA"
,    Australia = "AUSTRALIA"
,    Belgium = "BELGIUM"
,    Brazil = "BRAZIL"
,    Canada = "CANADA"
,    Chile = "CHILE"
,    China = "CHINA"
,    Colombia = "COLOMBIA"
,    Denmark = "DENMARK"
,    France = "FRANCE"
,    Finland = "FINLAND"
,    Germany = "GERMANY"
,    HongKong = "HONG_KONG"
,    India = "INDIA"
,    Indonesia = "INDONESIA"
,    Ireland = "IRELAND"
,    Israel = "ISRAEL"
,    Italy = "ITALY"
,    Japan = "JAPAN"
,    Korea = "KOREA"
,    Mexico = "MEXICO"
,    TheNetherlands = "THE_NETHERLANDS"
,    Norway = "NORWAY"
,    Paraguay = "PARAGUAY"
,    Peru = "PERU"
,    Poland = "POLAND"
,    Portugal = "PORTUGAL"
,    Singapore = "SINGAPORE"
,    SouthAfrica = "SOUTH_AFRICA"
,    Spain = "SPAIN"
,    Sweden = "SWEDEN"
,    Taiwan = "TAIWAN"
,    Thailand = "THAILAND"
,    Turkey = "TURKEY"
,    UnitedKingdom = "UNITED_KINGDOM"
,    UnitedStates = "UNITED_STATES"
,    Uruguay = "URUGUAY"
,    Venezuela = "VENEZUELA"
,    Internal = "INTERNAL"
}

export enum GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Pii = "PII"
,    Spii = "SPII"
,    Demographic = "DEMOGRAPHIC"
,    Credential = "CREDENTIAL"
,    GovernmentId = "GOVERNMENT_ID"
,    Document = "DOCUMENT"
,    ContextualInformation = "CONTEXTUAL_INFORMATION"
}


// GooglePrivacyDlpV2InfoTypeCategory
/** 
 * Classification of infoTypes to organize them according to geographic location, industry, and data type.
**/
export class GooglePrivacyDlpV2InfoTypeCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=industryCategory" })
  industryCategory?: GooglePrivacyDlpV2InfoTypeCategoryIndustryCategoryEnum;

  @Metadata({ data: "json, name=locationCategory" })
  locationCategory?: GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum;

  @Metadata({ data: "json, name=typeCategory" })
  typeCategory?: GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum;
}
