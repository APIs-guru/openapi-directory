import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEndpointSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;
}

export enum GetEndpointSummaryTopEnum {
    PChem = "P-CHEM",
    Ecotox = "ECOTOX",
    EnvFate = "ENV FATE",
    Tox = "TOX",
    Exposure = "EXPOSURE"
}


export class GetEndpointSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=top" })
  top?: GetEndpointSummaryTopEnum;
}


export class GetEndpointSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEndpointSummaryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEndpointSummaryQueryParams;
}


export class GetEndpointSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  facet?: shared.Facet;

  @SpeakeasyMetadata()
  statusCode: number;
}
