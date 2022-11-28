import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEvidenceByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetEvidenceByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEvidenceByIdQueryParams;
}


export class GetEvidenceByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
