import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Region } from "./region";


// RegionsListResponse
/** 
 * Region List Response
**/
export class RegionsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=regions", elemType: shared.Region })
  regions?: Region[];
}
