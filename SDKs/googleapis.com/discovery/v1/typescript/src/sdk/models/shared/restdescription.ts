import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RestMethod } from "./restmethod";
import { JsonSchema } from "./jsonschema";
import { RestResource } from "./restresource";



// RestDescriptionAuthOauth2Scopes
/** 
 * The scope value.
**/
export class RestDescriptionAuthOauth2Scopes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}


// RestDescriptionAuthOauth2
/** 
 * OAuth 2.0 authentication information.
**/
export class RestDescriptionAuthOauth2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scopes", elemType: RestDescriptionAuthOauth2Scopes })
  scopes?: Map<string, RestDescriptionAuthOauth2Scopes>;
}


// RestDescriptionAuth
/** 
 * Authentication information.
**/
export class RestDescriptionAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oauth2" })
  oauth2?: RestDescriptionAuthOauth2;
}


// RestDescriptionIcons
/** 
 * Links to 16x16 and 32x32 icons representing the API.
**/
export class RestDescriptionIcons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=x16" })
  x16?: string;

  @SpeakeasyMetadata({ data: "json, name=x32" })
  x32?: string;
}


export class RestDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth" })
  auth?: RestDescriptionAuth;

  @SpeakeasyMetadata({ data: "json, name=basePath" })
  basePath?: string;

  @SpeakeasyMetadata({ data: "json, name=baseUrl" })
  baseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=batchPath" })
  batchPath?: string;

  @SpeakeasyMetadata({ data: "json, name=canonicalName" })
  canonicalName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discoveryVersion" })
  discoveryVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=documentationLink" })
  documentationLink?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=exponentialBackoffDefault" })
  exponentialBackoffDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: string[];

  @SpeakeasyMetadata({ data: "json, name=icons" })
  icons?: RestDescriptionIcons;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=methods", elemType: RestMethod })
  methods?: Map<string, RestMethod>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerDomain" })
  ownerDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerName" })
  ownerName?: string;

  @SpeakeasyMetadata({ data: "json, name=packagePath" })
  packagePath?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: JsonSchema })
  parameters?: Map<string, JsonSchema>;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: RestResource })
  resources?: Map<string, RestResource>;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;

  @SpeakeasyMetadata({ data: "json, name=rootUrl" })
  rootUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=schemas", elemType: JsonSchema })
  schemas?: Map<string, JsonSchema>;

  @SpeakeasyMetadata({ data: "json, name=servicePath" })
  servicePath?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=version_module" })
  versionModule?: boolean;
}
