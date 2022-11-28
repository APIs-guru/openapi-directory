import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActionOrganizationShowQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_datasets" })
  includeDatasets?: boolean;
}


export class GetActionOrganizationShowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActionOrganizationShowQueryParams;
}


export class GetActionOrganizationShowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
