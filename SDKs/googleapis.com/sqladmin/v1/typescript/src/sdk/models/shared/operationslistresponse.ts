import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Operation } from "./operation";


// OperationsListResponse
/** 
 * Operations list response.
**/
export class OperationsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Operation })
  items?: Operation[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
