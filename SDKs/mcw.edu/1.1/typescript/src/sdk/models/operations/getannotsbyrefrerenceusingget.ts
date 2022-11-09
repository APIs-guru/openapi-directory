import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAnnotsByRefrerenceUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=refRgdId" })
  refRgdId: number;
}


export class GetAnnotsByRefrerenceUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnnotsByRefrerenceUsingGetPathParams;
}


export class GetAnnotsByRefrerenceUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
