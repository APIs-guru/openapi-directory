import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimVirtualChassisListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class DcimVirtualChassisListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimVirtualChassisListQueryParams;
}


export class DcimVirtualChassisList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.VirtualChassis })
  results: shared.VirtualChassis[];
}


export class DcimVirtualChassisListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimVirtualChassisList200ApplicationJsonObject?: DcimVirtualChassisList200ApplicationJson;
}
