import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaSuspensionAudit
/** 
 * Contains when and by whom the suspension was resolved.
**/
export class GoogleCloudIntegrationsV1alphaSuspensionAudit extends SpeakeasyBase {
  @Metadata({ data: "json, name=resolveTime" })
  resolveTime?: string;

  @Metadata({ data: "json, name=resolver" })
  resolver?: string;
}
