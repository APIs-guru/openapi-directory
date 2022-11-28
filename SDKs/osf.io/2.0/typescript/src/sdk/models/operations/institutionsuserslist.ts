import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InstitutionsUsersListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=institution_id" })
  institutionId: string;
}


export class InstitutionsUsersListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InstitutionsUsersListPathParams;
}


export class InstitutionsUsersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
