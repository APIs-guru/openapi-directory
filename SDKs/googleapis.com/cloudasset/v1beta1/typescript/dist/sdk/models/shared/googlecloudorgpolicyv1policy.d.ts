import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV1BooleanPolicy } from "./googlecloudorgpolicyv1booleanpolicy";
import { GoogleCloudOrgpolicyV1ListPolicy } from "./googlecloudorgpolicyv1listpolicy";
/**
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
export declare class GoogleCloudOrgpolicyV1Policy extends SpeakeasyBase {
    booleanPolicy?: GoogleCloudOrgpolicyV1BooleanPolicy;
    constraint?: string;
    etag?: string;
    listPolicy?: GoogleCloudOrgpolicyV1ListPolicy;
    restoreDefault?: Map<string, any>;
    updateTime?: string;
    version?: number;
}
