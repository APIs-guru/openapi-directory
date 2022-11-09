import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CompositeType } from "./compositetype";


// CompositeTypesListResponse
/** 
 * A response that returns all Composite Types supported by Deployment Manager
**/
export class CompositeTypesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=compositeTypes", elemType: shared.CompositeType })
  compositeTypes?: CompositeType[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
