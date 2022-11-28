import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGeneByMapKeyUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mapKey" })
  mapKey: number;
}


export class GetGeneByMapKeyUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGeneByMapKeyUsingGetPathParams;
}


export class GetGeneByMapKeyUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
