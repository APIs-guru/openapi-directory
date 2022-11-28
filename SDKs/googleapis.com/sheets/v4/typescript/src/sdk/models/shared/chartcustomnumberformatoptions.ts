import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChartCustomNumberFormatOptions
/** 
 * Custom number formatting options for chart attributes.
**/
export class ChartCustomNumberFormatOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;
}
