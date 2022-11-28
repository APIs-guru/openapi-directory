import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";


export enum EventTagSiteFilterTypeEnum {
    Allowlist = "ALLOWLIST",
    Blocklist = "BLOCKLIST"
}

export enum EventTagStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}

export enum EventTagTypeEnum {
    ImpressionImageEventTag = "IMPRESSION_IMAGE_EVENT_TAG",
    ImpressionJavascriptEventTag = "IMPRESSION_JAVASCRIPT_EVENT_TAG",
    ClickThroughEventTag = "CLICK_THROUGH_EVENT_TAG"
}


// EventTag
/** 
 * Contains properties of an event tag.
**/
export class EventTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignIdDimensionValue" })
  campaignIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=enabledByDefault" })
  enabledByDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=excludeFromAdxRequests" })
  excludeFromAdxRequests?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=siteFilterType" })
  siteFilterType?: EventTagSiteFilterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=siteIds" })
  siteIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=sslCompliant" })
  sslCompliant?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: EventTagStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EventTagTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=urlEscapeLevels" })
  urlEscapeLevels?: number;
}
