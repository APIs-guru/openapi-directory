import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleIamV2betaPolicyRule } from "./googleiamv2betapolicyrule";
/**
 * Data for an IAM policy.
**/
export declare class GoogleIamV2betaPolicyInput extends SpeakeasyBase {
    annotations?: Map<string, string>;
    displayName?: string;
    etag?: string;
    name?: string;
    rules?: GoogleIamV2betaPolicyRule[];
    uid?: string;
}
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
