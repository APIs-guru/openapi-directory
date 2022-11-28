import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDrugByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DRUG_ID" })
  drugId: string;
}


export class GetDrugByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drug_id" })
  drugId: string;
}


export class GetDrugByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDrugByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDrugByIdQueryParams;
}


export class GetDrugByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
