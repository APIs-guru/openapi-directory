import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EsAlgoSettings
/** 
 * Settings for an EC + SHA signing algorithm
**/
export class EsAlgoSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
