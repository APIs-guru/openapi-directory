import { SpeakeasyBase } from "../../../internal/utils";
import { AdBlockingConfiguration } from "./adblockingconfiguration";
import { CreativeOptimizationConfiguration } from "./creativeoptimizationconfiguration";
import { DimensionValue } from "./dimensionvalue";
import { AudienceSegmentGroup } from "./audiencesegmentgroup";
import { ClickThroughUrlSuffixProperties } from "./clickthroughurlsuffixproperties";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { DefaultClickThroughEventTagProperties } from "./defaultclickthrougheventtagproperties";
import { EventTagOverride } from "./eventtagoverride";
import { MeasurementPartnerCampaignLink } from "./measurementpartnercampaignlink";
/**
 * Contains properties of a Campaign Manager campaign.
**/
export declare class Campaign extends SpeakeasyBase {
    accountId?: string;
    adBlockingConfiguration?: AdBlockingConfiguration;
    additionalCreativeOptimizationConfigurations?: CreativeOptimizationConfiguration[];
    advertiserGroupId?: string;
    advertiserId?: string;
    advertiserIdDimensionValue?: DimensionValue;
    archived?: boolean;
    audienceSegmentGroups?: AudienceSegmentGroup[];
    billingInvoiceCode?: string;
    clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;
    comment?: string;
    createInfo?: LastModifiedInfo;
    creativeGroupIds?: string[];
    creativeOptimizationConfiguration?: CreativeOptimizationConfiguration;
    defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties;
    defaultLandingPageId?: string;
    endDate?: Date;
    eventTagOverrides?: EventTagOverride[];
    externalId?: string;
    id?: string;
    idDimensionValue?: DimensionValue;
    kind?: string;
    lastModifiedInfo?: LastModifiedInfo;
    measurementPartnerLink?: MeasurementPartnerCampaignLink;
    name?: string;
    nielsenOcrEnabled?: boolean;
    startDate?: Date;
    subaccountId?: string;
    traffickerEmails?: string[];
}
