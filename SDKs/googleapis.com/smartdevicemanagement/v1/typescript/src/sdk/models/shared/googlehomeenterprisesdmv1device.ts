import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleHomeEnterpriseSdmV1ParentRelation } from "./googlehomeenterprisesdmv1parentrelation";


// GoogleHomeEnterpriseSdmV1Device
/** 
 * Device resource represents an instance of enterprise managed device in the property.
**/
export class GoogleHomeEnterpriseSdmV1Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentRelations", elemType: shared.GoogleHomeEnterpriseSdmV1ParentRelation })
  parentRelations?: GoogleHomeEnterpriseSdmV1ParentRelation[];

  @Metadata({ data: "json, name=traits" })
  traits?: Map<string, any>;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
