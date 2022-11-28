import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDimension } from "./customdimension";
import { CustomMetric } from "./custommetric";
/**
 * A conversion containing data relevant to DoubleClick Search.
**/
export declare class Conversion extends SpeakeasyBase {
    adGroupId?: string;
    adId?: string;
    advertiserId?: string;
    agencyId?: string;
    attributionModel?: string;
    campaignId?: string;
    channel?: string;
    clickId?: string;
    conversionId?: string;
    conversionModifiedTimestamp?: string;
    conversionTimestamp?: string;
    countMillis?: string;
    criterionId?: string;
    currencyCode?: string;
    customDimension?: CustomDimension[];
    customMetric?: CustomMetric[];
    customerId?: string;
    deviceType?: string;
    dsConversionId?: string;
    engineAccountId?: string;
    floodlightOrderId?: string;
    inventoryAccountId?: string;
    productCountry?: string;
    productGroupId?: string;
    productId?: string;
    productLanguage?: string;
    quantityMillis?: string;
    revenueMicros?: string;
    segmentationId?: string;
    segmentationName?: string;
    segmentationType?: string;
    state?: string;
    storeId?: string;
    type?: string;
}
