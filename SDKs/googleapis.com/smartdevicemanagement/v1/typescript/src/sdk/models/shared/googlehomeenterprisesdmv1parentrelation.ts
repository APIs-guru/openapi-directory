import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleHomeEnterpriseSdmV1ParentRelation
/** 
 * Represents device relationships, for instance, structure/room to which the device is assigned to.
**/
export class GoogleHomeEnterpriseSdmV1ParentRelation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}
