import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClaimIntoOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum ClaimIntoOrganizationRequestBodyLicensesModeEnum {
    AddDevices = "addDevices",
    Renew = "renew"
}


export class ClaimIntoOrganizationRequestBodyLicenses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: ClaimIntoOrganizationRequestBodyLicensesModeEnum;
}


export class ClaimIntoOrganizationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=licenses", elemType: ClaimIntoOrganizationRequestBodyLicenses })
  licenses?: ClaimIntoOrganizationRequestBodyLicenses[];

  @SpeakeasyMetadata({ data: "json, name=orders" })
  orders?: string[];

  @SpeakeasyMetadata({ data: "json, name=serials" })
  serials?: string[];
}


export class ClaimIntoOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClaimIntoOrganizationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ClaimIntoOrganizationRequestBody;
}


export class ClaimIntoOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  claimIntoOrganization200ApplicationJsonObject?: Map<string, any>;
}
