import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PersonProperties } from "./personproperties";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";



// Person
/** 
 * A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
**/
export class Person extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personId" })
  personId?: string;

  @SpeakeasyMetadata({ data: "json, name=personProperties" })
  personProperties?: PersonProperties;

  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedTextStyleChanges", elemType: SuggestedTextStyle })
  suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;

  @SpeakeasyMetadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}


// PersonInput
/** 
 * A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
**/
export class PersonInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedTextStyleChanges", elemType: SuggestedTextStyle })
  suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;

  @SpeakeasyMetadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}
