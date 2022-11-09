import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubstanceStudySummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}

export enum GetSubstanceStudySummaryTopEnum {
    PChem = "P-CHEM"
,    Ecotox = "ECOTOX"
,    EnvFate = "ENV FATE"
,    Tox = "TOX"
,    Exposure = "EXPOSURE"
}


export class GetSubstanceStudySummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=property" })
  property?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=property_uri" })
  propertyUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=result" })
  result?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=top" })
  top?: GetSubstanceStudySummaryTopEnum;
}


export class GetSubstanceStudySummaryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubstanceStudySummaryPathParams;

  @Metadata()
  queryParams: GetSubstanceStudySummaryQueryParams;
}


export class GetSubstanceStudySummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  substanceStudySummary?: shared.SubstanceStudySummary;
}
