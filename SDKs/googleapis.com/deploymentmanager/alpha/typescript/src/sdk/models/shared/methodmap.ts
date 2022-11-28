import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MethodMap
/** 
 * Deployment Manager will call these methods during the events of creation/deletion/update/get/setIamPolicy
**/
export class MethodMap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=create" })
  create?: string;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: string;

  @SpeakeasyMetadata({ data: "json, name=get" })
  get?: string;

  @SpeakeasyMetadata({ data: "json, name=setIamPolicy" })
  setIamPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: string;
}
