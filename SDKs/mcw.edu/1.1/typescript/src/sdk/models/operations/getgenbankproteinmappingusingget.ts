import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGenBankProteinMappingUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetGenBankProteinMappingUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGenBankProteinMappingUsingGetPathParams;
}


export class GetGenBankProteinMappingUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
