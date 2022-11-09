import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Strategy } from "./strategy";


// Stage
/** 
 * Stage specifies a location to which to deploy.
**/
export class Stage extends SpeakeasyBase {
  @Metadata({ data: "json, name=profiles" })
  profiles?: string[];

  @Metadata({ data: "json, name=strategy" })
  strategy?: Strategy;

  @Metadata({ data: "json, name=targetId" })
  targetId?: string;
}
