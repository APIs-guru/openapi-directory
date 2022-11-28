import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGenBankNucleotideMappingUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetGenBankNucleotideMappingUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGenBankNucleotideMappingUsingGetPathParams;
}


export class GetGenBankNucleotideMappingUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
