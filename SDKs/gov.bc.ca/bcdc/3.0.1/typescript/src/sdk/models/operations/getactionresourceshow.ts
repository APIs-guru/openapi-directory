import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionResourceShowQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_tracking" })
  includeTracking?: boolean;
}


export class GetActionResourceShowRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionResourceShowQueryParams;
}


export class GetActionResourceShowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
