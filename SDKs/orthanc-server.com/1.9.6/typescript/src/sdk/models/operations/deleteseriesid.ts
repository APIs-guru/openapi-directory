import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSeriesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSeriesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSeriesIdPathParams;
}


export class DeleteSeriesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
