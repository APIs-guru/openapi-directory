import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSignature } from "./buildsignature";



// BuildType
/** 
 * Note holding the version of the provider's builder and the signature of the provenance message in linked BuildDetails.
**/
export class BuildType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builderVersion" })
  builderVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: BuildSignature;
}
