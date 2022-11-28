import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationLoginSecurityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationLoginSecurityRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountLockoutAttempts" })
  accountLockoutAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=enforceAccountLockout" })
  enforceAccountLockout?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforceDifferentPasswords" })
  enforceDifferentPasswords?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforceIdleTimeout" })
  enforceIdleTimeout?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforceLoginIpRanges" })
  enforceLoginIpRanges?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforcePasswordExpiration" })
  enforcePasswordExpiration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforceStrongPasswords" })
  enforceStrongPasswords?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforceTwoFactorAuth" })
  enforceTwoFactorAuth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=idleTimeoutMinutes" })
  idleTimeoutMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=loginIpRanges" })
  loginIpRanges?: string[];

  @SpeakeasyMetadata({ data: "json, name=numDifferentPasswords" })
  numDifferentPasswords?: number;

  @SpeakeasyMetadata({ data: "json, name=passwordExpirationDays" })
  passwordExpirationDays?: number;
}


export class UpdateOrganizationLoginSecurityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationLoginSecurityPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationLoginSecurityRequestBody;
}


export class UpdateOrganizationLoginSecurityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationLoginSecurity200ApplicationJsonObject?: Map<string, any>;
}
