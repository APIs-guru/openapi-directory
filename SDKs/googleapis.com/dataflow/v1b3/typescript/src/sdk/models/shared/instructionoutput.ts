import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstructionOutput
/** 
 * An output of an instruction.
**/
export class InstructionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codec" })
  codec?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=onlyCountKeyBytes" })
  onlyCountKeyBytes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=onlyCountValueBytes" })
  onlyCountValueBytes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=originalName" })
  originalName?: string;

  @SpeakeasyMetadata({ data: "json, name=systemName" })
  systemName?: string;
}
