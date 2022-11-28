import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DrillersNamesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class DrillersNamesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DrillersNamesListQueryParams;
}


export class DrillersNamesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PersonName })
  personNames?: shared.PersonName[];

  @SpeakeasyMetadata()
  statusCode: number;
}
