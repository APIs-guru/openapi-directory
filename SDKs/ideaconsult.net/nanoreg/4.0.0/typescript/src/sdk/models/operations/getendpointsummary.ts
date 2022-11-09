import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEndpointSummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;
}

export enum GetEndpointSummaryTopEnum {
    PChem = "P-CHEM"
,    Ecotox = "ECOTOX"
,    EnvFate = "ENV FATE"
,    Tox = "TOX"
,    Exposure = "EXPOSURE"
}


export class GetEndpointSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=top" })
  top?: GetEndpointSummaryTopEnum;
}


export class GetEndpointSummaryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEndpointSummaryPathParams;

  @Metadata()
  queryParams: GetEndpointSummaryQueryParams;
}


export class GetEndpointSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  facet?: shared.Facet;

  @Metadata()
  statusCode: number;
}
