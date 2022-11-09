import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubstanceStudyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}

export enum GetSubstanceStudyTopEnum {
    PChem = "P-CHEM"
,    Ecotox = "ECOTOX"
,    EnvFate = "ENV FATE"
,    Tox = "TOX"
,    Exposure = "EXPOSURE"
}


export class GetSubstanceStudyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=investigation_uuid" })
  investigationUuid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=property" })
  property?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=property_uri" })
  propertyUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=top" })
  top?: GetSubstanceStudyTopEnum;
}


export class GetSubstanceStudyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubstanceStudyPathParams;

  @Metadata()
  queryParams: GetSubstanceStudyQueryParams;
}


export class GetSubstanceStudyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  substanceStudy?: shared.SubstanceStudy;
}
