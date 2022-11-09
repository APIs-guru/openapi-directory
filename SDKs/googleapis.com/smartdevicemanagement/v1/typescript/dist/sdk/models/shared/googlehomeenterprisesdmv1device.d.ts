import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleHomeEnterpriseSdmV1ParentRelation } from "./googlehomeenterprisesdmv1parentrelation";
/**
 * Device resource represents an instance of enterprise managed device in the property.
**/
export declare class GoogleHomeEnterpriseSdmV1Device extends SpeakeasyBase {
    name?: string;
    parentRelations?: GoogleHomeEnterpriseSdmV1ParentRelation[];
    traits?: Map<string, any>;
    type?: string;
}
