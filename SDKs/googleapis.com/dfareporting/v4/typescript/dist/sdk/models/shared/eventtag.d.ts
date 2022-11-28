import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
export declare enum EventTagSiteFilterTypeEnum {
    Allowlist = "ALLOWLIST",
    Blocklist = "BLOCKLIST"
}
export declare enum EventTagStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare enum EventTagTypeEnum {
    ImpressionImageEventTag = "IMPRESSION_IMAGE_EVENT_TAG",
    ImpressionJavascriptEventTag = "IMPRESSION_JAVASCRIPT_EVENT_TAG",
    ClickThroughEventTag = "CLICK_THROUGH_EVENT_TAG"
}
/**
 * Contains properties of an event tag.
**/
export declare class EventTag extends SpeakeasyBase {
    accountId?: string;
    advertiserId?: string;
    advertiserIdDimensionValue?: DimensionValue;
    campaignId?: string;
    campaignIdDimensionValue?: DimensionValue;
    enabledByDefault?: boolean;
    excludeFromAdxRequests?: boolean;
    id?: string;
    kind?: string;
    name?: string;
    siteFilterType?: EventTagSiteFilterTypeEnum;
    siteIds?: string[];
    sslCompliant?: boolean;
    status?: EventTagStatusEnum;
    subaccountId?: string;
    type?: EventTagTypeEnum;
    url?: string;
    urlEscapeLevels?: number;
}
