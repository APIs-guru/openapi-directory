import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionValue } from "./dimensionvalue";
import { DimensionValue } from "./dimensionvalue";

export enum EventTagSiteFilterTypeEnum {
    Allowlist = "ALLOWLIST"
,    Blocklist = "BLOCKLIST"
}

export enum EventTagStatusEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}

export enum EventTagTypeEnum {
    ImpressionImageEventTag = "IMPRESSION_IMAGE_EVENT_TAG"
,    ImpressionJavascriptEventTag = "IMPRESSION_JAVASCRIPT_EVENT_TAG"
,    ClickThroughEventTag = "CLICK_THROUGH_EVENT_TAG"
}


// EventTag
/** 
 * Contains properties of an event tag.
**/
export class EventTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "json, name=campaignIdDimensionValue" })
  campaignIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=enabledByDefault" })
  enabledByDefault?: boolean;

  @Metadata({ data: "json, name=excludeFromAdxRequests" })
  excludeFromAdxRequests?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=siteFilterType" })
  siteFilterType?: EventTagSiteFilterTypeEnum;

  @Metadata({ data: "json, name=siteIds" })
  siteIds?: string[];

  @Metadata({ data: "json, name=sslCompliant" })
  sslCompliant?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: EventTagStatusEnum;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=type" })
  type?: EventTagTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=urlEscapeLevels" })
  urlEscapeLevels?: number;
}
