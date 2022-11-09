import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Operation } from "./operation";


// Type
/** 
 * A resource type supported by Deployment Manager.
**/
export class Type extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=insertTime" })
  insertTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operation" })
  operation?: Operation;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
