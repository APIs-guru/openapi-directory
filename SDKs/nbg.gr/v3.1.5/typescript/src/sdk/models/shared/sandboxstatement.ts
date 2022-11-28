import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxStatement
/** 
 * Statement information
**/
export class SandboxStatement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=month" })
  month?: number;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
