import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaBigQuerySource } from "./googleclouddiscoveryenginev1alphabigquerysource";
import { GoogleCloudDiscoveryengineV1alphaImportErrorConfig } from "./googleclouddiscoveryenginev1alphaimporterrorconfig";
import { GoogleCloudDiscoveryengineV1alphaGcsSource } from "./googleclouddiscoveryenginev1alphagcssource";
import { GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource } from "./googleclouddiscoveryenginev1alphaimportdocumentsrequestinlinesource";


export enum GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED",
    Incremental = "INCREMENTAL",
    Full = "FULL"
}


// GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest
/** 
 * Request message for Import methods.
**/
export class GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigquerySource" })
  bigquerySource?: GoogleCloudDiscoveryengineV1alphaBigQuerySource;

  @SpeakeasyMetadata({ data: "json, name=errorConfig" })
  errorConfig?: GoogleCloudDiscoveryengineV1alphaImportErrorConfig;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudDiscoveryengineV1alphaGcsSource;

  @SpeakeasyMetadata({ data: "json, name=inlineSource" })
  inlineSource?: GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource;

  @SpeakeasyMetadata({ data: "json, name=reconciliationMode" })
  reconciliationMode?: GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum;
}
