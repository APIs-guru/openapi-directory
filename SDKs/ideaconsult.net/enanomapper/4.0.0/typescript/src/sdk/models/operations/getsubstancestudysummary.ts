import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubstanceStudySummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}

export enum GetSubstanceStudySummaryTopEnum {
    PChem = "P-CHEM",
    Ecotox = "ECOTOX",
    EnvFate = "ENV FATE",
    Tox = "TOX",
    Exposure = "EXPOSURE"
}


export class GetSubstanceStudySummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=property" })
  property?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=property_uri" })
  propertyUri?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=result" })
  result?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=top" })
  top?: GetSubstanceStudySummaryTopEnum;
}


export class GetSubstanceStudySummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubstanceStudySummaryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubstanceStudySummaryQueryParams;
}


export class GetSubstanceStudySummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  substanceStudySummary?: shared.SubstanceStudySummary;
}
