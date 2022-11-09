import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Glossary } from "./glossary";


// ListGlossariesResponse
/** 
 * Response message for ListGlossaries.
**/
export class ListGlossariesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=glossaries", elemType: shared.Glossary })
  glossaries?: Glossary[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
