import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HsAlgoSettings
/** 
 * Settings for an HMAC + SHA signing algorithm
**/
export class HsAlgoSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=secret" })
  secret: string;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}
