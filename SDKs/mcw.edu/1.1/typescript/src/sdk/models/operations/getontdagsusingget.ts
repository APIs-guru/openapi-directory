import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOntDagsUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;
}


export class GetOntDagsUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOntDagsUsingGetPathParams;
}


export class GetOntDagsUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
