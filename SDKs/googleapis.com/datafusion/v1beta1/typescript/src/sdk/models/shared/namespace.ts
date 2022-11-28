import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamPolicy } from "./iampolicy";



// Namespace
/** 
 * Represents the information of a namespace
**/
export class Namespace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iamPolicy" })
  iamPolicy?: IamPolicy;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
