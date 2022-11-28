import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1ValueMatcher } from "./googlecloudrecommenderv1valuematcher";
/**
 * Contains an operation for a resource loosely based on the JSON-PATCH format with support for: * Custom filters for describing partial array patch. * Extended path values for describing nested arrays. * Custom fields for describing the resource for which the operation is being described. * Allows extension to custom operations not natively supported by RFC6902. See https://tools.ietf.org/html/rfc6902 for details on the original RFC.
**/
export declare class GoogleCloudRecommenderV1Operation extends SpeakeasyBase {
    action?: string;
    path?: string;
    pathFilters?: Map<string, any>;
    pathValueMatchers?: Map<string, GoogleCloudRecommenderV1ValueMatcher>;
    resource?: string;
    resourceType?: string;
    sourcePath?: string;
    sourceResource?: string;
    value?: any;
    valueMatcher?: GoogleCloudRecommenderV1ValueMatcher;
}
