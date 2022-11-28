import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaBigQuerySource } from "./googleclouddiscoveryenginev1betabigquerysource";
import { GoogleCloudDiscoveryengineV1betaImportErrorConfig } from "./googleclouddiscoveryenginev1betaimporterrorconfig";
import { GoogleCloudDiscoveryengineV1betaGcsSource } from "./googleclouddiscoveryenginev1betagcssource";
import { GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource } from "./googleclouddiscoveryenginev1betaimportdocumentsrequestinlinesource";


export enum GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED",
    Incremental = "INCREMENTAL",
    Full = "FULL"
}


// GoogleCloudDiscoveryengineV1betaImportDocumentsRequest
/** 
 * Request message for Import methods.
**/
export class GoogleCloudDiscoveryengineV1betaImportDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigquerySource" })
  bigquerySource?: GoogleCloudDiscoveryengineV1betaBigQuerySource;

  @SpeakeasyMetadata({ data: "json, name=errorConfig" })
  errorConfig?: GoogleCloudDiscoveryengineV1betaImportErrorConfig;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudDiscoveryengineV1betaGcsSource;

  @SpeakeasyMetadata({ data: "json, name=inlineSource" })
  inlineSource?: GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource;

  @SpeakeasyMetadata({ data: "json, name=reconciliationMode" })
  reconciliationMode?: GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum;
}
