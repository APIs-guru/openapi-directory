import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClaimIntoOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum ClaimIntoOrganizationRequestBodyLicensesModeEnum {
    AddDevices = "addDevices"
,    Renew = "renew"
}


export class ClaimIntoOrganizationRequestBodyLicenses extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=mode" })
  mode?: ClaimIntoOrganizationRequestBodyLicensesModeEnum;
}


export class ClaimIntoOrganizationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=licenses", elemType: operations.ClaimIntoOrganizationRequestBodyLicenses })
  licenses?: ClaimIntoOrganizationRequestBodyLicenses[];

  @Metadata({ data: "json, name=orders" })
  orders?: string[];

  @Metadata({ data: "json, name=serials" })
  serials?: string[];
}


export class ClaimIntoOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClaimIntoOrganizationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ClaimIntoOrganizationRequestBody;
}


export class ClaimIntoOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  claimIntoOrganization200ApplicationJsonObject?: Map<string, any>;
}
