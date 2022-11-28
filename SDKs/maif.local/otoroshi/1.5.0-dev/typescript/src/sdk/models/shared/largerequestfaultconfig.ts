import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LargeRequestFaultConfig
/** 
 * Config for large request injection fault
**/
export class LargeRequestFaultConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalRequestSize" })
  additionalRequestSize: number;

  @SpeakeasyMetadata({ data: "json, name=ratio" })
  ratio: number;
}
