import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubstanceByUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class GetSubstanceByUuidQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=property_uris[]" })
  propertyUris?: string;
}


export class GetSubstanceByUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubstanceByUuidPathParams;

  @Metadata()
  queryParams: GetSubstanceByUuidQueryParams;
}


export class GetSubstanceByUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  substance?: shared.Substance;
}
