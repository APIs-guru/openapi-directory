import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
import { SourceInput } from "./source";
export declare enum PersonMetadataObjectTypeEnum {
    ObjectTypeUnspecified = "OBJECT_TYPE_UNSPECIFIED",
    Person = "PERSON",
    Page = "PAGE"
}
/**
 * The metadata about a person.
**/
export declare class PersonMetadata extends SpeakeasyBase {
    deleted?: boolean;
    linkedPeopleResourceNames?: string[];
    objectType?: PersonMetadataObjectTypeEnum;
    previousResourceNames?: string[];
    sources?: Source[];
}
/**
 * The metadata about a person.
**/
export declare class PersonMetadataInput extends SpeakeasyBase {
    sources?: SourceInput[];
}
