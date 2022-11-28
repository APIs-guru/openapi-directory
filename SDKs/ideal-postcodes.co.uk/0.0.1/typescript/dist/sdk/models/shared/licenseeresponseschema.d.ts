import { SpeakeasyBase } from "../../../internal/utils";
import { Licensee } from "./licensee";
export declare class LicenseeResponseSchema extends SpeakeasyBase {
    code?: number;
    message?: string;
    result?: Licensee;
}
