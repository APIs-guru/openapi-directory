import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RsAlgoSettings
/** 
 * Settings for an HMAC + SHA signing algorithm
**/
export class RsAlgoSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
