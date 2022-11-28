import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckKeyUsabilityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class CheckKeyUsabilityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_token" })
  userToken?: string;
}


export class CheckKeyUsabilitySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class CheckKeyUsabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CheckKeyUsabilityPathParams;

  @SpeakeasyMetadata()
  queryParams: CheckKeyUsabilityQueryParams;

  @SpeakeasyMetadata()
  security: CheckKeyUsabilitySecurity;
}


export class CheckKeyUsabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  keyUsabilityResponseSchema?: shared.KeyUsabilityResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
