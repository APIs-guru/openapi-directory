import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreprintProviderLicensesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=preprint_provider_id" })
  preprintProviderId: string;
}


export class PreprintProviderLicensesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PreprintProviderLicensesListPathParams;
}


export class PreprintProviderLicensesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
