import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtrasReportsRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ExtrasReportsRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasReportsRunPathParams;
}


export class ExtrasReportsRunResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
