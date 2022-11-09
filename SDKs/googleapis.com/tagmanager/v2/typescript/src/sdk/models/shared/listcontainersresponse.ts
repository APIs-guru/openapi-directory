import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Container } from "./container";


// ListContainersResponse
/** 
 * List Containers Response.
**/
export class ListContainersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=container", elemType: shared.Container })
  container?: Container[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
