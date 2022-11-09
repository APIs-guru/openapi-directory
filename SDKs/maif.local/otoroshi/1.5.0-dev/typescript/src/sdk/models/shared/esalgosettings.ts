import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EsAlgoSettings
/** 
 * Settings for an EC + SHA signing algorithm
**/
export class EsAlgoSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @Metadata({ data: "json, name=publicKey" })
  publicKey: string;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}
