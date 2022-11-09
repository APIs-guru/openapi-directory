import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AcceleratorType } from "./acceleratortype";
/**
 * Response for ListAcceleratorTypes.
**/
export declare class ListAcceleratorTypesResponse extends SpeakeasyBase {
    acceleratorTypes?: AcceleratorType[];
    nextPageToken?: string;
    unreachable?: string[];
}
