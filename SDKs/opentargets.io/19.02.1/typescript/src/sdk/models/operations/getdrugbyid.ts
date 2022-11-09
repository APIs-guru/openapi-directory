import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDrugByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DRUG_ID" })
  drugId: string;
}


export class GetDrugByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=drug_id" })
  drugId: string;
}


export class GetDrugByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDrugByIdPathParams;

  @Metadata()
  queryParams: GetDrugByIdQueryParams;
}


export class GetDrugByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
