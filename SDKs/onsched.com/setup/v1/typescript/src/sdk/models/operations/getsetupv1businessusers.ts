import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1BusinessusersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: string;
}


export class GetSetupV1BusinessusersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetupV1BusinessusersQueryParams;
}


export class GetSetupV1BusinessusersResponse extends SpeakeasyBase {
  @Metadata()
  businessUserListViewModel?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
