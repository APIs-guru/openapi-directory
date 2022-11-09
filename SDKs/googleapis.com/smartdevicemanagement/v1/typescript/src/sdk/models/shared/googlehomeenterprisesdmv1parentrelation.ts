import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleHomeEnterpriseSdmV1ParentRelation
/** 
 * Represents device relationships, for instance, structure/room to which the device is assigned to.
**/
export class GoogleHomeEnterpriseSdmV1ParentRelation extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;
}
