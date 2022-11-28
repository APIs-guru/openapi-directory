import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LargeResponseFaultConfig
/** 
 * Config for large response injection fault
**/
export class LargeResponseFaultConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalRequestSize" })
  additionalRequestSize?: number;

  @SpeakeasyMetadata({ data: "json, name=ratio" })
  ratio: number;
}
