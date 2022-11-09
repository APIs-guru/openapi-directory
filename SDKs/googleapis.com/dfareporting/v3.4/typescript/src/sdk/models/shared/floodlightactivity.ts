import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionValue } from "./dimensionvalue";
import { FloodlightActivityDynamicTag } from "./floodlightactivitydynamictag";
import { DimensionValue } from "./dimensionvalue";
import { DimensionValue } from "./dimensionvalue";
import { FloodlightActivityPublisherDynamicTag } from "./floodlightactivitypublisherdynamictag";

export enum FloodlightActivityCacheBustingTypeEnum {
    Javascript = "JAVASCRIPT"
,    ActiveServerPage = "ACTIVE_SERVER_PAGE"
,    Jsp = "JSP"
,    Php = "PHP"
,    ColdFusion = "COLD_FUSION"
}

export enum FloodlightActivityCountingMethodEnum {
    StandardCounting = "STANDARD_COUNTING"
,    UniqueCounting = "UNIQUE_COUNTING"
,    SessionCounting = "SESSION_COUNTING"
,    TransactionsCounting = "TRANSACTIONS_COUNTING"
,    ItemsSoldCounting = "ITEMS_SOLD_COUNTING"
}

export enum FloodlightActivityFloodlightActivityGroupTypeEnum {
    Counter = "COUNTER"
,    Sale = "SALE"
}

export enum FloodlightActivityFloodlightTagTypeEnum {
    Iframe = "IFRAME"
,    Image = "IMAGE"
,    GlobalSiteTag = "GLOBAL_SITE_TAG"
}

export enum FloodlightActivityStatusEnum {
    Active = "ACTIVE"
,    ArchivedAndDisabled = "ARCHIVED_AND_DISABLED"
,    Archived = "ARCHIVED"
,    DisabledPolicy = "DISABLED_POLICY"
}

export enum FloodlightActivityTagFormatEnum {
    Html = "HTML"
,    Xhtml = "XHTML"
}

export enum FloodlightActivityUserDefinedVariableTypesEnum {
    U1 = "U1"
,    U2 = "U2"
,    U3 = "U3"
,    U4 = "U4"
,    U5 = "U5"
,    U6 = "U6"
,    U7 = "U7"
,    U8 = "U8"
,    U9 = "U9"
,    U10 = "U10"
,    U11 = "U11"
,    U12 = "U12"
,    U13 = "U13"
,    U14 = "U14"
,    U15 = "U15"
,    U16 = "U16"
,    U17 = "U17"
,    U18 = "U18"
,    U19 = "U19"
,    U20 = "U20"
,    U21 = "U21"
,    U22 = "U22"
,    U23 = "U23"
,    U24 = "U24"
,    U25 = "U25"
,    U26 = "U26"
,    U27 = "U27"
,    U28 = "U28"
,    U29 = "U29"
,    U30 = "U30"
,    U31 = "U31"
,    U32 = "U32"
,    U33 = "U33"
,    U34 = "U34"
,    U35 = "U35"
,    U36 = "U36"
,    U37 = "U37"
,    U38 = "U38"
,    U39 = "U39"
,    U40 = "U40"
,    U41 = "U41"
,    U42 = "U42"
,    U43 = "U43"
,    U44 = "U44"
,    U45 = "U45"
,    U46 = "U46"
,    U47 = "U47"
,    U48 = "U48"
,    U49 = "U49"
,    U50 = "U50"
,    U51 = "U51"
,    U52 = "U52"
,    U53 = "U53"
,    U54 = "U54"
,    U55 = "U55"
,    U56 = "U56"
,    U57 = "U57"
,    U58 = "U58"
,    U59 = "U59"
,    U60 = "U60"
,    U61 = "U61"
,    U62 = "U62"
,    U63 = "U63"
,    U64 = "U64"
,    U65 = "U65"
,    U66 = "U66"
,    U67 = "U67"
,    U68 = "U68"
,    U69 = "U69"
,    U70 = "U70"
,    U71 = "U71"
,    U72 = "U72"
,    U73 = "U73"
,    U74 = "U74"
,    U75 = "U75"
,    U76 = "U76"
,    U77 = "U77"
,    U78 = "U78"
,    U79 = "U79"
,    U80 = "U80"
,    U81 = "U81"
,    U82 = "U82"
,    U83 = "U83"
,    U84 = "U84"
,    U85 = "U85"
,    U86 = "U86"
,    U87 = "U87"
,    U88 = "U88"
,    U89 = "U89"
,    U90 = "U90"
,    U91 = "U91"
,    U92 = "U92"
,    U93 = "U93"
,    U94 = "U94"
,    U95 = "U95"
,    U96 = "U96"
,    U97 = "U97"
,    U98 = "U98"
,    U99 = "U99"
,    U100 = "U100"
}


// FloodlightActivity
/** 
 * Contains properties of a Floodlight activity.
**/
export class FloodlightActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=attributionEnabled" })
  attributionEnabled?: boolean;

  @Metadata({ data: "json, name=cacheBustingType" })
  cacheBustingType?: FloodlightActivityCacheBustingTypeEnum;

  @Metadata({ data: "json, name=countingMethod" })
  countingMethod?: FloodlightActivityCountingMethodEnum;

  @Metadata({ data: "json, name=defaultTags", elemType: shared.FloodlightActivityDynamicTag })
  defaultTags?: FloodlightActivityDynamicTag[];

  @Metadata({ data: "json, name=expectedUrl" })
  expectedUrl?: string;

  @Metadata({ data: "json, name=floodlightActivityGroupId" })
  floodlightActivityGroupId?: string;

  @Metadata({ data: "json, name=floodlightActivityGroupName" })
  floodlightActivityGroupName?: string;

  @Metadata({ data: "json, name=floodlightActivityGroupTagString" })
  floodlightActivityGroupTagString?: string;

  @Metadata({ data: "json, name=floodlightActivityGroupType" })
  floodlightActivityGroupType?: FloodlightActivityFloodlightActivityGroupTypeEnum;

  @Metadata({ data: "json, name=floodlightConfigurationId" })
  floodlightConfigurationId?: string;

  @Metadata({ data: "json, name=floodlightConfigurationIdDimensionValue" })
  floodlightConfigurationIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=floodlightTagType" })
  floodlightTagType?: FloodlightActivityFloodlightTagTypeEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=publisherTags", elemType: shared.FloodlightActivityPublisherDynamicTag })
  publisherTags?: FloodlightActivityPublisherDynamicTag[];

  @Metadata({ data: "json, name=secure" })
  secure?: boolean;

  @Metadata({ data: "json, name=sslCompliant" })
  sslCompliant?: boolean;

  @Metadata({ data: "json, name=sslRequired" })
  sslRequired?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: FloodlightActivityStatusEnum;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=tagFormat" })
  tagFormat?: FloodlightActivityTagFormatEnum;

  @Metadata({ data: "json, name=tagString" })
  tagString?: string;

  @Metadata({ data: "json, name=userDefinedVariableTypes" })
  userDefinedVariableTypes?: FloodlightActivityUserDefinedVariableTypesEnum[];
}
