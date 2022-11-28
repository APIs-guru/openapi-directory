import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Quota } from "./quota";



// Project
/** 
 * A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console. Next tag: 7.
**/
export class Project extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: Quota;
}
