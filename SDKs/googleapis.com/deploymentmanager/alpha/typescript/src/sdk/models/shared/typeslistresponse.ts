import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Type } from "./type";


// TypesListResponse
/** 
 * A response that returns all Types supported by Deployment Manager
**/
export class TypesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=types", elemType: shared.Type })
  types?: Type[];
}
