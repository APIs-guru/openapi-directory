import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Election } from "./election";


// ElectionsQueryResponse
/** 
 * The list of elections available for this version of the API.
**/
export class ElectionsQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=elections", elemType: shared.Election })
  elections?: Election[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
