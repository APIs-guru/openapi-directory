import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ImportErrorsConfig } from "./googlecloudretailv2importerrorsconfig";
import { GoogleCloudRetailV2ProductInputConfigInput } from "./googlecloudretailv2productinputconfig";


export enum GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED",
    Incremental = "INCREMENTAL",
    Full = "FULL"
}


// GoogleCloudRetailV2ImportProductsRequestInput
/** 
 * Request message for Import methods.
**/
export class GoogleCloudRetailV2ImportProductsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorsConfig" })
  errorsConfig?: GoogleCloudRetailV2ImportErrorsConfig;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2ProductInputConfigInput;

  @SpeakeasyMetadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=reconciliationMode" })
  reconciliationMode?: GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
