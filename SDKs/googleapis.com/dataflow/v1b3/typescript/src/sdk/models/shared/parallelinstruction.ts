import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=flatten" })
  flatten?: FlattenInstruction;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=originalName" })
  originalName?: string;

  @Metadata({ data: "json, name=outputs", elemType: shared.InstructionOutput })
  outputs?: InstructionOutput[];

  @Metadata({ data: "json, name=parDo" })
  parDo?: ParDoInstruction;

  @Metadata({ data: "json, name=partialGroupByKey" })
  partialGroupByKey?: PartialGroupByKeyInstruction;

  @Metadata({ data: "json, name=read" })
  read?: ReadInstruction;

  @Metadata({ data: "json, name=systemName" })
  systemName?: string;

  @Metadata({ data: "json, name=write" })
  write?: WriteInstruction;
}
