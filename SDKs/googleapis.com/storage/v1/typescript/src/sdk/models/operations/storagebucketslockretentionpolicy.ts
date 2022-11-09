import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageBucketsLockRetentionPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;
}


export class StorageBucketsLockRetentionPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" })
  ifMetagenerationMatch: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;
}


export class StorageBucketsLockRetentionPolicySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsLockRetentionPolicySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsLockRetentionPolicySecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsLockRetentionPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: StorageBucketsLockRetentionPolicySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: StorageBucketsLockRetentionPolicySecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: StorageBucketsLockRetentionPolicySecurityOption3;
}


export class StorageBucketsLockRetentionPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageBucketsLockRetentionPolicyPathParams;

  @Metadata()
  queryParams: StorageBucketsLockRetentionPolicyQueryParams;

  @Metadata()
  security: StorageBucketsLockRetentionPolicySecurity;
}


export class StorageBucketsLockRetentionPolicyResponse extends SpeakeasyBase {
  @Metadata()
  bucket?: shared.Bucket;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
