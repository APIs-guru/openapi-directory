import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGenBankProteinMappingUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetGenBankProteinMappingUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGenBankProteinMappingUsingGetPathParams;
}


export class GetGenBankProteinMappingUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
