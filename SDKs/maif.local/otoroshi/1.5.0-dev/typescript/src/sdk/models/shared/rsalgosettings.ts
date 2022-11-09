import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RsAlgoSettings
/** 
 * Settings for an HMAC + SHA signing algorithm
**/
export class RsAlgoSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @Metadata({ data: "json, name=publicKey" })
  publicKey: string;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}
