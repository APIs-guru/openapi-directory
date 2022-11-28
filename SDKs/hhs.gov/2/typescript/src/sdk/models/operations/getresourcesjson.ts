import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResourcesJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=q" })
  q: string;
}


export class GetResourcesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResourcesJsonQueryParams;
}


export class GetResourcesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceWrappeds?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
