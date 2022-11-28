import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersion } from "./containerversion";
import { ContainerVersionHeader } from "./containerversionheader";



// ListContainerVersionsResponse
/** 
 * List container versions response.
**/
export class ListContainerVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerVersion", elemType: ContainerVersion })
  containerVersion?: ContainerVersion[];

  @SpeakeasyMetadata({ data: "json, name=containerVersionHeader", elemType: ContainerVersionHeader })
  containerVersionHeader?: ContainerVersionHeader[];
}
