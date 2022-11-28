import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSeriesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSeriesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSeriesIdPathParams;
}


export class DeleteSeriesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
