import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChartCustomNumberFormatOptions
/** 
 * Custom number formatting options for chart attributes.
**/
export class ChartCustomNumberFormatOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=suffix" })
  suffix?: string;
}
