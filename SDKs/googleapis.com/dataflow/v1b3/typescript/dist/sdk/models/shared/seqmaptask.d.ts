import { SpeakeasyBase } from "../../../internal/utils";
import { SideInputInfo } from "./sideinputinfo";
import { SeqMapTaskOutputInfo } from "./seqmaptaskoutputinfo";
/**
 * Describes a particular function to invoke.
**/
export declare class SeqMapTask extends SpeakeasyBase {
    inputs?: SideInputInfo[];
    name?: string;
    outputInfos?: SeqMapTaskOutputInfo[];
    stageName?: string;
    systemName?: string;
    userFn?: Map<string, any>;
}
