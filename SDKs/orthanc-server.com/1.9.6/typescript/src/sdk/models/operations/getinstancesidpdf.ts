import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdPdfPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdPdfRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdPdfPathParams;
}


export class GetInstancesIdPdfResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
