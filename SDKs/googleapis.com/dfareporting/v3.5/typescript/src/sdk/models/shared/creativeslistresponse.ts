import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Creative } from "./creative";



// CreativesListResponse
/** 
 * Creative List Response
**/
export class CreativesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creatives", elemType: Creative })
  creatives?: Creative[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
