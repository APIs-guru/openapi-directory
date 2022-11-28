import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExtrasReportsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ExtrasReportsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasReportsReadPathParams;
}


export class ExtrasReportsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
