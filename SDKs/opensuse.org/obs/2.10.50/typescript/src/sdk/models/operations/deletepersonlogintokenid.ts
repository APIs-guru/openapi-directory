import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePersonLoginTokenIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=login" })
  login: string;
}


export class DeletePersonLoginTokenIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePersonLoginTokenIdPathParams;
}


export class DeletePersonLoginTokenIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
