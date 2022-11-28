import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1ContentNotebook } from "./googleclouddataplexv1contentnotebook";
import { GoogleCloudDataplexV1ContentSqlScript } from "./googleclouddataplexv1contentsqlscript";
/**
 * Content represents a user-visible notebook or a sql script
**/
export declare class GoogleCloudDataplexV1ContentInput extends SpeakeasyBase {
    dataText?: string;
    description?: string;
    labels?: Map<string, string>;
    notebook?: GoogleCloudDataplexV1ContentNotebook;
    path?: string;
    sqlScript?: GoogleCloudDataplexV1ContentSqlScript;
}
/**
 * Content represents a user-visible notebook or a sql script
**/
export declare class GoogleCloudDataplexV1Content extends SpeakeasyBase {
    createTime?: string;
    dataText?: string;
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    notebook?: GoogleCloudDataplexV1ContentNotebook;
    path?: string;
    sqlScript?: GoogleCloudDataplexV1ContentSqlScript;
    uid?: string;
    updateTime?: string;
}
