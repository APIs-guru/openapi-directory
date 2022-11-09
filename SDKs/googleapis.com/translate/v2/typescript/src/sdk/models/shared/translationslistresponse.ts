import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TranslationsResource } from "./translationsresource";


// TranslationsListResponse
/** 
 * The main language translation response message.
**/
export class TranslationsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=translations", elemType: shared.TranslationsResource })
  translations?: TranslationsResource[];
}
