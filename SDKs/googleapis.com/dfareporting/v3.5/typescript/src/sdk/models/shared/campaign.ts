import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdBlockingConfiguration } from "./adblockingconfiguration";
import { CreativeOptimizationConfiguration } from "./creativeoptimizationconfiguration";
import { DimensionValue } from "./dimensionvalue";
import { AudienceSegmentGroup } from "./audiencesegmentgroup";
import { ClickThroughUrlSuffixProperties } from "./clickthroughurlsuffixproperties";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { CreativeOptimizationConfiguration } from "./creativeoptimizationconfiguration";
import { DefaultClickThroughEventTagProperties } from "./defaultclickthrougheventtagproperties";
import { EventTagOverride } from "./eventtagoverride";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { MeasurementPartnerCampaignLink } from "./measurementpartnercampaignlink";


// Campaign
/** 
 * Contains properties of a Campaign Manager campaign.
**/
export class Campaign extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=adBlockingConfiguration" })
  adBlockingConfiguration?: AdBlockingConfiguration;

  @Metadata({ data: "json, name=additionalCreativeOptimizationConfigurations", elemType: shared.CreativeOptimizationConfiguration })
  additionalCreativeOptimizationConfigurations?: CreativeOptimizationConfiguration[];

  @Metadata({ data: "json, name=advertiserGroupId" })
  advertiserGroupId?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=audienceSegmentGroups", elemType: shared.AudienceSegmentGroup })
  audienceSegmentGroups?: AudienceSegmentGroup[];

  @Metadata({ data: "json, name=billingInvoiceCode" })
  billingInvoiceCode?: string;

  @Metadata({ data: "json, name=clickThroughUrlSuffixProperties" })
  clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;

  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=createInfo" })
  createInfo?: LastModifiedInfo;

  @Metadata({ data: "json, name=creativeGroupIds" })
  creativeGroupIds?: string[];

  @Metadata({ data: "json, name=creativeOptimizationConfiguration" })
  creativeOptimizationConfiguration?: CreativeOptimizationConfiguration;

  @Metadata({ data: "json, name=defaultClickThroughEventTagProperties" })
  defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties;

  @Metadata({ data: "json, name=defaultLandingPageId" })
  defaultLandingPageId?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=eventTagOverrides", elemType: shared.EventTagOverride })
  eventTagOverrides?: EventTagOverride[];

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @Metadata({ data: "json, name=measurementPartnerLink" })
  measurementPartnerLink?: MeasurementPartnerCampaignLink;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nielsenOcrEnabled" })
  nielsenOcrEnabled?: boolean;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=traffickerEmails" })
  traffickerEmails?: string[];
}
