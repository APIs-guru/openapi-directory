import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRangeNumbytesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=numbytes" })
  numbytes: number;
}


export class GetRangeNumbytesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRangeNumbytesPathParams;
}


export class GetRangeNumbytesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
