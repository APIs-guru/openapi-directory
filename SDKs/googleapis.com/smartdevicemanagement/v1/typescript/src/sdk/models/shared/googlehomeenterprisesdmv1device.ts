import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleHomeEnterpriseSdmV1ParentRelation } from "./googlehomeenterprisesdmv1parentrelation";



// GoogleHomeEnterpriseSdmV1Device
/** 
 * Device resource represents an instance of enterprise managed device in the property.
**/
export class GoogleHomeEnterpriseSdmV1Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentRelations", elemType: GoogleHomeEnterpriseSdmV1ParentRelation })
  parentRelations?: GoogleHomeEnterpriseSdmV1ParentRelation[];

  @SpeakeasyMetadata({ data: "json, name=traits" })
  traits?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
