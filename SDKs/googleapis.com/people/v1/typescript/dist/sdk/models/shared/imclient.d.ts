import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadataInput } from "./fieldmetadata";
import { FieldMetadata } from "./fieldmetadata";
/**
 * A person's instant messaging client.
**/
export declare class ImClientInput extends SpeakeasyBase {
    metadata?: FieldMetadataInput;
    protocol?: string;
    type?: string;
    username?: string;
}
/**
 * A person's instant messaging client.
**/
export declare class ImClient extends SpeakeasyBase {
    formattedProtocol?: string;
    formattedType?: string;
    metadata?: FieldMetadata;
    protocol?: string;
    type?: string;
    username?: string;
}
