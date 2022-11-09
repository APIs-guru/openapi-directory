import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationLoginSecurityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationLoginSecurityRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountLockoutAttempts" })
  accountLockoutAttempts?: number;

  @Metadata({ data: "json, name=enforceAccountLockout" })
  enforceAccountLockout?: boolean;

  @Metadata({ data: "json, name=enforceDifferentPasswords" })
  enforceDifferentPasswords?: boolean;

  @Metadata({ data: "json, name=enforceIdleTimeout" })
  enforceIdleTimeout?: boolean;

  @Metadata({ data: "json, name=enforceLoginIpRanges" })
  enforceLoginIpRanges?: boolean;

  @Metadata({ data: "json, name=enforcePasswordExpiration" })
  enforcePasswordExpiration?: boolean;

  @Metadata({ data: "json, name=enforceStrongPasswords" })
  enforceStrongPasswords?: boolean;

  @Metadata({ data: "json, name=enforceTwoFactorAuth" })
  enforceTwoFactorAuth?: boolean;

  @Metadata({ data: "json, name=idleTimeoutMinutes" })
  idleTimeoutMinutes?: number;

  @Metadata({ data: "json, name=loginIpRanges" })
  loginIpRanges?: string[];

  @Metadata({ data: "json, name=numDifferentPasswords" })
  numDifferentPasswords?: number;

  @Metadata({ data: "json, name=passwordExpirationDays" })
  passwordExpirationDays?: number;
}


export class UpdateOrganizationLoginSecurityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationLoginSecurityPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationLoginSecurityRequestBody;
}


export class UpdateOrganizationLoginSecurityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationLoginSecurity200ApplicationJsonObject?: Map<string, any>;
}
