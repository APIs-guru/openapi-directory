import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AcceleratorType } from "./acceleratortype";


// ListAcceleratorTypesResponse
/** 
 * Response for ListAcceleratorTypes.
**/
export class ListAcceleratorTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceleratorTypes", elemType: shared.AcceleratorType })
  acceleratorTypes?: AcceleratorType[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
