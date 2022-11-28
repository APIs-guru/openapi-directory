import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RouteInput
/** 
 * The Route resource is the child of the PrivateConnection resource. It used to define a route for a PrivateConnection setup.
**/
export class RouteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationAddress" })
  destinationAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationPort" })
  destinationPort?: number;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}


// Route
/** 
 * The Route resource is the child of the PrivateConnection resource. It used to define a route for a PrivateConnection setup.
**/
export class Route extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationAddress" })
  destinationAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationPort" })
  destinationPort?: number;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
