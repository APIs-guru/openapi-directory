import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Glossary } from "./glossary";



// ListGlossariesResponse
/** 
 * Response message for ListGlossaries.
**/
export class ListGlossariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=glossaries", elemType: Glossary })
  glossaries?: Glossary[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
