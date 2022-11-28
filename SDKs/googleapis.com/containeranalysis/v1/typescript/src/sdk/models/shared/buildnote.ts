import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BuildNote
/** 
 * Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence.
**/
export class BuildNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builderVersion" })
  builderVersion?: string;
}
