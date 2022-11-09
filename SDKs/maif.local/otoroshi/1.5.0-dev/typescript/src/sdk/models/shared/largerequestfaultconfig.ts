import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LargeRequestFaultConfig
/** 
 * Config for large request injection fault
**/
export class LargeRequestFaultConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalRequestSize" })
  additionalRequestSize: number;

  @Metadata({ data: "json, name=ratio" })
  ratio: number;
}
