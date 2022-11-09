import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A secret payload resource in the Secret Manager API. This contains the sensitive secret payload that is associated with a SecretVersion.
**/
export declare class SecretPayload extends SpeakeasyBase {
    data?: string;
    dataCrc32c?: string;
}
