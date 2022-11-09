import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Licensee } from "./licensee";
export declare class LicenseeResponseSchema extends SpeakeasyBase {
    code?: number;
    message?: string;
    result?: Licensee;
}
