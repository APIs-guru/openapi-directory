import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImportFromUrlTaskLocator
/** 
 * Information on the task that has been started, and where to check it's status.
**/
export class ImportFromUrlTaskLocator extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, string>;
}
