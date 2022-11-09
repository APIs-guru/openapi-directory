import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1CustomersIdPrivacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1CustomersIdPrivacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1CustomersIdPrivacyPathParams;
}


export class GetSetupV1CustomersIdPrivacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerPrivacyViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
