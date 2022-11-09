import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxStatement
/** 
 * Statement information
**/
export class SandboxStatement extends SpeakeasyBase {
  @Metadata({ data: "json, name=month" })
  month?: number;

  @Metadata({ data: "json, name=number" })
  number?: string;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
