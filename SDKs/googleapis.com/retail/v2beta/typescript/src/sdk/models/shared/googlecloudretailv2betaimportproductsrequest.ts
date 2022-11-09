import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2betaImportErrorsConfig } from "./googlecloudretailv2betaimporterrorsconfig";
import { GoogleCloudRetailV2betaProductInputConfig } from "./googlecloudretailv2betaproductinputconfig";

export enum GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED"
,    Incremental = "INCREMENTAL"
,    Full = "FULL"
}


// GoogleCloudRetailV2betaImportProductsRequest
/** 
 * Request message for Import methods.
**/
export class GoogleCloudRetailV2betaImportProductsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorsConfig" })
  errorsConfig?: GoogleCloudRetailV2betaImportErrorsConfig;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2betaProductInputConfig;

  @Metadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;

  @Metadata({ data: "json, name=reconciliationMode" })
  reconciliationMode?: GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
