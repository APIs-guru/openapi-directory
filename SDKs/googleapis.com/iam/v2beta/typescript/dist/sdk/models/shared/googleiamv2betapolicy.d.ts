import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleIamV2betaPolicyRule } from "./googleiamv2betapolicyrule";
/**
 * Data for an IAM policy.
**/
export declare class GoogleIamV2betaPolicy extends SpeakeasyBase {
    annotations?: Map<string, string>;
    createTime?: string;
    deleteTime?: string;
    displayName?: string;
    etag?: string;
    kind?: string;
    name?: string;
    rules?: GoogleIamV2betaPolicyRule[];
    uid?: string;
    updateTime?: string;
}
