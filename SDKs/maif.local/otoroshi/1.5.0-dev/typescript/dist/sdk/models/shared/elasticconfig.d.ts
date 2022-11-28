import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for elastic access
**/
export declare class ElasticConfig extends SpeakeasyBase {
    clusterUri: string;
    headers: Map<string, string>;
    index: string;
    password: string;
    type: string;
    user: string;
}
