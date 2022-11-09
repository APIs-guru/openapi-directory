import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Container } from "./container";


// ListContainersResponse
/** 
 * List Containers Response.
**/
export class ListContainersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=containers", elemType: shared.Container })
  containers?: Container[];
}
