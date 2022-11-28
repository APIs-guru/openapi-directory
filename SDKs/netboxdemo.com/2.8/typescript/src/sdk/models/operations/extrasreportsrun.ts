import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExtrasReportsRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ExtrasReportsRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasReportsRunPathParams;
}


export class ExtrasReportsRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
