import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Request message for KeyManagementService.MacVerify.
**/
export declare class MacVerifyRequest extends SpeakeasyBase {
    data?: string;
    dataCrc32c?: string;
    mac?: string;
    macCrc32c?: string;
}
