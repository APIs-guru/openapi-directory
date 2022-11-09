import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RestMethod } from "./restmethod";
import { JsonSchema } from "./jsonschema";
import { RestResource } from "./restresource";
import { JsonSchema } from "./jsonschema";


// RestDescriptionAuthOauth2Scopes
/** 
 * The scope value.
**/
export class RestDescriptionAuthOauth2Scopes extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;
}


// RestDescriptionAuthOauth2
/** 
 * OAuth 2.0 authentication information.
**/
export class RestDescriptionAuthOauth2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=scopes", elemType: shared.RestDescriptionAuthOauth2Scopes })
  scopes?: Map<string, RestDescriptionAuthOauth2Scopes>;
}


// RestDescriptionAuth
/** 
 * Authentication information.
**/
export class RestDescriptionAuth extends SpeakeasyBase {
  @Metadata({ data: "json, name=oauth2" })
  oauth2?: RestDescriptionAuthOauth2;
}


// RestDescriptionIcons
/** 
 * Links to 16x16 and 32x32 icons representing the API.
**/
export class RestDescriptionIcons extends SpeakeasyBase {
  @Metadata({ data: "json, name=x16" })
  x16?: string;

  @Metadata({ data: "json, name=x32" })
  x32?: string;
}


export class RestDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth" })
  auth?: RestDescriptionAuth;

  @Metadata({ data: "json, name=basePath" })
  basePath?: string;

  @Metadata({ data: "json, name=baseUrl" })
  baseUrl?: string;

  @Metadata({ data: "json, name=batchPath" })
  batchPath?: string;

  @Metadata({ data: "json, name=canonicalName" })
  canonicalName?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=discoveryVersion" })
  discoveryVersion?: string;

  @Metadata({ data: "json, name=documentationLink" })
  documentationLink?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=exponentialBackoffDefault" })
  exponentialBackoffDefault?: boolean;

  @Metadata({ data: "json, name=features" })
  features?: string[];

  @Metadata({ data: "json, name=icons" })
  icons?: RestDescriptionIcons;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: string[];

  @Metadata({ data: "json, name=methods", elemType: shared.RestMethod })
  methods?: Map<string, RestMethod>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ownerDomain" })
  ownerDomain?: string;

  @Metadata({ data: "json, name=ownerName" })
  ownerName?: string;

  @Metadata({ data: "json, name=packagePath" })
  packagePath?: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.JsonSchema })
  parameters?: Map<string, JsonSchema>;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.RestResource })
  resources?: Map<string, RestResource>;

  @Metadata({ data: "json, name=revision" })
  revision?: string;

  @Metadata({ data: "json, name=rootUrl" })
  rootUrl?: string;

  @Metadata({ data: "json, name=schemas", elemType: shared.JsonSchema })
  schemas?: Map<string, JsonSchema>;

  @Metadata({ data: "json, name=servicePath" })
  servicePath?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=version_module" })
  versionModule?: boolean;
}
