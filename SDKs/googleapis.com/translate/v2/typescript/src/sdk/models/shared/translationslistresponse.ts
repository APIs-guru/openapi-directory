import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TranslationsResource } from "./translationsresource";



// TranslationsListResponse
/** 
 * The main language translation response message.
**/
export class TranslationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=translations", elemType: TranslationsResource })
  translations?: TranslationsResource[];
}
