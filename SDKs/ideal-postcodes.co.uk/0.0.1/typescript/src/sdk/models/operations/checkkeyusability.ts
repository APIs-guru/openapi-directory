import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckKeyUsabilityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class CheckKeyUsabilityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=user_token" })
  userToken?: string;
}


export class CheckKeyUsabilitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class CheckKeyUsabilityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckKeyUsabilityPathParams;

  @Metadata()
  queryParams: CheckKeyUsabilityQueryParams;

  @Metadata()
  security: CheckKeyUsabilitySecurity;
}


export class CheckKeyUsabilityResponse extends SpeakeasyBase {
  @Metadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @Metadata()
  contentType: string;

  @Metadata()
  keyUsabilityResponseSchema?: shared.KeyUsabilityResponseSchema;

  @Metadata()
  statusCode: number;
}
