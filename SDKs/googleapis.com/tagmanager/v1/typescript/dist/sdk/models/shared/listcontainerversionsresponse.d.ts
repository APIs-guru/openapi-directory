import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersion } from "./containerversion";
import { ContainerVersionHeader } from "./containerversionheader";
/**
 * List container versions response.
**/
export declare class ListContainerVersionsResponse extends SpeakeasyBase {
    containerVersion?: ContainerVersion[];
    containerVersionHeader?: ContainerVersionHeader[];
}
