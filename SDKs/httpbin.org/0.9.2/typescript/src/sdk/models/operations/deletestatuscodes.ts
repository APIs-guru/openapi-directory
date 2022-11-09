import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteStatusCodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=codes" })
  codes: string;
}


export class DeleteStatusCodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteStatusCodesPathParams;
}


export class DeleteStatusCodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
