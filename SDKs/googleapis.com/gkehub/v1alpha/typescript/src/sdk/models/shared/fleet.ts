import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetLifecycleState } from "./fleetlifecyclestate";


// Fleet
/** 
 * Fleet contains the Fleet-wide metadata and configuration.
**/
export class Fleet extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: FleetLifecycleState;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
