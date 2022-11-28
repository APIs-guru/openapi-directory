import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteApplicationPathParams;
}


export class DeleteApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteApplication401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  deleteApplication404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  deleteApplication405ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  deleteApplication406ApplicationJsonAny?: any;
}
