import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SpannerProjectsInstancesBackupsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum {
    EncryptionTypeUnspecified = "ENCRYPTION_TYPE_UNSPECIFIED",
    UseDatabaseEncryption = "USE_DATABASE_ENCRYPTION",
    GoogleDefaultEncryption = "GOOGLE_DEFAULT_ENCRYPTION",
    CustomerManagedEncryption = "CUSTOMER_MANAGED_ENCRYPTION"
}


export class SpannerProjectsInstancesBackupsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=backupId" })
  backupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=encryptionConfig.encryptionType" })
  encryptionConfigEncryptionType?: SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=encryptionConfig.kmsKeyName" })
  encryptionConfigKmsKeyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class SpannerProjectsInstancesBackupsCreateSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SpannerProjectsInstancesBackupsCreateSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SpannerProjectsInstancesBackupsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: SpannerProjectsInstancesBackupsCreateSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: SpannerProjectsInstancesBackupsCreateSecurityOption2;
}


export class SpannerProjectsInstancesBackupsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SpannerProjectsInstancesBackupsCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: SpannerProjectsInstancesBackupsCreateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BackupInput;

  @SpeakeasyMetadata()
  security: SpannerProjectsInstancesBackupsCreateSecurity;
}


export class SpannerProjectsInstancesBackupsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operation?: shared.Operation;

  @SpeakeasyMetadata()
  statusCode: number;
}
