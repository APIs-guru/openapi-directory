import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
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

  @Metadata()
  deleteApplication401ApplicationJsonAny?: any;

  @Metadata()
  deleteApplication404ApplicationJsonAny?: any;

  @Metadata()
  deleteApplication405ApplicationJsonAny?: any;

  @Metadata()
  deleteApplication406ApplicationJsonAny?: any;
}
