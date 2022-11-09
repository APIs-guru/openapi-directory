import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SpannerProjectsInstancesBackupsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum {
    EncryptionTypeUnspecified = "ENCRYPTION_TYPE_UNSPECIFIED"
,    UseDatabaseEncryption = "USE_DATABASE_ENCRYPTION"
,    GoogleDefaultEncryption = "GOOGLE_DEFAULT_ENCRYPTION"
,    CustomerManagedEncryption = "CUSTOMER_MANAGED_ENCRYPTION"
}


export class SpannerProjectsInstancesBackupsCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=backupId" })
  backupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=encryptionConfig.encryptionType" })
  encryptionConfigEncryptionType?: SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=encryptionConfig.kmsKeyName" })
  encryptionConfigKmsKeyName?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class SpannerProjectsInstancesBackupsCreateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SpannerProjectsInstancesBackupsCreateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SpannerProjectsInstancesBackupsCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SpannerProjectsInstancesBackupsCreateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SpannerProjectsInstancesBackupsCreateSecurityOption2;
}


export class SpannerProjectsInstancesBackupsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SpannerProjectsInstancesBackupsCreatePathParams;

  @Metadata()
  queryParams: SpannerProjectsInstancesBackupsCreateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Backup;

  @Metadata()
  security: SpannerProjectsInstancesBackupsCreateSecurity;
}


export class SpannerProjectsInstancesBackupsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operation?: shared.Operation;

  @Metadata()
  statusCode: number;
}
