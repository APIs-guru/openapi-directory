import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersionHeader } from "./containerversionheader";



// ListContainerVersionsResponse
/** 
 * List container versions response.
**/
export class ListContainerVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerVersionHeader", elemType: ContainerVersionHeader })
  containerVersionHeader?: ContainerVersionHeader[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
