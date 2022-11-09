import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Entity } from "./entity";


// AnalyzeEntitiesResponse
/** 
 * The entity analysis response message.
**/
export class AnalyzeEntitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.Entity })
  entities?: Entity[];

  @Metadata({ data: "json, name=language" })
  language?: string;
}
