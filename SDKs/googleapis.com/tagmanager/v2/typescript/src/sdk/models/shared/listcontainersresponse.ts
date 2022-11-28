import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";



// ListContainersResponse
/** 
 * List Containers Response.
**/
export class ListContainersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=container", elemType: Container })
  container?: Container[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
