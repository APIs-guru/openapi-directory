import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersionHeader } from "./containerversionheader";
/**
 * List container versions response.
**/
export declare class ListContainerVersionsResponse extends SpeakeasyBase {
    containerVersionHeader?: ContainerVersionHeader[];
    nextPageToken?: string;
}
