import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Quota } from "./quota";


// Project
/** 
 * A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console. Next tag: 7.
**/
export class Project extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=number" })
  number?: string;

  @Metadata({ data: "json, name=quota" })
  quota?: Quota;
}
