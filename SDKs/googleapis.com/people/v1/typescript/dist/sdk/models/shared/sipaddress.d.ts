import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's SIP address. Session Initial Protocol addresses are used for VoIP communications to make voice or video calls over the internet.
**/
export declare class SipAddress extends SpeakeasyBase {
    formattedType?: string;
    metadata?: FieldMetadata;
    type?: string;
    value?: string;
}
/**
 * A person's SIP address. Session Initial Protocol addresses are used for VoIP communications to make voice or video calls over the internet.
**/
export declare class SipAddressInput extends SpeakeasyBase {
    metadata?: FieldMetadataInput;
    type?: string;
    value?: string;
}
