import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionOrganizationShowQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_datasets" })
  includeDatasets?: boolean;
}


export class GetActionOrganizationShowRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionOrganizationShowQueryParams;
}


export class GetActionOrganizationShowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
