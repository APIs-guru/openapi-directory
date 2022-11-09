import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomDimension
/** 
 * A message containing the custom dimension.
**/
export class CustomDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
