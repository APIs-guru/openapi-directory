import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdBlockingConfiguration } from "./adblockingconfiguration";
import { CreativeOptimizationConfiguration } from "./creativeoptimizationconfiguration";
import { DimensionValue } from "./dimensionvalue";
import { AudienceSegmentGroup } from "./audiencesegmentgroup";
import { ClickThroughUrlSuffixProperties } from "./clickthroughurlsuffixproperties";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { DefaultClickThroughEventTagProperties } from "./defaultclickthrougheventtagproperties";
import { EventTagOverride } from "./eventtagoverride";



// Campaign
/** 
 * Contains properties of a Campaign Manager campaign.
**/
export class Campaign extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=adBlockingConfiguration" })
  adBlockingConfiguration?: AdBlockingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=additionalCreativeOptimizationConfigurations", elemType: CreativeOptimizationConfiguration })
  additionalCreativeOptimizationConfigurations?: CreativeOptimizationConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=advertiserGroupId" })
  advertiserGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=audienceSegmentGroups", elemType: AudienceSegmentGroup })
  audienceSegmentGroups?: AudienceSegmentGroup[];

  @SpeakeasyMetadata({ data: "json, name=billingInvoiceCode" })
  billingInvoiceCode?: string;

  @SpeakeasyMetadata({ data: "json, name=clickThroughUrlSuffixProperties" })
  clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=createInfo" })
  createInfo?: LastModifiedInfo;

  @SpeakeasyMetadata({ data: "json, name=creativeGroupIds" })
  creativeGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=creativeOptimizationConfiguration" })
  creativeOptimizationConfiguration?: CreativeOptimizationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=defaultClickThroughEventTagProperties" })
  defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties;

  @SpeakeasyMetadata({ data: "json, name=defaultLandingPageId" })
  defaultLandingPageId?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=eventTagOverrides", elemType: EventTagOverride })
  eventTagOverrides?: EventTagOverride[];

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nielsenOcrEnabled" })
  nielsenOcrEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=traffickerEmails" })
  traffickerEmails?: string[];
}
