import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Route
/** 
 * The route resource is the child of the private connection resource, used for defining a route for a private connection.
**/
export class Route extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=destinationAddress" })
  destinationAddress?: string;

  @Metadata({ data: "json, name=destinationPort" })
  destinationPort?: number;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
