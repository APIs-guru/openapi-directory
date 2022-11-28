import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1Rule } from "./googlecloudassetv1rule";
/**
 * This organization policy message is a modified version of the one defined in the OrgPolicy system. This message contains several fields defined in the original organization policy with some new fields for analysis purpose.
**/
export declare class AnalyzerOrgPolicy extends SpeakeasyBase {
    appliedResource?: string;
    attachedResource?: string;
    inheritFromParent?: boolean;
    reset?: boolean;
    rules?: GoogleCloudAssetV1Rule[];
}
