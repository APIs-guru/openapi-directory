import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationActionBatchesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum GetOrganizationActionBatchesStatusEnum {
    Pending = "pending"
,    Completed = "completed"
,    Failed = "failed"
}


export class GetOrganizationActionBatchesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetOrganizationActionBatchesStatusEnum;
}


export class GetOrganizationActionBatchesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationActionBatchesPathParams;

  @Metadata()
  queryParams: GetOrganizationActionBatchesQueryParams;
}


export class GetOrganizationActionBatchesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationActionBatches200ApplicationJsonObject?: Map<string, any>;
}
