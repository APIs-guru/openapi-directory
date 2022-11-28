import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSignature } from "./buildsignature";



// Build
/** 
 * Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence.
**/
export class Build extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builderVersion" })
  builderVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: BuildSignature;
}
