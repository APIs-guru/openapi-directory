import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutStatusCodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=codes" })
  codes: string;
}


export class PutStatusCodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutStatusCodesPathParams;
}


export class PutStatusCodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
