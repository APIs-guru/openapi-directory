import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TensorFlowVersion } from "./tensorflowversion";
/**
 * Response for ListTensorFlowVersions.
**/
export declare class ListTensorFlowVersionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tensorflowVersions?: TensorFlowVersion[];
    unreachable?: string[];
}
