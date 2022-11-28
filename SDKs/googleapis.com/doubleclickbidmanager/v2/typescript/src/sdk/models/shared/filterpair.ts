import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FilterPair
/** 
 * Filter used to match traffic data in your report.
**/
export class FilterPair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
