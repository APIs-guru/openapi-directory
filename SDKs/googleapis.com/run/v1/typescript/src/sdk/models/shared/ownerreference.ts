import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OwnerReference
/** 
 * This is not supported or used by Cloud Run.
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
