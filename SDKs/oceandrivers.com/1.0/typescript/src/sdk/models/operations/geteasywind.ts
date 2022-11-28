import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEasywindPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=easywindId" })
  easywindId: string;
}


export class GetEasywindQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" })
  period: string;
}


export class GetEasywindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEasywindPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEasywindQueryParams;
}


export class GetEasywindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
