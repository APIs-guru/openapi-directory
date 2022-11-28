import { SpeakeasyBase } from "../../../internal/utils";
import { RestMethod } from "./restmethod";
import { JsonSchema } from "./jsonschema";
import { RestResource } from "./restresource";
/**
 * The scope value.
**/
export declare class RestDescriptionAuthOauth2Scopes extends SpeakeasyBase {
    description?: string;
}
/**
 * OAuth 2.0 authentication information.
**/
export declare class RestDescriptionAuthOauth2 extends SpeakeasyBase {
    scopes?: Map<string, RestDescriptionAuthOauth2Scopes>;
}
/**
 * Authentication information.
**/
export declare class RestDescriptionAuth extends SpeakeasyBase {
    oauth2?: RestDescriptionAuthOauth2;
}
/**
 * Links to 16x16 and 32x32 icons representing the API.
**/
export declare class RestDescriptionIcons extends SpeakeasyBase {
    x16?: string;
    x32?: string;
}
export declare class RestDescription extends SpeakeasyBase {
    auth?: RestDescriptionAuth;
    basePath?: string;
    baseUrl?: string;
    batchPath?: string;
    canonicalName?: string;
    description?: string;
    discoveryVersion?: string;
    documentationLink?: string;
    etag?: string;
    exponentialBackoffDefault?: boolean;
    features?: string[];
    icons?: RestDescriptionIcons;
    id?: string;
    kind?: string;
    labels?: string[];
    methods?: Map<string, RestMethod>;
    name?: string;
    ownerDomain?: string;
    ownerName?: string;
    packagePath?: string;
    parameters?: Map<string, JsonSchema>;
    protocol?: string;
    resources?: Map<string, RestResource>;
    revision?: string;
    rootUrl?: string;
    schemas?: Map<string, JsonSchema>;
    servicePath?: string;
    title?: string;
    version?: string;
    versionModule?: boolean;
}
