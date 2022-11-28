import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { ConfigurationSpec } from "./configurationspec";
import { ConfigurationStatus } from "./configurationstatus";
/**
 * Configuration represents the "floating HEAD" of a linear history of Revisions, and optionally how the containers those revisions reference are built. Users create new Revisions by updating the Configuration's spec. The "latest created" revision's name is available under status, as is the "latest ready" revision's name. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#configuration
**/
export declare class Configuration extends SpeakeasyBase {
    apiVersion?: string;
    kind?: string;
    metadata?: ObjectMeta;
    spec?: ConfigurationSpec;
    status?: ConfigurationStatus;
}
