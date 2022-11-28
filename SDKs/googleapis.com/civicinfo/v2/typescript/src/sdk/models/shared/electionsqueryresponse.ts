import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Election } from "./election";



// ElectionsQueryResponse
/** 
 * The list of elections available for this version of the API.
**/
export class ElectionsQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elections", elemType: Election })
  elections?: Election[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
