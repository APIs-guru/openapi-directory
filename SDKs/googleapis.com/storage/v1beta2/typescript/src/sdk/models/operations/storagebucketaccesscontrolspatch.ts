import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageBucketAccessControlsPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=entity" })
  entity: string;
}


export class StorageBucketAccessControlsPatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class StorageBucketAccessControlsPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketAccessControlsPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageBucketAccessControlsPatchPathParams;

  @Metadata()
  queryParams: StorageBucketAccessControlsPatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BucketAccessControl;

  @Metadata()
  security: StorageBucketAccessControlsPatchSecurity;
}


export class StorageBucketAccessControlsPatchResponse extends SpeakeasyBase {
  @Metadata()
  bucketAccessControl?: shared.BucketAccessControl;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
