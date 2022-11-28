import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A session in the Cloud Spanner API.
**/
export declare class SessionInput extends SpeakeasyBase {
    creatorRole?: string;
    labels?: Map<string, string>;
}
/**
 * A session in the Cloud Spanner API.
**/
export declare class Session extends SpeakeasyBase {
    approximateLastUseTime?: string;
    createTime?: string;
    creatorRole?: string;
    labels?: Map<string, string>;
    name?: string;
}
