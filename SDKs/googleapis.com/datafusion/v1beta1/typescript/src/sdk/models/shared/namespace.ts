import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IamPolicy } from "./iampolicy";


// Namespace
/** 
 * Represents the information of a namespace
**/
export class Namespace extends SpeakeasyBase {
  @Metadata({ data: "json, name=iamPolicy" })
  iamPolicy?: IamPolicy;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
