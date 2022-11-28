import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaImportErrorsConfig } from "./googlecloudretailv2betaimporterrorsconfig";
import { GoogleCloudRetailV2betaProductInputConfigInput } from "./googlecloudretailv2betaproductinputconfig";


export enum GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED",
    Incremental = "INCREMENTAL",
    Full = "FULL"
}


// GoogleCloudRetailV2betaImportProductsRequestInput
/** 
 * Request message for Import methods.
**/
export class GoogleCloudRetailV2betaImportProductsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorsConfig" })
  errorsConfig?: GoogleCloudRetailV2betaImportErrorsConfig;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2betaProductInputConfigInput;

  @SpeakeasyMetadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=reconciliationMode" })
  reconciliationMode?: GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
