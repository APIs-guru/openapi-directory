import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HsAlgoSettings
/** 
 * Settings for an HMAC + SHA signing algorithm
**/
export class HsAlgoSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
