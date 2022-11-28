import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassItem } from "./classitem";



// CustomClass
/** 
 * A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases.
**/
export class CustomClass extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customClassId" })
  customClassId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: ClassItem })
  items?: ClassItem[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
