import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GenerateExclusivityManifestResponse
/** 
 * The response of the exclusivity artifacts manifests for the client to apply.
**/
export class GenerateExclusivityManifestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=crManifest" })
  crManifest?: string;

  @SpeakeasyMetadata({ data: "json, name=crdManifest" })
  crdManifest?: string;
}
