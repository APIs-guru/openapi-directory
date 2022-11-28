import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApplicationPathParams;
}


export class GetApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationResponse?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getApplication401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getApplication404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getApplication405ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getApplication406ApplicationJsonAny?: any;
}
