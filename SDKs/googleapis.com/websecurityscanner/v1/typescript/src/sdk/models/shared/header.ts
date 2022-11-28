import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Header
/** 
 * Describes a HTTP Header.
**/
export class Header extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
