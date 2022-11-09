import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InstitutionsNodeListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=institution_id" })
  institutionId: string;
}


export class InstitutionsNodeListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InstitutionsNodeListPathParams;
}


export class InstitutionsNodeListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
