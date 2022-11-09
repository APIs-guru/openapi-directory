import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OwnerReference
/** 
 * OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field.
**/
export class OwnerReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=blockOwnerDeletion" })
  blockOwnerDeletion?: boolean;

  @Metadata({ data: "json, name=controller" })
  controller?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
