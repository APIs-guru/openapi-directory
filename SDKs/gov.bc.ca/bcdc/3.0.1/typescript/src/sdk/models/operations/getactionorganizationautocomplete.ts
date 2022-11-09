import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionOrganizationAutocompleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class GetActionOrganizationAutocompleteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionOrganizationAutocompleteQueryParams;
}


export class GetActionOrganizationAutocompleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
