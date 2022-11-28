import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaSuspensionAudit
/** 
 * Contains when and by whom the suspension was resolved.
**/
export class GoogleCloudIntegrationsV1alphaSuspensionAudit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resolveTime" })
  resolveTime?: string;

  @SpeakeasyMetadata({ data: "json, name=resolver" })
  resolver?: string;
}
