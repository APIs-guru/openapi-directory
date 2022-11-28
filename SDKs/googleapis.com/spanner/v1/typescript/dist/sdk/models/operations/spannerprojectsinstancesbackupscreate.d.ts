import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesBackupsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum {
    EncryptionTypeUnspecified = "ENCRYPTION_TYPE_UNSPECIFIED",
    UseDatabaseEncryption = "USE_DATABASE_ENCRYPTION",
    GoogleDefaultEncryption = "GOOGLE_DEFAULT_ENCRYPTION",
    CustomerManagedEncryption = "CUSTOMER_MANAGED_ENCRYPTION"
}
export declare class SpannerProjectsInstancesBackupsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    backupId?: string;
    callback?: string;
    encryptionConfigEncryptionType?: SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum;
    encryptionConfigKmsKeyName?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SpannerProjectsInstancesBackupsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesBackupsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesBackupsCreateSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesBackupsCreateSecurityOption1;
    option2?: SpannerProjectsInstancesBackupsCreateSecurityOption2;
}
export declare class SpannerProjectsInstancesBackupsCreateRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesBackupsCreatePathParams;
    queryParams: SpannerProjectsInstancesBackupsCreateQueryParams;
    request?: shared.BackupInput;
    security: SpannerProjectsInstancesBackupsCreateSecurity;
}
export declare class SpannerProjectsInstancesBackupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
