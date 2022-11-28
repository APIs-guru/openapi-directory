import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomDimension } from "./customdimension";
import { CustomMetric } from "./custommetric";



// Conversion
/** 
 * A conversion containing data relevant to DoubleClick Search.
**/
export class Conversion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adGroupId" })
  adGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=adId" })
  adId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=agencyId" })
  agencyId?: string;

  @SpeakeasyMetadata({ data: "json, name=attributionModel" })
  attributionModel?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: string;

  @SpeakeasyMetadata({ data: "json, name=clickId" })
  clickId?: string;

  @SpeakeasyMetadata({ data: "json, name=conversionId" })
  conversionId?: string;

  @SpeakeasyMetadata({ data: "json, name=conversionModifiedTimestamp" })
  conversionModifiedTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=conversionTimestamp" })
  conversionTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=countMillis" })
  countMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=criterionId" })
  criterionId?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=customDimension", elemType: CustomDimension })
  customDimension?: CustomDimension[];

  @SpeakeasyMetadata({ data: "json, name=customMetric", elemType: CustomMetric })
  customMetric?: CustomMetric[];

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceType" })
  deviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=dsConversionId" })
  dsConversionId?: string;

  @SpeakeasyMetadata({ data: "json, name=engineAccountId" })
  engineAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=floodlightOrderId" })
  floodlightOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=inventoryAccountId" })
  inventoryAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=productCountry" })
  productCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=productGroupId" })
  productGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=productLanguage" })
  productLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=quantityMillis" })
  quantityMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=revenueMicros" })
  revenueMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=segmentationId" })
  segmentationId?: string;

  @SpeakeasyMetadata({ data: "json, name=segmentationName" })
  segmentationName?: string;

  @SpeakeasyMetadata({ data: "json, name=segmentationType" })
  segmentationType?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=storeId" })
  storeId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
