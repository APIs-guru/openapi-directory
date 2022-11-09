import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BuildSignature } from "./buildsignature";


// BuildType
/** 
 * Note holding the version of the provider's builder and the signature of the provenance message in linked BuildDetails.
**/
export class BuildType extends SpeakeasyBase {
  @Metadata({ data: "json, name=builderVersion" })
  builderVersion?: string;

  @Metadata({ data: "json, name=signature" })
  signature?: BuildSignature;
}
