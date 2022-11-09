import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WellsTagsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ordering" })
  ordering?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class WellsTagsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: WellsTagsListQueryParams;
}


export class WellsTagsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.WellTagSearch })
  wellTagSearches?: shared.WellTagSearch[];
}
