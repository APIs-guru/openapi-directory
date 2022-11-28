import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSetupV1CustomersIdPrivacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1CustomersIdPrivacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1CustomersIdPrivacyPathParams;
}


export class GetSetupV1CustomersIdPrivacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerPrivacyViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
