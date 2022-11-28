import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1ValueMatcher } from "./googlecloudrecommenderv1valuematcher";



// GoogleCloudRecommenderV1Operation
/** 
 * Contains an operation for a resource loosely based on the JSON-PATCH format with support for: * Custom filters for describing partial array patch. * Extended path values for describing nested arrays. * Custom fields for describing the resource for which the operation is being described. * Allows extension to custom operations not natively supported by RFC6902. See https://tools.ietf.org/html/rfc6902 for details on the original RFC.
**/
export class GoogleCloudRecommenderV1Operation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=pathFilters" })
  pathFilters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=pathValueMatchers", elemType: GoogleCloudRecommenderV1ValueMatcher })
  pathValueMatchers?: Map<string, GoogleCloudRecommenderV1ValueMatcher>;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=sourcePath" })
  sourcePath?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceResource" })
  sourceResource?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;

  @SpeakeasyMetadata({ data: "json, name=valueMatcher" })
  valueMatcher?: GoogleCloudRecommenderV1ValueMatcher;
}
