import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LargeResponseFaultConfig
/** 
 * Config for large response injection fault
**/
export class LargeResponseFaultConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalRequestSize" })
  additionalRequestSize?: number;

  @Metadata({ data: "json, name=ratio" })
  ratio: number;
}
