import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Selection
/** 
 * Wrapper for Selection Field value as combined value/display_name pair for selected choice.
**/
export class Selection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
