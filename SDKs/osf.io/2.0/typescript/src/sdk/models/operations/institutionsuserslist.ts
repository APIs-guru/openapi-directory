import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InstitutionsUsersListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=institution_id" })
  institutionId: string;
}


export class InstitutionsUsersListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InstitutionsUsersListPathParams;
}


export class InstitutionsUsersListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
