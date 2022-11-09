import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApplicationPathParams;
}


export class GetApplicationResponse extends SpeakeasyBase {
  @Metadata()
  applicationResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getApplication401ApplicationJsonAny?: any;

  @Metadata()
  getApplication404ApplicationJsonAny?: any;

  @Metadata()
  getApplication405ApplicationJsonAny?: any;

  @Metadata()
  getApplication406ApplicationJsonAny?: any;
}
