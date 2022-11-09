import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEasywindPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=easywindId" })
  easywindId: string;
}


export class GetEasywindQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=period" })
  period: string;
}


export class GetEasywindRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEasywindPathParams;

  @Metadata()
  queryParams: GetEasywindQueryParams;
}


export class GetEasywindResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
