import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Type } from "./type";



// TypesListResponse
/** 
 * A response that returns all Types supported by Deployment Manager
**/
export class TypesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=types", elemType: Type })
  types?: Type[];
}
