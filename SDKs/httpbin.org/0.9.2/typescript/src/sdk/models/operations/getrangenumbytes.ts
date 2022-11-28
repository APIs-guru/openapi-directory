import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRangeNumbytesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=numbytes" })
  numbytes: number;
}


export class GetRangeNumbytesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRangeNumbytesPathParams;
}


export class GetRangeNumbytesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
