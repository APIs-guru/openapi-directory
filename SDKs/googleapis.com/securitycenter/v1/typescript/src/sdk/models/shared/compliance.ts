import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Compliance
/** 
 * Contains compliance information about a security standard indicating unmet recommendations.
**/
export class Compliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=standard" })
  standard?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
