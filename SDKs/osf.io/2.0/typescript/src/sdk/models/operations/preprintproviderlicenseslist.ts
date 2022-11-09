import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreprintProviderLicensesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=preprint_provider_id" })
  preprintProviderId: string;
}


export class PreprintProviderLicensesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PreprintProviderLicensesListPathParams;
}


export class PreprintProviderLicensesListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
