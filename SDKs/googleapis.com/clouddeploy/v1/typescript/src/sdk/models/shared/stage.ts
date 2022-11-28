import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Strategy } from "./strategy";



// Stage
/** 
 * Stage specifies a location to which to deploy.
**/
export class Stage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profiles" })
  profiles?: string[];

  @SpeakeasyMetadata({ data: "json, name=strategy" })
  strategy?: Strategy;

  @SpeakeasyMetadata({ data: "json, name=targetId" })
  targetId?: string;
}
