import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectMeta } from "./objectmeta";
import { RouteSpec } from "./routespec";
import { RouteStatus } from "./routestatus";


// Route
/** 
 * Route is responsible for configuring ingress over a collection of Revisions. Some of the Revisions a Route distributes traffic over may be specified by referencing the Configuration responsible for creating them; in these cases the Route is additionally responsible for monitoring the Configuration for "latest ready" revision changes, and smoothly rolling out latest revisions. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#route Cloud Run currently supports referencing a single Configuration to automatically deploy the "latest ready" Revision from that Configuration.
**/
export class Route extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ObjectMeta;

  @Metadata({ data: "json, name=spec" })
  spec?: RouteSpec;

  @Metadata({ data: "json, name=status" })
  status?: RouteStatus;
}
