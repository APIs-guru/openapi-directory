import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomDimension } from "./customdimension";
import { CustomMetric } from "./custommetric";


// Conversion
/** 
 * A conversion containing data relevant to DoubleClick Search.
**/
export class Conversion extends SpeakeasyBase {
  @Metadata({ data: "json, name=adGroupId" })
  adGroupId?: string;

  @Metadata({ data: "json, name=adId" })
  adId?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=agencyId" })
  agencyId?: string;

  @Metadata({ data: "json, name=attributionModel" })
  attributionModel?: string;

  @Metadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "json, name=channel" })
  channel?: string;

  @Metadata({ data: "json, name=clickId" })
  clickId?: string;

  @Metadata({ data: "json, name=conversionId" })
  conversionId?: string;

  @Metadata({ data: "json, name=conversionModifiedTimestamp" })
  conversionModifiedTimestamp?: string;

  @Metadata({ data: "json, name=conversionTimestamp" })
  conversionTimestamp?: string;

  @Metadata({ data: "json, name=countMillis" })
  countMillis?: string;

  @Metadata({ data: "json, name=criterionId" })
  criterionId?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=customDimension", elemType: shared.CustomDimension })
  customDimension?: CustomDimension[];

  @Metadata({ data: "json, name=customMetric", elemType: shared.CustomMetric })
  customMetric?: CustomMetric[];

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=deviceType" })
  deviceType?: string;

  @Metadata({ data: "json, name=dsConversionId" })
  dsConversionId?: string;

  @Metadata({ data: "json, name=engineAccountId" })
  engineAccountId?: string;

  @Metadata({ data: "json, name=floodlightOrderId" })
  floodlightOrderId?: string;

  @Metadata({ data: "json, name=inventoryAccountId" })
  inventoryAccountId?: string;

  @Metadata({ data: "json, name=productCountry" })
  productCountry?: string;

  @Metadata({ data: "json, name=productGroupId" })
  productGroupId?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=productLanguage" })
  productLanguage?: string;

  @Metadata({ data: "json, name=quantityMillis" })
  quantityMillis?: string;

  @Metadata({ data: "json, name=revenueMicros" })
  revenueMicros?: string;

  @Metadata({ data: "json, name=segmentationId" })
  segmentationId?: string;

  @Metadata({ data: "json, name=segmentationName" })
  segmentationName?: string;

  @Metadata({ data: "json, name=segmentationType" })
  segmentationType?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=storeId" })
  storeId?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
