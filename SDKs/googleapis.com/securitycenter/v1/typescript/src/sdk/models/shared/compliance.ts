import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Compliance
/** 
 * Contains compliance information about a security standard indicating unmet recommendations.
**/
export class Compliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=standard" })
  standard?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
