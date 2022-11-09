import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2ImportErrorsConfig } from "./googlecloudretailv2importerrorsconfig";
import { GoogleCloudRetailV2ProductInputConfig } from "./googlecloudretailv2productinputconfig";

export enum GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED"
,    Incremental = "INCREMENTAL"
,    Full = "FULL"
}


// GoogleCloudRetailV2ImportProductsRequest
/** 
 * Request message for Import methods.
**/
export class GoogleCloudRetailV2ImportProductsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorsConfig" })
  errorsConfig?: GoogleCloudRetailV2ImportErrorsConfig;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2ProductInputConfig;

  @Metadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;

  @Metadata({ data: "json, name=reconciliationMode" })
  reconciliationMode?: GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
