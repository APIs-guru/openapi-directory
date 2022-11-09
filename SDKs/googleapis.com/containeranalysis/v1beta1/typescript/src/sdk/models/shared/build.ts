import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BuildSignature } from "./buildsignature";


// Build
/** 
 * Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence.
**/
export class Build extends SpeakeasyBase {
  @Metadata({ data: "json, name=builderVersion" })
  builderVersion?: string;

  @Metadata({ data: "json, name=signature" })
  signature?: BuildSignature;
}
