import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InCookie
/** 
 * JWT location in a cookie
**/
export class InCookie extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
