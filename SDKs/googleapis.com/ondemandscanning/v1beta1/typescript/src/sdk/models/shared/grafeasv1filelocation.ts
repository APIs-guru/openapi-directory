import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GrafeasV1FileLocation
/** 
 * Indicates the location at which a package was found.
**/
export class GrafeasV1FileLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath?: string;
}
