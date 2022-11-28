import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OwnerReference
/** 
 * This is not supported or used by Cloud Run.
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
