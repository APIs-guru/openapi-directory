import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MemcacheParameters } from "./memcacheparameters";
/**
 * Request for UpdateParameters.
**/
export declare class UpdateParametersRequest extends SpeakeasyBase {
    parameters?: MemcacheParameters;
    updateMask?: string;
}
