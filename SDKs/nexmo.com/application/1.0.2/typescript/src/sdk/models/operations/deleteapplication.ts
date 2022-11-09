import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class DeleteApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteApplicationPathParams;
}


export class DeleteApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
