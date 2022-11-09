import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GrafeasV1FileLocation
/** 
 * Indicates the location at which a package was found.
**/
export class GrafeasV1FileLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=filePath" })
  filePath?: string;
}
