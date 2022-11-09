import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LocalObjectReference
/** 
 * Not supported by Cloud Run LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
**/
export class LocalObjectReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
