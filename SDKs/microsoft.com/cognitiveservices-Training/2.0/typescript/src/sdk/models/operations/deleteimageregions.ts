import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteImageRegionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DeleteImageRegionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=regionIds" })
  regionIds: string[];
}


export class DeleteImageRegionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class DeleteImageRegionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteImageRegionsPathParams;

  @Metadata()
  queryParams: DeleteImageRegionsQueryParams;

  @Metadata()
  headers: DeleteImageRegionsHeaders;
}


export class DeleteImageRegionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
