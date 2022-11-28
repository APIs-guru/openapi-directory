import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SingleClusterRouting } from "./singleclusterrouting";



// AppProfile
/** 
 * A configuration object describing how Cloud Bigtable should treat traffic from a particular end user application.
**/
export class AppProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=multiClusterRoutingUseAny" })
  multiClusterRoutingUseAny?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=singleClusterRouting" })
  singleClusterRouting?: SingleClusterRouting;
}
