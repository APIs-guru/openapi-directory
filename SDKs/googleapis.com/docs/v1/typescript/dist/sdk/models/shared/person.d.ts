import { SpeakeasyBase } from "../../../internal/utils";
import { PersonProperties } from "./personproperties";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";
/**
 * A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
**/
export declare class Person extends SpeakeasyBase {
    personId?: string;
    personProperties?: PersonProperties;
    suggestedDeletionIds?: string[];
    suggestedInsertionIds?: string[];
    suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;
    textStyle?: TextStyle;
}
/**
 * A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
**/
export declare class PersonInput extends SpeakeasyBase {
    suggestedDeletionIds?: string[];
    suggestedInsertionIds?: string[];
    suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;
    textStyle?: TextStyle;
}
