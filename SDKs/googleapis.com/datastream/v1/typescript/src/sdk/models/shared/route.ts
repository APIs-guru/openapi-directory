import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Route
/** 
 * The route resource is the child of the private connection resource, used for defining a route for a private connection.
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


// RouteInput
/** 
 * The route resource is the child of the private connection resource, used for defining a route for a private connection.
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
