import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContainerVersion } from "./containerversion";
import { ContainerVersionHeader } from "./containerversionheader";


// ListContainerVersionsResponse
/** 
 * List container versions response.
**/
export class ListContainerVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerVersion", elemType: shared.ContainerVersion })
  containerVersion?: ContainerVersion[];

  @Metadata({ data: "json, name=containerVersionHeader", elemType: shared.ContainerVersionHeader })
  containerVersionHeader?: ContainerVersionHeader[];
}
