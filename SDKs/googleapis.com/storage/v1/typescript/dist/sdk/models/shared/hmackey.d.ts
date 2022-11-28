import { SpeakeasyBase } from "../../../internal/utils";
import { HmacKeyMetadata } from "./hmackeymetadata";
/**
 * JSON template to produce a JSON-style HMAC Key resource for Create responses.
**/
export declare class HmacKey extends SpeakeasyBase {
    kind?: string;
    metadata?: HmacKeyMetadata;
    secret?: string;
}
