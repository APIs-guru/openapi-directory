import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtrasReportsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ExtrasReportsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasReportsReadPathParams;
}


export class ExtrasReportsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
