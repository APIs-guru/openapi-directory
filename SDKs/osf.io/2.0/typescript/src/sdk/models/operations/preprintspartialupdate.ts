import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreprintsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=preprint_id" })
  preprintId: string;
}


export class PreprintsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PreprintsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PreprintsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
