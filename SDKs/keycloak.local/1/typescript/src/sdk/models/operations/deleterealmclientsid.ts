import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRealmClientsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmClientsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRealmClientsIdPathParams;
}


export class DeleteRealmClientsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
