import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorType } from "./acceleratortype";



// ListAcceleratorTypesResponse
/** 
 * Response for ListAcceleratorTypes.
**/
export class ListAcceleratorTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorTypes", elemType: AcceleratorType })
  acceleratorTypes?: AcceleratorType[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
