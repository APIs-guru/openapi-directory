import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Creative } from "./creative";


// CreativesListResponse
/** 
 * Creative List Response
**/
export class CreativesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creatives", elemType: shared.Creative })
  creatives?: Creative[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
