import { SpeakeasyBase } from "../../../internal/utils";
import { PretargetingConfig } from "./pretargetingconfig";
/**
 * A response containing pretargeting configurations.
**/
export declare class ListPretargetingConfigsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    pretargetingConfigs?: PretargetingConfig[];
}
