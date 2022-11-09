import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Digest } from "./digest";
/**
 * Request message for KeyManagementService.AsymmetricSign.
**/
export declare class AsymmetricSignRequest extends SpeakeasyBase {
    data?: string;
    dataCrc32c?: string;
    digest?: Digest;
    digestCrc32c?: string;
}
