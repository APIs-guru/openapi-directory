import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OwnerReference
/** 
 * OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field.
**/
export class OwnerReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=blockOwnerDeletion" })
  blockOwnerDeletion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=controller" })
  controller?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}
