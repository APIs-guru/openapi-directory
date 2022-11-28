import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlattenInstruction } from "./flatteninstruction";
import { InstructionOutput } from "./instructionoutput";
import { ParDoInstruction } from "./pardoinstruction";
import { PartialGroupByKeyInstruction } from "./partialgroupbykeyinstruction";
import { ReadInstruction } from "./readinstruction";
import { WriteInstruction } from "./writeinstruction";



// ParallelInstruction
/** 
 * Describes a particular operation comprising a MapTask.
**/
export class ParallelInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flatten" })
  flatten?: FlattenInstruction;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originalName" })
  originalName?: string;

  @SpeakeasyMetadata({ data: "json, name=outputs", elemType: InstructionOutput })
  outputs?: InstructionOutput[];

  @SpeakeasyMetadata({ data: "json, name=parDo" })
  parDo?: ParDoInstruction;

  @SpeakeasyMetadata({ data: "json, name=partialGroupByKey" })
  partialGroupByKey?: PartialGroupByKeyInstruction;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read?: ReadInstruction;

  @SpeakeasyMetadata({ data: "json, name=systemName" })
  systemName?: string;

  @SpeakeasyMetadata({ data: "json, name=write" })
  write?: WriteInstruction;
}
