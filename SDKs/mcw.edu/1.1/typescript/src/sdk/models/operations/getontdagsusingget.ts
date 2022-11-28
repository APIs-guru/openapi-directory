import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOntDagsUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;
}


export class GetOntDagsUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOntDagsUsingGetPathParams;
}


export class GetOntDagsUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
