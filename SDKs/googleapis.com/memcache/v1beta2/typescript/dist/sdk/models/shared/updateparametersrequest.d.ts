import { SpeakeasyBase } from "../../../internal/utils";
import { MemcacheParametersInput } from "./memcacheparameters";
/**
 * Request for UpdateParameters.
**/
export declare class UpdateParametersRequestInput extends SpeakeasyBase {
    parameters?: MemcacheParametersInput;
    updateMask?: string;
}
