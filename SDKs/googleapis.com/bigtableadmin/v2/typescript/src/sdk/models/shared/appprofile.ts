import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MultiClusterRoutingUseAny } from "./multiclusterroutinguseany";
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
  multiClusterRoutingUseAny?: MultiClusterRoutingUseAny;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=singleClusterRouting" })
  singleClusterRouting?: SingleClusterRouting;
}
