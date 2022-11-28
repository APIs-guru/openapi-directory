import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";



export class ListEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoints", elemType: Endpoint })
  endpoints?: Endpoint[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
