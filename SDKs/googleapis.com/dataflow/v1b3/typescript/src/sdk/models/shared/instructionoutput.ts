import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstructionOutput
/** 
 * An output of an instruction.
**/
export class InstructionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=codec" })
  codec?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=onlyCountKeyBytes" })
  onlyCountKeyBytes?: boolean;

  @Metadata({ data: "json, name=onlyCountValueBytes" })
  onlyCountValueBytes?: boolean;

  @Metadata({ data: "json, name=originalName" })
  originalName?: string;

  @Metadata({ data: "json, name=systemName" })
  systemName?: string;
}
