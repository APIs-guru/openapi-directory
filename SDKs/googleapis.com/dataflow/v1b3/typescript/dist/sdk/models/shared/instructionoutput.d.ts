import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An output of an instruction.
**/
export declare class InstructionOutput extends SpeakeasyBase {
    codec?: Map<string, any>;
    name?: string;
    onlyCountKeyBytes?: boolean;
    onlyCountValueBytes?: boolean;
    originalName?: string;
    systemName?: string;
}
