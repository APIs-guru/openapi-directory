import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompositeType } from "./compositetype";



// CompositeTypesListResponse
/** 
 * A response that returns all Composite Types supported by Deployment Manager
**/
export class CompositeTypesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compositeTypes", elemType: CompositeType })
  compositeTypes?: CompositeType[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
