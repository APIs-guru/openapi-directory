import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResourcesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=q" })
  q: string;
}


export class GetResourcesJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResourcesJsonQueryParams;
}


export class GetResourcesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceWrappeds?: any[];

  @Metadata()
  statusCode: number;
}
