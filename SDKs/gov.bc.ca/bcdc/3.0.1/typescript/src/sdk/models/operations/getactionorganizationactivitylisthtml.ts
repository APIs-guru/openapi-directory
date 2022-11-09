import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionOrganizationActivityListHtmlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class GetActionOrganizationActivityListHtmlRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionOrganizationActivityListHtmlQueryParams;
}


export class GetActionOrganizationActivityListHtmlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
