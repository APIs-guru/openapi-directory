import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommenderV1ValueMatcher } from "./googlecloudrecommenderv1valuematcher";
import { GoogleCloudRecommenderV1ValueMatcher } from "./googlecloudrecommenderv1valuematcher";


// GoogleCloudRecommenderV1Operation
/** 
 * Contains an operation for a resource loosely based on the JSON-PATCH format with support for: * Custom filters for describing partial array patch. * Extended path values for describing nested arrays. * Custom fields for describing the resource for which the operation is being described. * Allows extension to custom operations not natively supported by RFC6902. See https://tools.ietf.org/html/rfc6902 for details on the original RFC.
**/
export class GoogleCloudRecommenderV1Operation extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=pathFilters" })
  pathFilters?: Map<string, any>;

  @Metadata({ data: "json, name=pathValueMatchers", elemType: shared.GoogleCloudRecommenderV1ValueMatcher })
  pathValueMatchers?: Map<string, GoogleCloudRecommenderV1ValueMatcher>;

  @Metadata({ data: "json, name=resource" })
  resource?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=sourcePath" })
  sourcePath?: string;

  @Metadata({ data: "json, name=sourceResource" })
  sourceResource?: string;

  @Metadata({ data: "json, name=value" })
  value?: any;

  @Metadata({ data: "json, name=valueMatcher" })
  valueMatcher?: GoogleCloudRecommenderV1ValueMatcher;
}
