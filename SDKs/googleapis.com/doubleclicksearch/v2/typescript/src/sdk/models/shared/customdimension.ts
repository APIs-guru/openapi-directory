import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomDimension
/** 
 * A message containing the custom dimension.
**/
export class CustomDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
