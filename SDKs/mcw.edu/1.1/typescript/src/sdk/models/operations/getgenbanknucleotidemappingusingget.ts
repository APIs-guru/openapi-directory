import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGenBankNucleotideMappingUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetGenBankNucleotideMappingUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGenBankNucleotideMappingUsingGetPathParams;
}


export class GetGenBankNucleotideMappingUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
