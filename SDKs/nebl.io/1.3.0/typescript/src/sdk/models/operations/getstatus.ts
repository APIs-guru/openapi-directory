import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class GetStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStatusQueryParams;
}


export class GetStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getStatusResponse?: Map<string, any>;
}
