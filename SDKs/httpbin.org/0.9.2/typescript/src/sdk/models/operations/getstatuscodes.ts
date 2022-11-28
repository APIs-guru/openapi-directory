import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStatusCodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=codes" })
  codes: string;
}


export class GetStatusCodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStatusCodesPathParams;
}


export class GetStatusCodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
