import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePersonLoginTokenIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=login" })
  login: string;
}


export class DeletePersonLoginTokenIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePersonLoginTokenIdPathParams;
}


export class DeletePersonLoginTokenIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
