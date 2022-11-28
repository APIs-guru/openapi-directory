import { SpeakeasyBase } from "../../../internal/utils";
import { FlattenInstruction } from "./flatteninstruction";
import { InstructionOutput } from "./instructionoutput";
import { ParDoInstruction } from "./pardoinstruction";
import { PartialGroupByKeyInstruction } from "./partialgroupbykeyinstruction";
import { ReadInstruction } from "./readinstruction";
import { WriteInstruction } from "./writeinstruction";
/**
 * Describes a particular operation comprising a MapTask.
**/
export declare class ParallelInstruction extends SpeakeasyBase {
    flatten?: FlattenInstruction;
    name?: string;
    originalName?: string;
    outputs?: InstructionOutput[];
    parDo?: ParDoInstruction;
    partialGroupByKey?: PartialGroupByKeyInstruction;
    read?: ReadInstruction;
    systemName?: string;
    write?: WriteInstruction;
}
