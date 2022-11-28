import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActionResourceShowQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_tracking" })
  includeTracking?: boolean;
}


export class GetActionResourceShowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActionResourceShowQueryParams;
}


export class GetActionResourceShowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
