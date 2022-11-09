import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GenerateExclusivityManifestResponse
/** 
 * The response of the exclusivity artifacts manifests for the client to apply.
**/
export class GenerateExclusivityManifestResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=crManifest" })
  crManifest?: string;

  @Metadata({ data: "json, name=crdManifest" })
  crdManifest?: string;
}
