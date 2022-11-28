import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubstanceStudyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}

export enum GetSubstanceStudyTopEnum {
    PChem = "P-CHEM",
    Ecotox = "ECOTOX",
    EnvFate = "ENV FATE",
    Tox = "TOX",
    Exposure = "EXPOSURE"
}


export class GetSubstanceStudyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=investigation_uuid" })
  investigationUuid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=property" })
  property?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=property_uri" })
  propertyUri?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=top" })
  top?: GetSubstanceStudyTopEnum;
}


export class GetSubstanceStudyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubstanceStudyPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubstanceStudyQueryParams;
}


export class GetSubstanceStudyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  substanceStudy?: shared.SubstanceStudy;
}
