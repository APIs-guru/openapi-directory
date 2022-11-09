import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Selection
/** 
 * Wrapper for Selection Field value as combined value/display_name pair for selected choice.
**/
export class Selection extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
