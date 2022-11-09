import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClassItem } from "./classitem";


// CustomClass
/** 
 * A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases.
**/
export class CustomClass extends SpeakeasyBase {
  @Metadata({ data: "json, name=customClassId" })
  customClassId?: string;

  @Metadata({ data: "json, name=items", elemType: shared.ClassItem })
  items?: ClassItem[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
