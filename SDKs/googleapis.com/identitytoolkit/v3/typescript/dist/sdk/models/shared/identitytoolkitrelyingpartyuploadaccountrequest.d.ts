import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * Request to upload user account in batch.
**/
export declare class IdentitytoolkitRelyingpartyUploadAccountRequest extends SpeakeasyBase {
    allowOverwrite?: boolean;
    blockSize?: number;
    cpuMemCost?: number;
    delegatedProjectNumber?: string;
    dkLen?: number;
    hashAlgorithm?: string;
    memoryCost?: number;
    parallelization?: number;
    rounds?: number;
    saltSeparator?: string;
    sanityCheck?: boolean;
    signerKey?: string;
    targetProjectId?: string;
    users?: UserInfo[];
}
