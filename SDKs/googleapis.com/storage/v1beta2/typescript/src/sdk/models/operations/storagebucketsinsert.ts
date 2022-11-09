import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StorageBucketsInsertProjectionEnum {
    Full = "full"
,    NoAcl = "noAcl"
}


export class StorageBucketsInsertQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=project" })
  project: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: StorageBucketsInsertProjectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class StorageBucketsInsertSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsInsertSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsInsertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: StorageBucketsInsertSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: StorageBucketsInsertSecurityOption2;
}


export class StorageBucketsInsertRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StorageBucketsInsertQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Bucket;

  @Metadata()
  security: StorageBucketsInsertSecurity;
}


export class StorageBucketsInsertResponse extends SpeakeasyBase {
  @Metadata()
  bucket?: shared.Bucket;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
