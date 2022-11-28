import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActionOrganizationActivityListHtmlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class GetActionOrganizationActivityListHtmlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActionOrganizationActivityListHtmlQueryParams;
}


export class GetActionOrganizationActivityListHtmlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
