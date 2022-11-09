import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEvidenceByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetEvidenceByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEvidenceByIdQueryParams;
}


export class GetEvidenceByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
