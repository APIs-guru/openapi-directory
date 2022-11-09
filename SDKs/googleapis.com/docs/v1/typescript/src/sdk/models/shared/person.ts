import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PersonProperties } from "./personproperties";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";


// Person
/** 
 * A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
**/
export class Person extends SpeakeasyBase {
  @Metadata({ data: "json, name=personId" })
  personId?: string;

  @Metadata({ data: "json, name=personProperties" })
  personProperties?: PersonProperties;

  @Metadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @Metadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @Metadata({ data: "json, name=suggestedTextStyleChanges", elemType: shared.SuggestedTextStyle })
  suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;

  @Metadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}
