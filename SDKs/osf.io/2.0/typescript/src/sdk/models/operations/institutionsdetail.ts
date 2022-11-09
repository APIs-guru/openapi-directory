import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InstitutionsDetailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=institution_id" })
  institutionId: string;
}


export class InstitutionsDetailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InstitutionsDetailPathParams;
}


export class InstitutionsDetailResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
