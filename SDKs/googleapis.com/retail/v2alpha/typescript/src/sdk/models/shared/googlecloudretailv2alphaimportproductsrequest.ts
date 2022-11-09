import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaImportErrorsConfig } from "./googlecloudretailv2alphaimporterrorsconfig";
import { GoogleCloudRetailV2alphaProductInputConfig } from "./googlecloudretailv2alphaproductinputconfig";

export enum GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED"
,    Incremental = "INCREMENTAL"
,    Full = "FULL"
}


// GoogleCloudRetailV2alphaImportProductsRequest
/** 
 * Request message for Import methods.
**/
export class GoogleCloudRetailV2alphaImportProductsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorsConfig" })
  errorsConfig?: GoogleCloudRetailV2alphaImportErrorsConfig;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2alphaProductInputConfig;

  @Metadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;

  @Metadata({ data: "json, name=reconciliationMode" })
  reconciliationMode?: GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=skipDefaultBranchProtection" })
  skipDefaultBranchProtection?: boolean;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
