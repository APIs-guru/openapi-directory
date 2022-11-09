import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MethodMap
/** 
 * Deployment Manager will call these methods during the events of creation/deletion/update/get/setIamPolicy
**/
export class MethodMap extends SpeakeasyBase {
  @Metadata({ data: "json, name=create" })
  create?: string;

  @Metadata({ data: "json, name=delete" })
  delete?: string;

  @Metadata({ data: "json, name=get" })
  get?: string;

  @Metadata({ data: "json, name=setIamPolicy" })
  setIamPolicy?: string;

  @Metadata({ data: "json, name=update" })
  update?: string;
}
