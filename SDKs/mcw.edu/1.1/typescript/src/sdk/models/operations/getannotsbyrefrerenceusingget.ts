import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAnnotsByRefrerenceUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=refRgdId" })
  refRgdId: number;
}


export class GetAnnotsByRefrerenceUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnnotsByRefrerenceUsingGetPathParams;
}


export class GetAnnotsByRefrerenceUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
