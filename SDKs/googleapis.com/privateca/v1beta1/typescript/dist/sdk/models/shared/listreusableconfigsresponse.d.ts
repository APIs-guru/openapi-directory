import { SpeakeasyBase } from "../../../internal/utils";
import { ReusableConfig } from "./reusableconfig";
/**
 * Response message for CertificateAuthorityService.ListReusableConfigs.
**/
export declare class ListReusableConfigsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    reusableConfigs?: ReusableConfig[];
    unreachable?: string[];
}
