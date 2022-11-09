import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FilterPair
/** 
 * Filter used to match traffic data in your report.
**/
export class FilterPair extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
