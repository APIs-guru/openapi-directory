import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaImportErrorsConfig } from "./googlecloudretailv2alphaimporterrorsconfig";
import { GoogleCloudRetailV2alphaProductInputConfigInput } from "./googlecloudretailv2alphaproductinputconfig";


export enum GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED",
    Incremental = "INCREMENTAL",
    Full = "FULL"
}


// GoogleCloudRetailV2alphaImportProductsRequestInput
/** 
 * Request message for Import methods.
**/
export class GoogleCloudRetailV2alphaImportProductsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorsConfig" })
  errorsConfig?: GoogleCloudRetailV2alphaImportErrorsConfig;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2alphaProductInputConfigInput;

  @SpeakeasyMetadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=reconciliationMode" })
  reconciliationMode?: GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=skipDefaultBranchProtection" })
  skipDefaultBranchProtection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
