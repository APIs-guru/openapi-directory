import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Region } from "./region";



// RegionsListResponse
/** 
 * Region List Response
**/
export class RegionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=regions", elemType: Region })
  regions?: Region[];
}
