import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImportFromUrlTaskLocator
/** 
 * Information on the task that has been started, and where to check it's status.
**/
export class ImportFromUrlTaskLocator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, string>;
}
