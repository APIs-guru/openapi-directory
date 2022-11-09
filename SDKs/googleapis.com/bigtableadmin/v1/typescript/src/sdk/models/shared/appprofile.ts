import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SingleClusterRouting } from "./singleclusterrouting";


// AppProfile
/** 
 * A configuration object describing how Cloud Bigtable should treat traffic from a particular end user application.
**/
export class AppProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=multiClusterRoutingUseAny" })
  multiClusterRoutingUseAny?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=singleClusterRouting" })
  singleClusterRouting?: SingleClusterRouting;
}
