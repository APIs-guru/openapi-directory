import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestnetGetStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class TestnetGetStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TestnetGetStatusQueryParams;
}


export class TestnetGetStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getStatusResponse?: Map<string, any>;
}
