import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DrillersNamesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class DrillersNamesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DrillersNamesListQueryParams;
}


export class DrillersNamesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PersonName })
  personNames?: shared.PersonName[];

  @Metadata()
  statusCode: number;
}
