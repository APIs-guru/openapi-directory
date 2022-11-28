import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTermUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;
}


export class GetTermUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTermUsingGetPathParams;
}


export class GetTermUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
