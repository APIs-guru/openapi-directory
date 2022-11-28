import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Setting
/** 
 * A setting for Glass.
**/
export class Setting extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  kind?: string;

  @SpeakeasyMetadata()
  value?: string;
}
