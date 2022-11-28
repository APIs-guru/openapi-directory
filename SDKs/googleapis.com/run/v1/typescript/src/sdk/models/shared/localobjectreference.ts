import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LocalObjectReference
/** 
 * Not supported by Cloud Run. LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
**/
export class LocalObjectReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
