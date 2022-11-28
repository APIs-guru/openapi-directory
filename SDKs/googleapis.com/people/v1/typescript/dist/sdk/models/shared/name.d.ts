import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadataInput } from "./fieldmetadata";
import { FieldMetadata } from "./fieldmetadata";
/**
 * A person's name. If the name is a mononym, the family name is empty.
**/
export declare class NameInput extends SpeakeasyBase {
    familyName?: string;
    givenName?: string;
    honorificPrefix?: string;
    honorificSuffix?: string;
    metadata?: FieldMetadataInput;
    middleName?: string;
    phoneticFamilyName?: string;
    phoneticFullName?: string;
    phoneticGivenName?: string;
    phoneticHonorificPrefix?: string;
    phoneticHonorificSuffix?: string;
    phoneticMiddleName?: string;
    unstructuredName?: string;
}
/**
 * A person's name. If the name is a mononym, the family name is empty.
**/
export declare class Name extends SpeakeasyBase {
    displayName?: string;
    displayNameLastFirst?: string;
    familyName?: string;
    givenName?: string;
    honorificPrefix?: string;
    honorificSuffix?: string;
    metadata?: FieldMetadata;
    middleName?: string;
    phoneticFamilyName?: string;
    phoneticFullName?: string;
    phoneticGivenName?: string;
    phoneticHonorificPrefix?: string;
    phoneticHonorificSuffix?: string;
    phoneticMiddleName?: string;
    unstructuredName?: string;
}
