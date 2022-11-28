import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteStatusCodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=codes" })
  codes: string;
}


export class DeleteStatusCodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteStatusCodesPathParams;
}


export class DeleteStatusCodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
