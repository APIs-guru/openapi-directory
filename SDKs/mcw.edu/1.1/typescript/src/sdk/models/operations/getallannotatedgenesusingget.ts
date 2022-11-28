import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAllAnnotatedGenesUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;
}


export class GetAllAnnotatedGenesUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllAnnotatedGenesUsingGetPathParams;
}


export class GetAllAnnotatedGenesUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
